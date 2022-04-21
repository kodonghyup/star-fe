const btn = document.getElementById('btn');

function getRandom() {
 
  const min = parseInt(document.getElementById('min').value, 10);
  const max = parseInt(document.getElementById('max').value, 10);
  const random = Math.floor(Math.random() * (max - min + 1)) + min; 
  return random;
} 

function btnClick() {
  const box = document.getElementById('box');
  const random = getRandom();
  const animationTime = 10;
  let start = random - 50;

  const repeat = setInterval(function boxAnimation() {
    btn.disabled = 'disabled';
    box.innerHTML = start;

    if (start === random) {
      clearInterval(repeat);
      btn.disabled = '';
    }

    start += 1;
  }, animationTime);
}

btn.addEventListener('click', btnClick);