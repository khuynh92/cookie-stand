'use strict';

function makeList(location) {
  // creating the div
  var newDiv = document.createElement('div');
  newDiv.setAttribute('id', location.name);
  document.body.appendChild(newDiv);

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
  var totalText = document.createTextNode('Total: ' + location.total);
  totalEl.appendChild(totalText);
  newList.appendChild(totalEl);
}

//first & Pike
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


makeList(pike);

var seaTac = {
  name: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  cookiesAvg: 1.2,
  hourlySales: [],
  generateRandom: function() {
    return Math.floor(Math.random()*(this.maxCust - this.minCust + 1)) + this.minCust;
  }
};

makeList(seaTac);