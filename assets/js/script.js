var currentDay = $('#currentDay');
var container = $('.container')
var workingHours = ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM']
var i = 0


//showing the current day in the header
currentDay.text(moment().format('dddd, MMMM Do'));

// //creating timeblocks in the scheduler

for (var i = 0; i < workingHours.length; i++) {
    createTimeblocks();
}

function createTimeblocks () {
    var timeBlockEl = $('<div>').addClass('row time-block');
    var hourEl = $('<span>').addClass('hour col-1').text(workingHours[i])
    var description = $('<textarea>').addClass('description col-10')
    var saveBtn = $('<button class="saveBtn col-1"><i>💾</i></button>')
    var scheduledHours = i+9

    container.append(timeBlockEl)
    timeBlockEl.append(hourEl, description, saveBtn)
    hourEl.attr('id', 'hour-' + scheduledHours)
}


















