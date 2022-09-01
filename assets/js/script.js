var currentDay = $('#currentDay');
var container = $('.container')



//showing the current day in the header
currentDay.text(moment().format('dddd, MMMM Do'));

//creating the blocks in the scheduler
container.append($('<div>').addClass('time-block'));
var timeBlock = $('.time-block')

timeBlock.append($('<div>').addClass('row'));
var row = $('.row')

row.append($('<span>').addClass('hour'));
var hour = $('.hour')

row.append($('<textarea>').addClass('description'));
var description = $('.description')

row.append($('<button>').addClass('saveBtn'));
var saveBtn = $('.saveBtn');

saveBtn.append($('<i>'));
var saveIcon = $('i');

hour.text('9AM')
saveIcon.text('💾')







