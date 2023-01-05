const mainBtn = document.querySelector(".main-btn")

mainBtn.addEventListener('click', function() {
})

const API_URL = 'https://my.api.mockaroo.com/edi.json?key=953a0b00';
//Na ten moment działa na innym api bo tam w dniu commitowania się wyczerpały requesty, a chce żeby coś się wyświetlało, jutro 06.01 jak odświeży się pula requestów to zmienię kod na dane pod tamten schemat//
const test_url = 'https://random-data-api.com/api/v2/users?size=2&is_json=true';

fetch(test_url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const playerArray = document.getElementById('player-array');
      data.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `<td>${item.id}</td><td>${item.uid}</td><td>${item.zip_code}</td><td>${item.social_insurance_number}</td><td>${item.username}</td><td>${item.first_name}</td><td>${item.last_name}</td><td>${item.date_of_birth}</td>`
      playerArray.appendChild(row);
      })
    });
