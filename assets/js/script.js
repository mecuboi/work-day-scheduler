var currentDay = $('#currentDay');
var container = $('.container')
var workingHours = ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM']

//showing the current day in the header
currentDay.text(moment().format('dddd, MMMM Do'));

container
    .append($('<div>')
    .addClass('time-block'));
var timeBlock = $('.time-block')

//creating the rows in the scheduler
timeBlock
    .append($('<div>')
    .addClass('row'));
var row = $('.row')

row
    .append($('<span>')
    .addClass('hour'));
var hour = $('.hour')

row
    .append($('<textarea>')
    .addClass('description'));
var description = $('.description')

row
    .append($('<button>')
    .addClass('saveBtn'));
var saveBtn = $('.saveBtn');

saveBtn
    .append($('<i>'));
var saveIcon = $('i');

hour.text('9 AM')
saveIcon.text('💾')

//looping over the rows
for (var i = 0; i < workingHours.length; i++)
    












