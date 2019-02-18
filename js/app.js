'use strict';

var time = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];
var table1 = document.createElement('table');

function CookieStand(location, min, max, avg) {
  this.location = location;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.perHour = [];
  this.perDay = 0;
  this.customers = function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  };
  this.cookies = function() {
    return Math.ceil(this.customers() * this.avg);
  };
  this.caclTotal = function() {
    for (var i = 0; i < time.length; i++) {
      this.perHour[i] = this.cookies();
    }
    for (var i = 0; i < this.perHour.length; i++) {
      this.perDay += this.perHour[i];
    }
    return this.perHour;
  };
  this.display = function() {
    var table2 = document.createElement('tr');
    var table3 = document.createElement('tr');
    var table4 = document.createElement('th');
    table4.textContent = this.location;
    table3.appendChild(table4);
    for (var i = 0; i < time.length; i++) {
      var tdElement1 = document.createElement('td');
      tdElement1.textContent = this.perHour[i];
      table3.appendChild(tdElement1);
    }
    tdElement1.textContent = this.perDay;
    table3.appendChild(tdElement1);
    table1.appendChild(table2);
    table1.appendChild(table3);
    document.body.appendChild(table1);
  };

  this.render = function () {
    this.customers();
    this.cookies();
    this.caclTotal();
    this.display();
  };
}

var setTable = function() {
  var table2 = document.createElement('tr');
  var tdLocation = document.createElement('th');
  tdLocation.textContent = ('');
  table2.appendChild(tdLocation);
  table1.appendChild(table2);
  for (var i = 0; i < time.length; i++) {
    var thElement = document.createElement('th');
    thElement.textContent = time[i];
    table2.appendChild(thElement);
  }
};

var firstAndPike = new CookieStand ('1st and Pike', 23, 65, 6.3);
var seatacAirport = new CookieStand ('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new CookieStand ('Seattle Center', 11, 38, 3.7);
var capitol = new CookieStand ('Capitol Hill', 20, 38, 2.3);
var alki = new CookieStand ('Alki', 2, 16, 4.6);

setTable();
firstAndPike.render();
seatacAirport.render();
seattleCenter.render();
capitol.render();
alki.render();
