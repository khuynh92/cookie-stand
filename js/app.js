'use strict';

//making list for hours
var hours = ['6am', '7am', '8am', '9am', '10am', '11am','12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

for (var i = 0; i < hours.length; i++) {
  var hoursEl = document.createElement('li');
  hoursEl.className = 'hoursLi';
  var hoursText = document.createTextNode(hours[i]);
  hoursEl.appendChild(hoursText);
  var ul = document.getElementById('hoursList');
  ul.appendChild(hoursEl);
}

//creating li for total
var totalEl = document.createElement('li');
var totalText = document.createTextNode('Total');
totalEl.appendChild(totalText);
totalEl.className = 'total';
ul.appendChild(totalEl);

//constructor function
function Location(idTag, name, minCust, maxCust, cookiesAvg) {
  this.idTag = idTag;
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.cookiesAvg = cookiesAvg;
  this.hourlySales = [];
  this.generateRandom = function() {
    return Math.floor(Math.random()*(maxCust - minCust + 1)) + minCust;
  };

  function makeList(location) {

    // creating the div
    var newDiv = document.createElement('div');
    newDiv.setAttribute('id', location.idTag);
    newDiv.className = 'list';
    var container = document.getElementById('container');
    container.appendChild(newDiv);
    document.getElementById(location.idTag).style.display = 'inline-block';

    //creating the header
    var newHeader = document.createElement('h2');
    var newHeaderText = document.createTextNode(location.name);
    newHeader.appendChild(newHeaderText);
    newDiv.appendChild(newHeader);

    // creating Ul
    var newList = document.createElement('ul');
    newDiv.appendChild(newList);

    // creating the li in a for loop to reiterate all the lists in the array

    for (var i = 0; i < 13; i++) {
      location.hourlySales.push(Math.floor(location.generateRandom()*location.cookiesAvg));

      var newItem = document.createElement('li');
      var newItemText = document.createTextNode(location.hourlySales[i]);
      newItem.appendChild(newItemText);
      // setting position of li to ul
      newList.appendChild(newItem);
    }
    // creating the Total for the day
    var reducer = (accumulator, currentValue) => accumulator + currentValue;
    location.total = location.hourlySales.reduce(reducer);
    var totalEl = document.createElement('li');
    totalEl.className = 'total';
    var totalText = document.createTextNode(location.total);
    totalEl.appendChild(totalText);
    newList.appendChild(totalEl);
  }
  makeList(this);
}

var pike = new Location('pike','first & pike', 23, 65, 6,3);
var seaTac = new Location('seaTac', 'SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Location('seattleCenter', 'Seattle Center', 11, 38, 3.7);
var capitolHill = new Location('capitolHill', 'Capitol Hill', 20, 38, 2.3);
var alki = new Location ('alki', 'Alki', 2, 16, 4.6);
