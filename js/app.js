
/* =================================
  Random numbers for Social Media
==================================== */
window.onload = function getRandomNumber(){
  document.getElementById('twitterVisits').innerHTML += Math.floor((Math.random() * 10504) + 2000);
  document.getElementById('facebookVisits').innerHTML += Math.floor((Math.random() * 9087) + 1000);
  document.getElementById('googleVists').innerHTML += Math.floor((Math.random() * 23068) + 900);
};

//hide the green badge nexts to the alert icon when the alert is closed
document.getElementById('alertclosebtn').addEventListener("click", function() {
  var badge = document.getElementById('badge');
  badge.style.display = 'none';
});

//set the signup date
function todaysDate(){
  var d = new Date();
  var date = d.getFullYear() +'/ ' + d.getMonth()+1 +'/ ' + d.getDate();
  return date;
}
document.getElementById("date1").innerHTML += todaysDate();
document.getElementById("date2").innerHTML += todaysDate();
document.getElementById("date3").innerHTML += todaysDate();
document.getElementById("date4").innerHTML += todaysDate();

// //add users to local storage
// var names = ['Victoria','Dale','Dawn','Dan'];
//   localStorage.setItem('name', JSON.stringify(names[i]));
//   for (var i=0; i< names.length; i++){
// }
// for (var i=0; i< names.length; i++){
//   console.log(localStorage.names[i]);
// }

//dislpay message when message textarea is not null and SEND button is clicked
document.getElementById('sendBtn').addEventListener("click", function(){
  var userMessage = document.getElementById('message4users');
  if(userMessage.value != ""){
    alert('your message has been sent.');
  }else{
    alert('Please enter your message before you click on SEND button.');
  }
});

/* =================================
  localStorage
==================================== */
// Test for local storage
function supportsLocalStorage() {
  try {
	return 'localStorage' in window && window['localStorage'] !== null;
  } catch(e){
	return false;
  }
}

window.onload = function() {
  if (supportsLocalStorage()) {
    const myonoffswitch = document.getElementById('myonoffswitch');
    const myonoffswitch2 = document.getElementById('myonoffswitch2');
    const timezone = document.getElementById('timezone');
    const saveBtn = document.getElementById('saveBtn');
    const cancelBtn = document.getElementById('cancelBtn');

    //save button Event Listener
    saveBtn.addEventListener("click", function(){
      //myonoffswitch
      if(myonoffswitch.checked){
        localStorage.setItem('myonoffswitch', true);
        // console.log('myonoffswitch is checked');
      }else{
        localStorage.setItem('myonoffswitch', false);
        // console.log('myonoffswitch is unchecked');
      }
      //myonoffswitch2
      if(myonoffswitch2.checked){
        localStorage.setItem('myonoffswitch2', true);
        // console.log('myonoffswitch2 is checked');
      }else{
        localStorage.setItem('myonoffswitch2', false);
        // console.log('myonoffswitch2 is unchecked');
      }

      //timezone
      if(timezone.selectedIndex){
        //console.log('selected timezone');
        localStorage.setItem('selectedtimezone', timezone.selectedIndex);
      }


    });//save button Event Listener

    //load settings
    function load_localStorage(){
      //myonoffswitch
      const myonoffswitch_is_checked = JSON.parse(localStorage.getItem('myonoffswitch'));
      if(myonoffswitch_is_checked){
        // console.log('myonoffswitch_is_checked =', myonoffswitch_is_checked);
        document.getElementById('myonoffswitch').checked = true;
      }else{
        // console.log('myonoffswitch_is_unchecked =', myonoffswitch_is_checked);
        document.getElementById('myonoffswitch').checked = false;
      }
      //myonoffswitch2
      const myonoffswitch2_is_checked = JSON.parse(localStorage.getItem('myonoffswitch2'));
      if(myonoffswitch2_is_checked){
        // console.log('myonoffswitch2_is_checked =', myonoffswitch2_is_checked);
        document.getElementById('myonoffswitch2').checked = true;
      }else{
        // console.log('myonoffswitch2_is_unchecked =', myonoffswitch2_is_checked);
        document.getElementById('myonoffswitch2').checked = false;
      }
      if(timezone.selectedIndex){
        timezone.selectedIndex = localStorage.selectedtimezone;
      }
    }

    load_localStorage();
  }
  //clear localStorage
  cancelBtn.addEventListener("click", function(){
    console.log('clear storage is clicked');
    location.reload();
    localStorage.clear();
  });
};


/* =================================
  Charts
==================================== */

//line chart
  const dailyTrafficChart = document.getElementById("DAILYTRAFFIC").getContext('2d');
  const myChart = new Chart(dailyTrafficChart, {
      type: 'bar',
      data: {
          labels: ["S", "M", "T", "W", "T", "F", "s"],
          datasets: [{
              label: '# of Votes',
              data: [75, 100, 175, 125, 225, 200, 100],
              backgroundColor:'#7377BF',
              borderSkipped:'top'
          }]
      },
      options: {
          legend: {
            display: false
          },
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }
  });
//Bars chart
  const trafficChart = document.getElementById("TRAFFIC").getContext('2d');
  const myLineChart = new Chart(trafficChart, {
    type: 'line',
    data: {
      labels:["","16 - 22","23 - 29","30 - 5","6 - 12","13 - 19","20 - 26","27 - 3","4 - 10","11 - 17","18 - 24", "25 - 31"],
      datasets: [{
        label: 'TRAFFIC4',
        data:[
          { x: new Date(01, 22), y: 750},
          { x: new Date(01, 29), y: 1250},
          { x: new Date(02, 3), y: 1000},
          { x: new Date(02, 9), y: 1500},
          { x: new Date(02, 16), y: 2000},
          { x: new Date(02, 23), y: 1500},
          { x: new Date(02, 26), y: 1750},
          { x: new Date(03, 03), y: 1250},
          { x: new Date(03, 10), y: 1750},
          { x: new Date(03, 17), y: 2250},
          { x: new Date(03, 24), y: 1750},
          { x: new Date(03, 31), y: 2250}
          ],
        // data:[750, , 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2500, 1750],
        lineTension:0,
        fill:'origin',
        backgroundColor:'rgba(226, 227,246, 0.5)',
        borderColor:'#AFB2E7',
        borderWidth:2,
        pointRadius:4,
        pointBorderWidth:3,
        pointBorderColor:'#9497CD'
      }]
    } ,
    options: {
      showLines:true,
      legend: {
        display: false
      },
    }
  });
//
  const doughnutChart = document.getElementById("MOBILEUSERS").getContext('2d');
  const myDoughnut = new Chart(doughnutChart, {
    type:'doughnut',
    data:{
      datasets:[{
        data:[
          22,
          18,
          60
        ],
        backgroundColor:[
          '#81C98F',
          '#74B1BF',
          '#7377BF'
        ]
      }],
      labels:[
        'Phones',
        'Tablets',
        'Desktop'
      ]
    },
    options:{
      legend:{
        position:'right',
        labels:{
          boxWidth:15,
          padding:30
        }
      },
      rotation:10
    }
  });
