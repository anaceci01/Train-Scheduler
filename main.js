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

        //push code
        keyHolder = dataRef.push({
            name: name,
            destination: destination,
            fistTrainTime: firstTrainTime,
            frequency: frequeny,
            nextTrainFormatted: nextTrainFormatted,
            minutesTillTrain: minutesTillTrain
        });
        $('#name-input').val('');
        $('#destination-input').val('');
        $('#first-train-time-input').val('');
        $('#frequency-input').val('');

        return false;
    });
})