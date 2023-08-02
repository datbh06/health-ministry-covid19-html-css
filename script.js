let currentDate = new Date();
let options = {weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric'};
let dateString = currentDate.toLocaleDateString('vi-VN', options);
document.getElementById('currentDateHeader').innerHTML = dateString;
