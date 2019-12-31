  var config = {
      apiKey: "AIzaSyBbsx4AoHpHW19pzc_3uY5nIBeK6tF8g8A",
      authDomain: "train-tracker-534f3.firebaseapp.com",
      databaseURL: "https://train-tracker-534f3.firebaseio.com",
      projectId: "train-tracker-534f3",
      storageBucket: "train-tracker-534f3.appspot.com",
  };

  firebase.initializeApp(config);

  var url = "https://train-tracker-534f3.firebaseio.com",
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

          console.log(keyHolder.path.u[0]);
          var key = keyHolder.path.u[0];
          console.log(key);

          $('#name-input').val('');
          $('#destination-input').val('');
          $('#first-train-time-input').val('');
          $('#frequency-input').val('');

          return false;
      });

  })