var currentDay = $('#currentDay');
var container = $('.container')
var tableEl = $('<table>') 
var thEl = $('<th>')
var trEl = $('<tr>')
var tdEl = $('<td>')
var table = $('.table')
var row = $('.row')
var hour = $('.hour')
var timeBlock = $('.time-block')
//showing the current day in the header
currentDay.text(moment().format('dddd, MMMM Do'));

//creating the blocks in the scheduler
container.append(tableEl.addClass('table'));
table.append(trEl.addClass('row'))
row.append(thEl.addClass('hour'))
row.append(tdEl.addClass('time-block'))




