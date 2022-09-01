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
    var ScheduledHour = i + 9;

    container.append(timeBlockEl)
    timeBlockEl.append(hourEl, description, saveBtn)
    
    console.log(hourEl.text())

    timeBlockEl.attr('id', ScheduledHour + '-hour')

    var timeBlock = timeBlockEl.attr('id')

    console.log(timeBlock, currentHour)
    //logic for color: present
    if (workingHours[i] === currentHour) {
        timeBlockEl.addClass('present')
    //future logic
    } else if (currentHour < timeBlock) {
        timeBlockEl.addClass('future')
    //past logic
    } else if (currentHour > timeBlock) {
        timeBlockEl.addClass('past')
    }
}



$('.saveBtn').on('click', function() {
    var hourId = $(this).parent().attr('id');
    localStorage.setItem(hourId, $(this).siblings('.description').val())

})



function renderDescriptions (){
    $('#9-hour .description').val(localStorage.getItem('9-hour'));
    $('#10-hour .description').val(localStorage.getItem('10-hour'));
    $('#11-hour .description').val(localStorage.getItem('11-hour'));
    $('#12-hour .description').val(localStorage.getItem('12-hour'));
    $('#13-hour .description').val(localStorage.getItem('13-hour'));
    $('#14-hour .description').val(localStorage.getItem('14-hour'));
    $('#15-hour .description').val(localStorage.getItem('15-hour'));
    $('#16-hour .description').val(localStorage.getItem('16-hour'));
    $('#17-hour .description').val(localStorage.getItem('17-hour'));
    
}

renderDescriptions()

















