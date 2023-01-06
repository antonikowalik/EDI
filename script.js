const mainBtn = document.querySelector(".main-btn")

mainBtn.addEventListener('click', function() {
    mainBtn.style.backgroundColor = '#cdd3ff';
})

var button = document.getElementById("displayButton");
button.addEventListener("click", showTenPlayers);

const API_URL = 'https://my.api.mockaroo.com/edi.json?key=953a0b00';
//Na ten moment działa na innym api bo w dniu commitowania się wyczerpały requesty, a chce żeby coś się wyświetlało, jutro 06.01 jak odświeży się pula requestów to zmienię kod na dane pod tamten schemat//
const test_url = 'https://random-data-api.com/api/v2/users?size=2&is_json=true';

fetch("EDI.json")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const playerArray = document.getElementById('player-array');
      data.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `<td>${item.id}</td><td>${item.name}</td><td>${item.score}</td><td>${item.rank}</td><td>${item.country}</td><td>${item.email}</td><td>${item.ip_address}</td><td>${item.registered}</td>`
      playerArray.appendChild(row);
      })
    });

function showTenPlayers(){
  var tab = document.getElementById("player-array")
  var numberOfRows = tab.rows.length;
  for (var i = 11; i < numberOfRows; i++) {
    tab.rows[i].style.display = "none";
  }
}
