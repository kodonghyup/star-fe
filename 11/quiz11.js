
const $btn = document.querySelector("#search-btn");
const $input = document.querySelector("#search-text");
const $result = document.querySelector("#result");
const $wrapMoreBtn = document.querySelector("#wrap-more-btn");
const $moreBtn = document.querySelector("#more-btn");

const url = "https://dapi.kakao.com/v2/search/web";
const headers = {
  Authorization: "KakaoAK 8e6158141cb85535608c40f1fbab53e0",
};
const success = (data) => {
  const { documents } = data;
  console.log(documents);

  $result.innerHTML = `<ul class="list-group list-group-flush">`;
  documents.forEach((ele) => {
    $result.innerHTML += `<li class="list-group-item"><h2><a href=${ele.url}><${ele.title}</a></h2><p>${ele.contents}</p></li>`;
  });
  $result.innerHTML += `</ul>`;
};
const error = () => {
  alert("데이터를 가져올 수 없습니다");
};

const search = (size) => {
  const { value } = $input;
  if (value === "") {
    alert("검색어를 입력하세요");
    return;
  }
  fetch(`${url}?query=${value}&size=${size}`, { headers })
    .then((res) => res.json())
    .then(success)
    .catch(error);
};
const toggleBtn = (type) => {
  if (type === "appear") {
    $wrapMoreBtn.classList.remove("hidden");
  } else if (type === "disappear") {
    $wrapMoreBtn.classList.add("hidden");
  } else {
    return;
  }
};

$btn.addEventListener("click", () => {
  search(5);
  toggleBtn("appear");
});
$input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    search(5);
    toggleBtn("appear");
  }
});
$moreBtn.addEventListener("click", () => {
  search(15);
  toggleBtn("disappear");
});