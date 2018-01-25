'use strict';

//making list for hours
var hours = ['6am', '7am', '8am', '9am', '10am', '11am','12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

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

//total td
var totalEl = document.createElement('td');
var totalText = document.createTextNode('Total');
totalEl.appendChild(totalText);
var tfooterEl = document.getElementById('total');
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
    var reducer = (accumulator, currentValue) => accumulator + currentValue;
    location.total = location.hourlySales.reduce(reducer);
    //storing total in table
    var totalEl = document.createElement('td');
    var totalText = document.createTextNode(location.total);
    totalEl.appendChild(totalText);
    var tfooterEl = document.getElementById('total');
    tfooterEl.appendChild(totalEl);

  }

  makeTable(this);
}

// calling all functions
function create() {
  var pike = new Stand('pike','first & pike', 23, 65, 6,3);
  var seaTac = new Stand('seaTac', 'SeaTac Airport', 3, 24, 1.2);
  var seattleCenter = new Stand('seattleCenter', 'Seattle Center', 11, 38, 3.7);
  var capitolHill = new Stand('capitolHill', 'Capitol Hill', 20, 38, 2.3);
  var alki = new Stand('alki', 'Alki', 2, 16, 4.6);
}

create();