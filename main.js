var url = "https://my-train-schedule.firebaseio.com/";
var dataRef = new Firebase(url);
var name = '';
var destination = '';
var fistTrainTime = '';
var frequeny = '';
var nextTrain = '';
var nextTrainFormatted = '';
var minutesAway = '';
var firstTimeConverted = '';
var currentTime = '';
var diffTime = '';
var tRemainder = '';
var minutesTillTrain = '';
var keyHolder = '';
var getKey = '';


$(document).ready(function() {
    $("#add-train").on("clik", function() {
        name = $('#name-input').val().trim();
        destination = $('#destination-input').val().trim();
        frequency = $('#frequency-input').val().trim();
        firstTimeConverted = moment(firstTrainTime, "hh:mm").substract(1, "years");
        console.log(name)
    })
})