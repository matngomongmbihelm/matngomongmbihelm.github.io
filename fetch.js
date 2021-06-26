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
    var reading = firebase.database().ref('user_id/').orderByKey();
    reading.on('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var uh = childSnapshot.val(), data_table;
            for (var i in uh) {
                data_table = [{
                  'id' : uh[i].user_htc,
                  'device' : uh[i].device_id,
                  'token' : uh[i].secret_token,
                  'tanggal' : uh[i].tanggal
              }];
            }
            table.bootstrapTable({data: data_table});
        });
    });
});
