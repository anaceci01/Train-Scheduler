// Your web app's Firebase configuration
var config = {
    apiKey: "AIzaSyCK3HFa4iLxTy_ZHcGYQmV2j6ohMfbQpCU",
    authDomain: "thetraintime.firebaseapp.com",
    databaseURL: "https://thetraintime.firebaseio.com",
    projectId: "thetraintime",
    storageBucket: "thetraintime.appspot.com",
    messagingSenderId: "851659797464",
    appId: "1:851659797464:web:483e5123f6ada90455b8ad"
};
// Initialize Firebase
firebase.initializeApp(config);

var trainData = firebase.database().ref('thetraintime');


//on click function to add trains
$("#add-train-btn").on("click", function(event) {
    event.noDefault();

    //user input
    var trainName = $('.train-name-input').val().trim();
    var destination = $('.destination-input').val().trim();
    var frequency = $('.frequency-input').val().trim();
    var firstTrain = $('.first-train-input').val().trim();


    var newTrain = {
        name: trainName,
        destination: destination,
        frequency: frequency,
        firstTrain: firstTrain
    };


    trainData.ref().push(newTrain);
    newTrain.set({
        trainName: $('.train-name-input').val(),
        destination: $('.destination-input').val(),
        frequency: $('.frequency-input').val(),
        firstTrain: $('.first-train-input').val()
    });

    $('.success-message').show();

    $('#add-train-btn')[0].reset();
});

trainData.ref().push(newTrain);

console.log(newTrain.trainName);
console.log(newTrain.destination);
console.log(newTrain.frequency);
console.log(newTrain.firstTrain);

//     //form clears text
$("#train-name-input").val("");
$("#destination-input").val("");
$("#first-train-input").val("");
$("#frequency-input").val("");


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
    };