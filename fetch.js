$(function() {
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
    reading.once('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var sick = childSnapshot.val(), gh = '';
            gh += '<tr>';
            gh += '<td>' + sick.user_htc + '</td>';
            gh += '<td>' + sick.device_id + '</td>';
            gh += '<td>' + sick.token + '</td>';
            gh += '<td>' + sick.tanggal + '</td>';
            gh += '</tr>';
            $('tbody#fetching').append(gh);
        });
    });
});
