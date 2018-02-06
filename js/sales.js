'use strict';

//making list for hours
var hours = ['6am', '7am', '8am', '9am', '10am', '11am','12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var hourlyTotalsArray = [];
var allLocationsSales = [];

for (var i = 0; i < hours.length; i++) {
  var trEl = document.createElement('tr');
  trEl.setAttribute('id', hours[i]);
  var tbodyEl = document.getElementById('table');
  tbodyEl.appendChild(trEl);

  var thEl = document.createElement('th');
  var thText = document.createTextNode(hours[i]);
  thEl.appendChild(thText);
  trEl.appendChild(thEl);
  thEl.className = 'hours';
}

//total td, created as a footer
var totalEl = document.createElement('th');
var totalText = document.createTextNode('Total');
totalEl.appendChild(totalText);
var tfooterEl = document.getElementById('totalRow');
tfooterEl.appendChild(totalEl);

//constructor function
function Stand(idTag, name, minCust, maxCust, cookiesAvg) {
  this.idTag = idTag;
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.cookiesAvg = cookiesAvg;
  this.hourlySales = [];
  this.generateRandom = function() {
    return Math.floor(Math.random()*(maxCust - minCust + 1)) + minCust;
  };

  function makeTable(location) {

    //creating the header
    var thEl = document.createElement('th');
    var thText = document.createTextNode(location.name);
    thEl.appendChild(thText);
    var tHead = document.getElementById('tableHead');
    tHead.appendChild(thEl);
    thEl.className = 'topRow';

    //pushing data into table data
    for (var i = 0; i < hours.length; i++) {
      location.hourlySales.push(Math.floor(location.generateRandom()*location.cookiesAvg));
      var tdEl = document.createElement('td');
      var tdText = document.createTextNode(location.hourlySales[i]);
      tdEl.appendChild(tdText);
      var trEl = document.getElementById(hours[i]);
      trEl.appendChild(tdEl);
    }

    //total for the day
    function sum(total, num) {
      return total + num;
    }
    location.total = location.hourlySales.reduce(sum);

    //storing total in the footer
    var totalEl = document.createElement('td');
    var totalText = document.createTextNode(location.total);
    totalEl.appendChild(totalText);
    var tfooterEl = document.getElementById('totalRow');
    tfooterEl.appendChild(totalEl);
  }
  makeTable(this);
  allLocationsSales.push(this.hourlySales);
}

new Stand('pike','first & pike', 23, 65, 6.3);
new Stand('seaTac', 'SeaTac Airport', 3, 24, 1.2);
new Stand('seattleCenter', 'Seattle Center', 11, 38, 3.7);
new Stand('capitolHill', 'Capitol Hill', 20, 38, 2.3);
new Stand('alki', 'Alki', 2, 16, 4.6);

function makeTotal(){
  //create totals for the hours
  var tableHead = document.getElementById('tableHead');
  var hoursTotal = document.createElement('th');
  hoursTotal.textContent = 'Total';
  hoursTotal.className = 'total';
  tableHead.appendChild(hoursTotal);

  for (var k = 0; k < hours.length; k++) {
    hourlyTotalsArray[k] = 0;
    for (var m = 0; m < allLocationsSales.length; m++) {
      hourlyTotalsArray[k] += allLocationsSales[m][k];
    }
  }

  for (var l = 0; l < hours.length; l++) {
    var trTotalEl = document.getElementById(hours[l]);
    var totalTd = document.createElement('td');
    totalTd.className = 'total';
    totalTd.textContent = hourlyTotalsArray[l];
    trTotalEl.appendChild(totalTd);
  }

  //creating totaltotal
  var totalTotal = 0;
  for (var o = 0; o < hourlyTotalsArray.length; o++) {
    totalTotal += hourlyTotalsArray[o];
  }

  var totalTotalEl = document.createElement('td');
  totalTotalEl.textContent = totalTotal;
  totalTotalEl.className = 'total';
  totalTotalEl.setAttribute('id', 'totalTotal');
  tfooterEl.appendChild(totalTotalEl);
}
makeTotal();

var newStore = document.getElementById('newStore');

function newStoreHandler(event) {
  console.log(event);
  event.preventDefault();

  if (!event.target.storeName.value || !event.target.minCust.value || !event.target.maxCust.value || !event.target.cookiesAvg.value) {
    return alert('Fields cannot be empty!');
  }

  var storeName = event.target.storeName.value;
  var minCust = parseInt(event.target.minCust.value);
  var maxCust = parseInt(event.target.maxCust.value);
  var cookiesAvg = parseFloat(event.target.cookiesAvg.value);
  var idTag = storeName;
  console.log(storeName, minCust, maxCust, cookiesAvg);

  //remove hours total
  var tableHeadEl = document.getElementById('tableHead');
  tableHeadEl.removeChild(tableHeadEl.lastChild);
  var totalTotalEl = document.getElementById('totalTotal');
  tfooterEl.removeChild(totalTotalEl);

  for (var n = 0; n < hours.length; n++) {
    var removeData = document.getElementById(hours[n]);
    removeData.removeChild(removeData.lastChild);
  }

  new Stand(idTag, storeName, minCust, maxCust, cookiesAvg);

  //remake totals with
  makeTotal();

  event.target.storeName.value = null;
  event.target.minCust.value = null;
  event.target.maxCust.value = null;
  event.target.cookiesAvg.value = null;
}

newStore.addEventListener('submit', newStoreHandler, false);