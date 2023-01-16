var displayButton = document.getElementById("displayButton");
displayButton.addEventListener("click", showTenPlayers);

var homeButton = document.getElementById("main-btn");
homeButton.addEventListener("click", scrollUp)
 
document.getElementById("dataset1Button").addEventListener("click", function(){getDataAndCharts("dataset_1.json")});
document.getElementById("dataset2Button").addEventListener("click", function(){getDataAndCharts("dataset_2.json")});
document.getElementById("dataset3Button").addEventListener("click", function(){getDataAndCharts("dataset_3.json")});

function getDataAndCharts(filepath){
  fetchDataSet(filepath);
  generateCharts(filepath);
}

function scrollUp() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

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


function fetchDataSet(filepath){
  fetch(filepath)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const playerArraybody = document.getElementById('player-array').getElementsByTagName("tbody")[0];
      playerArraybody.innerHTML = '';
      data.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `<td>${item.name}</td><td>${item.score}</td><td>${item.rank}</td><td>${item.country}</td><td>${item.email}</td><td>${item.ip_address}</td><td>${item.registered}</td>`
      playerArraybody.appendChild(row);
      })
    });
}

var unranked;
var platinum;
var diamond;
var chart1;
var chart2;
function generateCharts(filepath){

    fetch(filepath)
    .then(function(response) {
        if (!response.ok) {
            throw new Error("HTTP error, status = " + response.status);
        }
        return response.json();
    })
    .then(function (json){

        unranked = 0;
        platinum = 0;
        diamond = 0;
        zero_sto = 0;
        sto_dwiescie = 0;
        dwiescie_trzysta = 0;
        trzysta_czterysta = 0;
        czterysta_piecset = 0;
        piecset_szescset = 0;
        szescset_siedemset = 0;
        siedemset_osiemset = 0;
        osiemset_dziewiecset = 0;
        dziewiecset_tysiac = 0;
        for(var i = 0; i < json.length; i++) {
            if (json[i].rank == "Unranked"){
                unranked++;
            } else {
                if (json[i].rank == "Platinum")
                platinum++;
                else {
                diamond++;
            }}
        }
        console.log('Unranked: ' + unranked);
        console.log('Platinum: ' + platinum);
        console.log('Diamond: ' + diamond);
    
        const data1 = {
            labels: [
                'Unranked',
                'Platinum',
                'Diamond'
            ],
            datasets: [{
                label: "Ranks amongst players",
                data: [unranked, platinum, diamond],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(154, 62, 235)'
                ],
                hoverOffset: 4
            }]
        }
    
        const config1 = {
            type: 'doughnut',
            data: data1,
            options: {
                responsive: true,
            }
        }
        if(chart1 != null)
        {
          chart1.destroy()

        }
        chart1 = new Chart(
            document.getElementById('chart1'),
            config1
        )
    
        for(var i = 0; i < json.length; i++){
            if (json[i].score <= 100) {
                zero_sto++;
            } else if (json[i].score <= 200 && json[i].score > 100) {
                sto_dwiescie++;
                } else if (json[i].score <= 300 && json[i].score > 200) {
                    dwiescie_trzysta++;
                    } else if (json[i].score <= 400 && json[i].score > 300) {
                        trzysta_czterysta++;
                        } else if (json[i].score <= 500 && json[i].score > 400) {
                            czterysta_piecset++;
                            } else if (json[i].score <= 600 && json[i].score > 500) {
                                piecset_szescset++;
                                } else if (json[i].score <= 700 && json[i].score > 600) {
                                    szescset_siedemset++;
                                    } else if (json[i].score <= 800 && json[i].score > 700) {
                                        siedemset_osiemset++;
                                        } else if (json[i].score <= 900 && json[i].score > 800) {
                                            osiemset_dziewiecset++;
                                            } else if (json[i].score <= 1000 && json[i].score > 900) {
                                                dziewiecset_tysiac++;
                                                }
        }
        console.log('0-100: ' + zero_sto);
        console.log('100-200: ' + sto_dwiescie);
        console.log('200-300: ' + dwiescie_trzysta);
        console.log('300-400: ' + trzysta_czterysta);
        console.log('400-500: ' + czterysta_piecset);
        console.log('500-600: ' + piecset_szescset);
        console.log('600-700: ' + szescset_siedemset);
        console.log('700-800: ' + siedemset_osiemset);
        console.log('800-900: ' + osiemset_dziewiecset);
        console.log('900-1000: ' + dziewiecset_tysiac);
    
        const data2 = {
            labels: [
                '<101',
                '101-200',
                '201-300',
                '301-400',
                '401-500',
                '501-600',
                '601-700',
                '701-800',
                '801-900',
                '>900'
            ],
            datasets: [{
                label: 'Number of players with this score',
                data: [zero_sto, sto_dwiescie, dwiescie_trzysta, trzysta_czterysta, czterysta_piecset, piecset_szescset, szescset_siedemset, siedemset_osiemset, osiemset_dziewiecset, dziewiecset_tysiac],
                backgroundColor: [
                    'rgba(255, 0, 0, 0.2)',
                    'rgba(255, 127, 0, 0.2)',
                    'rgba(255, 255, 0, 0.2)',
                    'rgba(127, 255, 0, 0.2)',
                    'rgba(0, 255, 0, 0.2)',
                    'rgba(0, 255, 127, 0.2)',
                    'rgba(0, 255, 255, 0.2)',
                    'rgba(0, 127, 255, 0.2)',
                    'rgba(0, 0, 255, 0.2)',
                    'rgba(127, 0, 255, 0.2)'
                  ],
                  borderColor: [
                    'rbg(255, 0, 0)',
                    'rbg(255, 127, 0)',
                    'rbg(255, 255, 0)',
                    'rbg(127, 255, 0)',
                    'rbg(0, 255, 0)',
                    'rbg(0, 255, 127)',
                    'rbg(0, 255, 255)',
                    'rbg(0, 127, 255)',
                    'rbg(0, 0, 255)',
                    'rbg(127, 0, 255)'
                  ],
                  borderWidth: 1
                
            }]
        }
    
        const config2 = {
            type: 'bar',
            data: data2,
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        }
        if(chart2 != null)
        {
          chart2.destroy();
        }
          chart2 = new Chart(
            document.getElementById('chart2'),
            config2
        )
        

        
    })
    
    .catch(function(error) {
        console.log("Error: " + error.message)
    })
}

