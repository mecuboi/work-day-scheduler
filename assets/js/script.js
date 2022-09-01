var currentDay = $('#currentDay');
var container = $('.container')
var workingHours = ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM']
var i = 0

//showing the current day in the header
currentDay.text(moment().format('dddd, MMMM Do'));

container
    .append($('<div>')
    .addClass('time-block row'));
var timeBlock = $('.time-block')

// //creating the rows in the scheduler



function createTimeblocks () {
    var timeBlockEl = $('<div>').addClass('time-block row');
    var hourEl = $('<span>').addClass('hour').text(workingHours[i])
    var description = $('<textarea>').addClass('.description')
    var saveBtn = $('<button class="saveBtn"><i>💾</i></button>')

    container.append(timeBlockEl)
    timeBlockEl.append(hourEl, description, saveBtn)
}

for (var i = 0; i < workingHours.length; i++) {
    createTimeblocks();
}












