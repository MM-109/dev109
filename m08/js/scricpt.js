var hotel1 = {
  name: 'Quay',
  rooms: 40,
  booked: 25,
  checkAvailability: function () {
    return this.rooms - this.booked;
  }
};

var hotel2 = {
  name: 'Park',
  rooms: 120,
  booked: 77,
  checkAvailability: function () {
    return this.rooms - this.booked;
  }
};

var hotel3 = {
  name: 'Sunset',
  rooms: 86,
  booked: 10,
  checkAvailability: function () {
    return this.rooms - this.booked;
  }
};

document.getElementById('hotel1').textContent = hotel1.name + ' rooms: ' + hotel1.checkAvailability();
document.getElementById('hotel2').textContent = hotel2.name + ' rooms: ' + hotel2.checkAvailability();
document.getElementById('hotel3').textContent = hotel3.name + ' rooms: ' + hotel3.checkAvailability();
