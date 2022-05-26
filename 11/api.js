function getFetch(url, callback) {
    const headers = {
        Authorization: 'KakaoAK e49144820ffb0ba340afbc70809df666',
    };

    fetch(url, { headers })
        .then((response) => response.json())
        .then((data) => callback(data));
}

const url = `https://dapi.kakao.com/v2/search/web?query=이효리`;

getFetch(url, (data) => console.log(data));