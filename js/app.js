'use strict';



function makeList(location) {

  // creating the div
  var newDiv = document.createElement('div');
  newDiv.setAttribute('id', location.name);
  newDiv.className = 'list';
  container.appendChild(newDiv);
  document.getElementById(location.name).style.display = 'inline-block';

  //creating the header
  var newHeader = document.createElement('h2');
  var newHeaderText = document.createTextNode(location.name);
  newHeader.appendChild(newHeaderText);
  newDiv.appendChild(newHeader);

  // creating Ul
  var newList = document.createElement('ul');
  newDiv.appendChild(newList);

  // creating the li in a for loop to reiterate all the lists in the array

  for (var i = 0; i < 14; i++) {
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

//first & Pike object
var pike = {
  name: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  cookiesAvg: 6.3,
  hourlySales: [],
  generateRandom: function() {
    return Math.floor(Math.random()*(this.maxCust - this.minCust + 1)) + this.minCust;
  }
};

//making random list for first & pike
makeList(pike);

//seaTac Airport object
var seaTac = {
  idTag: 'seaTac',
  name: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  cookiesAvg: 1.2,
  hourlySales: [],
  generateRandom: function() {
    return Math.floor(Math.random()*(this.maxCust - this.minCust + 1)) + this.minCust;
  }
};

// making random list for
makeList(seaTac);

var seattleCenter = {
  name: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  cookiesAvg: 3.7,
  hourlySales: [],
  generateRandom: function() {
    return Math.floor(Math.random()*(this.maxCust - this.minCust + 1)) + this.minCust;
  }
};

makeList(seattleCenter);

var capitolHill = {
  name: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  cookiesAvg: 2.3,
  hourlySales: [],
  generateRandom: function() {
    return Math.floor(Math.random()*(this.maxCust - this.minCust + 1)) + this.minCust;
  }
};

makeList(capitolHill);

var alki = {
  name: 'Alki',
  minCust: 2,
  maxCust: 16,
  cookiesAvg: 4.6,
  hourlySales: [],
  generateRandom: function() {
    return Math.floor(Math.random()*(this.maxCust - this.minCust + 1)) + this.minCust;
  }
};

makeList(alki);