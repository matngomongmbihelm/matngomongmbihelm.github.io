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
            var childData = childSnapshot.val();
            for (let i = 0; i < childData.length; i++) {
                var data_table = [{
                    'id': childData.user_htc[i],
                    'device': childData.device_id[i],
                    'token': childData.secret_token[i],
                    'tanggal': childData.tanggal[i],
                }];
            }
            table.bootstrapTable({
                data: data_table
            });
        });
    });
});
