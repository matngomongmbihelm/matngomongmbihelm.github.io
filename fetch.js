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
        var metu = '', data_table;
        snapshot.forEach(function(childSnapshot) {
            var uh = childSnapshot.val();
              data_table = [ metu += {
                  'id' : uh.user_htc,
                  'device' : uh.device_id,
                  'token' : uh.secret_token,
                  'tanggal' : uh.tanggal
              },];
            table.bootstrapTable({data: data_table});
        });
    });
});
