// Your web app's Firebase configuration
var config = {
    apiKey: "AIzaSyB9hzmyXPuoRS1O5IVKvp68dCnF7ExMFww",
    authDomain: "traintime-3964f.firebaseapp.com",
    databaseURL: "https://traintime-3964f.firebaseio.com",
    projectId: "traintime-3964f",
    storageBucket: "traintime-3964f.appspot.com",
    messagingSenderId: "366600363795",
    appId: "1:366600363795:web:fb08be6bee13e6b78484e6"
};

// Initialize Firebase
export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
import firebase from '../firebase';
console.log(firebase.name);
console.log(firebase.database());

//on click function to add trains
var trainData = firebase.database();
$("#add-train").on("click", function(event) {
    event.noDefault();

    //user input
    var name = $('#train-name-input').val().trim();
    var destination = $('#destination-input').val().trim();
    var frequency = $('#frequency-input').val().trim();
    var firstTrain = moment(firstTrainTime, "hh:mm").substract(1, "years");

    var newTrain = {
        name: name,
        destination: destination,
        frequency: frequency,
        firstTrain: firstTrain
    };

    trainData.ref().push(newTrain);

    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.frequency);
    console.log(newTrain.firstTrain);

    //form clears text
    $("#train-name-input").val("");
    $("#destination-input").val("");
    $("#first-train-input").val("");
    $("#frequency-input").val("");
});

//create a new row when user adds train
trainData.ref().on("child_added"),
    function(childSnapshot, prevChildKey) {
        console.log(childSnapshot.val());

        //variables where input will be stored
        var trainName = childSnapshot.val().name;
        var TrainDestination = childSnapshot.val().destination;
        var TrainFrequency = childSnapshot.val().frequency;
        var TrainFirstTrain = childSnapshot.val().firstTrain;
        var timeArray = TrainFirstTrain.split(":");
        var trainTime = moment().hours(timeArray[0]).minutes(timeArray[1]);
        var maxMoment = moment.max(moment(), trainTime);
        var trainMinutes;
        var trainArrival;

        if (maxMoment === trainTime) {
            trainArrival = trainTime.format("hh:mm A");
            trainMinutes = trainTime.diff(moment(), "minutes")
        } else {
            var differenceTimes = moment().diff(trainTime, "minutes");
            var trainRemainder = differenceTimes % TrainFrequency;
            trainMinutes = trainFrequency - trainRemainder;
            trainArrival = moment()
                .add(trainMinutes, "m")
                .format("hh:mm A");
        }
        console.log("trainMinutes:", trainMinutes);
        console.log("trainArrival:", trainArrival);

        $("#train-table > tbody").append(
            $("<tr>").append(
                $("<td>").text(trainName),
                $("<td").text(trainDestination),
                $("<td>").text(trainFrequency),
                $("<td").text(trainArrival),
                $("<td>").text(trainMinutes)
            )
        );
    });