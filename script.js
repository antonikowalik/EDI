var displayButton = document.getElementById("displayButton");
displayButton.addEventListener("click", showTenPlayers);

var homeButton = document.getElementById("main-btn");
homeButton.addEventListener("click", scrollUp)
 

function scrollUp() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

const API_URL = 'https://my.api.mockaroo.com/edi.json?key=953a0b00';

fetch(API_URL)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const playerArray = document.getElementById('player-array');
      data.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `<td>${item.name}</td><td>${item.score}</td><td>${item.rank}</td><td>${item.country}</td><td>${item.email}</td><td>${item.ip_address}</td><td>${item.registered}</td>`
      playerArray.appendChild(row);
      })
    });

function showTenPlayers(){
  var tab = document.getElementById("player-array")
  var numberOfRows = tab.rows.length;
  if(displayButton.textContent == "TOP 10")
  {
    for (var i = 11; i < numberOfRows; i++) {
      tab.rows[i].style.display = "none";
    }
    displayButton.textContent = 'All';
  }
  else
  {
    for (var i = 11; i < numberOfRows; i++) {
      tab.rows[i].style.display = "table-row";
    }
    displayButton.textContent = 'TOP 10';
  }
  
}
