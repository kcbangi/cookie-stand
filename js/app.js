'use strict';

var time = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm', 'Total'];
var table = document.createElement('table');
var stores = [];

function CookieStand(location, min, max, avg){
  this.location = location;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.perHour = [];
  this.perDay = 0;
  stores.push(this);

  this.customers = function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  };
  this.cookies = function () {
    return Math.ceil(this.customers() * this.avg);
  };
  this.calcTotal = function () {
    for (var i = 0; i < time.length; i++) {
      this.perHour[i] = this.cookies();
      this.perDay += this.perHour[i];
    }
  };

  this.display = function (){
    var table1 = document.createElement('tr');
    var table2 = document.createElement('th');
    table2.textContent = this.location;
    table1.appendChild(table2);
    for (var i = 0; i < time.length; i++) {
      var table3 = document.createElement('td');
      table3.textContent = this.perHour[i];
      table1.appendChild(table3);
    }
    table3.textContent = this.perDay;
    table1.appendChild(table3);
    table.appendChild(table1);
    document.body.appendChild(table);
  };

  this.render = function () {
    this.customers();
    this.cookies();
    this.calcTotal();
    this.display();
  };
}

var setTable = function (){
  var table4 = document.createElement('tr');
  var table5 = document.createElement('th');
  table5.textContent = ('Location');
  table4.appendChild(table5);
  table.appendChild(table4);
  for (var i = 0; i < time.length; i++) {
    var table6 = document.createElement('th');
    table6.textContent = time[i];
    table4.appendChild(table6);
  }
};

var firstAndPike = new CookieStand ('1st and Pike', 23, 65, 6.3);
var seatacAirport = new CookieStand ('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new CookieStand ('Seattle Center', 11, 38, 3.7);
var capitol = new CookieStand ('Capitol Hill', 20, 38, 2.3);
var alki = new CookieStand ('Alki', 2, 16, 4.6);

setTable();

function displayAllstores(){
  for (var i = 0; i < stores.length; i++) {
    stores[i].render();
  }
  document.body.appendChild(table);
}

displayAllstores();

var formid = document.getElementById('formid');
var locName = document.getElementById('storeName');
var minCust = document.getElementById('mini');
var maxi = document.getElementById('maxi');
var avge = document.getElementById('avge');


var newShop = function(event) {
  event.preventDefault();

  var location = event.target.storeName.value;
  var min = event.target.mini.value;
  var max = event.target.maxi.value;
  var avg = event.target.avge.value;

  var newShop = new CookieStand(location, min, max, avg);

  console.log('New shop ' + event.target.storeName.value);

  newShop.render();
};

formid.addEventListener('submit', newShop);
