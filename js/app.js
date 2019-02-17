'use strict';

var getEle1 = document.getElementById('firPik');	// access html id
var getEle2 = document.getElementById('seaAir');
var getEle3 = document.getElementById('seaCen');
var getEle4 = document.getElementById('capHill');
var getEle5 = document.getElementById('alki');

var pikePlace = {
  time: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'], // array, operation hourly from 6am-8pm
  min: 23,	// minimum number of customers per hour
  max: 65,	// maximum number of customers per hour
  avg: 6.3,	// average number of cookies purchased per customer
  total: [], // input total cookies from 6am-8pm
  customers: function () {	// calculate random numbers of customers
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  cookies: function () {	// calculate cookies per hour
    return Math.ceil(this.customers() * this.avg);
  },
  hourly: function () { // create total amount of cookies sold per hour
    for (var i = 0; i < this.time.length; i++) {
      var nextHour = document.createElement('li');
      this.total[i] = this.cookies();
      nextHour.textContent = `${this.time[i]}: ${this.total[i]} Cookies`;
      getEle1.appendChild(nextHour);
    }
    return this.total;
  },
  getTotal: function() {	// create overall total of cookies sold from 6am-8pm
    var x = 0;
    var addTotal = document.createElement('li');
    for (var i = 0; i < this.total.length; i++) {
      x += this.total[i];
    }
    addTotal.textContent = `Total: ${x} Cookies`;
    getEle1.appendChild(addTotal);
  },
  render: function () {	// create render
    this.customers();
    this.cookies();
    this.hourly();
    this.getTotal();
  }
};

var seatacAirport = {
  time: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  min: 3,
  max: 24,
  avg: 1.2,
  total: [],
  customers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  cookies: function () {
    return Math.ceil(this.customers() * this.avg);
  },
  hourly: function () {
    for (var i = 0; i < this.time.length; i++) {
      var nextHour = document.createElement('li');
      this.total[i] = this.cookies();
      nextHour.textContent = `${this.time[i]}: ${this.total[i]} Cookies`;
      getEle2.appendChild(nextHour);
    }
    return this.total;
  },
  getTotal: function() {
    var x = 0;
    var addTotal = document.createElement('li');
    for (var i = 0; i < this.total.length; i++) {
      x += this.total[i];
    }
    addTotal.textContent = `Total: ${x} Cookies`;
    getEle2.appendChild(addTotal);
  },
  render: function () {
    this.customers();
    this.cookies();
    this.hourly();
    this.getTotal();
  }
};

var seattleCenter = {
  time: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  min: 11,
  max: 38,
  avg: 3.7,
  total: [],
  customers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  cookies: function () {
    return Math.ceil(this.customers() * this.avg);
  },
  hourly: function () {
    for (var i = 0; i < this.time.length; i++) {
      var nextHour = document.createElement('li');
      this.total[i] = this.cookies();
      nextHour.textContent = `${this.time[i]}: ${this.total[i]} Cookies`;
      getEle3.appendChild(nextHour);
    }
    return this.total;
  },
  getTotal: function() {
    var x = 0;
    var addTotal = document.createElement('li');
    for (var i = 0; i < this.total.length; i++) {
      x += this.total[i];
    }
    addTotal.textContent = `Total: ${x} Cookies`;
    getEle3.appendChild(addTotal);
  },
  render: function () {
    this.customers();
    this.cookies();
    this.hourly();
    this.getTotal();
  }
};

var capitolHill = {
  time: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  min: 20,
  max: 38,
  avg: 2.3,
  total: [],
  customers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  cookies: function () {
    return Math.ceil(this.customers() * this.avg);
  },
  hourly: function () {
    for (var i = 0; i < this.time.length; i++) {
      var nextHour = document.createElement('li');
      this.total[i] = this.cookies();
      nextHour.textContent = `${this.time[i]}: ${this.total[i]} Cookies`;
      getEle4.appendChild(nextHour);
    }
    return this.total;
  },
  getTotal: function() {
    var x = 0;
    var addTotal = document.createElement('li');
    for (var i = 0; i < this.total.length; i++) {
      x += this.total[i];
    }
    addTotal.textContent = `Total: ${x} Cookies`;
    getEle4.appendChild(addTotal);
  },
  render: function () {
    this.customers();
    this.cookies();
    this.hourly();
    this.getTotal();
  }
};

var alki = {
  time: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  min: 2,
  max: 16,
  avg: 4.6,
  total: [],
  customers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  cookies: function () {
    return Math.ceil(this.customers() * this.avg);
  },
  hourly: function () {
    for (var i = 0; i < this.time.length; i++) {
      var nextHour = document.createElement('li');
      this.total[i] = this.cookies();
      nextHour.textContent = `${this.time[i]}: ${this.total[i]} Cookies`;
      getEle5.appendChild(nextHour);
    }
    return this.total;
  },
  getTotal: function() {
    var x = 0;
    var addTotal = document.createElement('li');
    for (var i = 0; i < this.total.length; i++) {
      x += this.total[i];
    }
    addTotal.textContent = `Total: ${x} Cookies`;
    getEle5.appendChild(addTotal);
  },
  render: function () { 	// render methods
    this.customers();
    this.cookies();
    this.hourly();
    this.getTotal();
  }
};

pikePlace.render(); // output data
seatacAirport.render();
seattleCenter.render();
capitolHill.render();
alki.render();
