  var config = {
      apiKey: "AIzaSyBbsx4AoHpHW19pzc_3uY5nIBeK6tF8g8A",
      authDomain: "train-tracker-534f3.firebaseapp.com",
      databaseURL: "https://train-tracker-534f3.firebaseio.com",
      projectId: "train-tracker-534f3",
      storageBucket: "train-tracker-534f3.appspot.com",
  };

  firebase.initializeApp(config);

  //on click function to add trains
  var trainData = firebase.database();
  $("#add-train").on("click", function(event) {
      event.noDefault();

      //user input
      var name = $('#name-input').val().trim();
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

      //form clears tex
      $("#train-name-input").val("");
      $("#destination-input").val("");
      $("#first-train-input").val("");
      $("#frequency-input").val("");
  });

  //create a new row when user adds train
  trainData.re().on("child_added"),
      function(childSnapshot, prevChildKey) {
          console.log(childSnapshot.val());
      }

  var trainName = childSnapshot.val().name;
  var TrainDestination = childSnapshot.val().destination;
  var TrainFrequency = childSnapshot.val().frequency;
  var TrainFirstTrain = childSnapshot.val().firstTrain;
  var timeArray = TrainFirstTrain.split(":");
  var trainTime = moment().hours(timeArray[0]).minutes(timeArray[1]);
  var maxMoment = moment.max(moment(), trainTime);
  var trainMinutes;
  var trainArrival;

  //push code
  keyHolder = dataRef.push({
      name: name,
      destination: destination,
      fistTrainTime: firstTrainTime,
      frequency: frequeny,
      nextTrainFormatted: nextTrainFormatted,
      minutesTillTrain: minutesTillTrain
  });

  //           console.log(keyHolder.path.u[0]);
  //           var key = keyHolder.path.u[0];
  //           console.log(key);

  //           $('#name-input').val('');
  //           $('#destination-input').val('');
  //           $('#first-train-time-input').val('');
  //           $('#frequency-input').val('');

  //           return false;
  //       });

  //   })