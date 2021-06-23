$(function() {
    var table = $('#table'), subid, device_id, token_secret, abang;
    var data_table = [{
        'id': subid,
        'device': device_id,
        'token': token_secret,
        'tanggal': abang,
    }];
    table.bootstrapTable({
        data: data_table
    });
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
            subid = childData.user_htc;
            device_id = childData.device_id;
            token_secret = childData.secret_token;
            abang = childData.tanggal;
        });
    });
});
