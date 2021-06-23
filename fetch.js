$(function() {
    var table = $('#table');
    var firebaseConfig = {
        apiKey: "AIzaSyA7aOALLRGxJcFdbAaC3zyGFowwXw0hfRM",
        authDomain: "trackinguserhtc.firebaseapp.com",
        databaseURL: "https://trackinguserhtc-default-rtdb.firebaseio.com",
        projectId: "trackinguserhtc",
        storageBucket: "trackinguserhtc.appspot.com",
        messagingSenderId: "402421887585",
        appId: "1:402421887585:web:d449277383fcc075a17020"
    };
    firebase.initializeApp(firebaseConfig);
    var reading = firebase.database().ref('user_id/');
    reading.on('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
               var data_table = [{
                  'id': childSnapshot.val().user_htc,
                  'device': childSnapshot.val().device_id,
                  'token': childSnapshot.val().secret_token,
                  'tanggal': childSnapshot.val().tanggal,
             }];
            table.bootstrapTable({
                data: data_table
            });
        });
    });
});
