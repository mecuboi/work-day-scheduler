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

//creating timeblocks in the scheduler

for (var i = 0; i < workingHours.length; i++) {
    createTimeblocks();
}

function createTimeblocks () {
    //dom manipulation to create elements in html
    var timeBlockEl = $('<div>').addClass('row time-block');
    var hourEl = $('<span>').addClass('hour col-lg-1 col-md-2 col-sm-3').text(workingHours[i])
    var description = $('<textarea>').addClass('description col-lg-10 col-md-8 col-sm-6')
    var saveBtn = $('<button class="saveBtn col-lg-1 col-md-2 col-sm-3"><i class="fas fa-save"></i></button>')
    var ScheduledHour = i + 9;
    
    container.append(timeBlockEl)
    timeBlockEl.append(hourEl, description, saveBtn)

    timeBlockEl.attr('id', ScheduledHour)

    var timeBlock = timeBlockEl.attr('id')

    //logic for color: present
    if (timeBlock == moment().hour()) {
        timeBlockEl.addClass('present')
    //future logic
    } else if (timeBlock > moment().hour()) {
        timeBlockEl.addClass('future')
    //past logic
    } else if (timeBlock < moment().hour()) {
        timeBlockEl.addClass('past')
    }
}


//to store descriptions to local storage
$('.saveBtn').on('click', function() {
    var hourId = $(this).parent().attr('id');
    localStorage.setItem(hourId, $(this).siblings('.description').val().trim())

})

//to call out the saved descriptions
function renderDescriptions (){
    $('#9 .description').val(localStorage.getItem('9'));
    $('#10 .description').val(localStorage.getItem('10'));
    $('#11 .description').val(localStorage.getItem('11'));
    $('#12 .description').val(localStorage.getItem('12'));
    $('#13 .description').val(localStorage.getItem('13'));
    $('#14 .description').val(localStorage.getItem('14'));
    $('#15 .description').val(localStorage.getItem('15'));
    $('#16 .description').val(localStorage.getItem('16'));
    $('#17 .description').val(localStorage.getItem('17'));
    
}

renderDescriptions()

















