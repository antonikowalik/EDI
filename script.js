const mainBtn = document.querySelector(".main-btn")

mainBtn.addEventListener('click', function() {
    mainBtn.style.backgroundColor = '#cdd3ff';
})

const API_URL = 'https://my.api.mockaroo.com/edi.json?key=953a0b00';

fetch(API_URL)
  .then(response => response.json())
  .then(data => {
    // const playerArray = document.getElementById('player-array');

    // data.players.forEach(player => {
    //   const div = document.createElement('div');
    //   div.textContent = JSON.stringify(player);
    //   playerArray.appendChild(div);
    console.log(data);
    });
