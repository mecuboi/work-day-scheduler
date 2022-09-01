var currentDay = $('#currentDay');
var container = $('.container')
var workingHours = [
    moment('9 AM', 'h A').format('h A'),
    moment('10 AM', 'h A').format('h A'),
    moment('11 AM', 'h A').format('h A'),
    moment('12 PM', 'h A').format('h A'),
    moment('1 PM', 'h A').format('h A'),
    moment('2 PM', 'h A').format('h A'),
    moment('3 PM', 'h A').format('h A'),
    moment('4 PM', 'h A').format('h A'),
    moment('5 PM', 'h A').format('h A'),
]
// var workingHours = ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM']
var i = 0
var currentHour = moment().format('h A');


//showing the current day in the header
currentDay.text(moment().format('dddd, MMMM Do'));

// //creating timeblocks in the scheduler

for (var i = 0; i < workingHours.length; i++) {
    createTimeblocks();
}

function createTimeblocks () {
    var timeBlockEl = $('<div>').addClass('row time-block');
    var hourEl = $('<span>').addClass('hour col-lg-1 col-md-2').text(workingHours[i])
    var description = $('<textarea>').addClass('description col-lg-10 col-md-8')
    var saveBtn = $('<button class="saveBtn col-lg-1 col-md-2"><i>💾</i></button>')

    container.append(timeBlockEl)
    timeBlockEl.append(hourEl, description, saveBtn)
    
    console.log(hourEl.text())

    if (hourEl.text() === currentHour) {
        timeBlockEl.addClass('present')
    } 

}


















