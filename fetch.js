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
    var reading = firebase.database().ref('user_id/').orderByKey(), hb = '';
    reading.on('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var sick = childSnapshot.val();
            hb += [];
            hb += [sick.user_htc, sick.device_id, sick.secret_token, sick.tanggal];
            $('#wong_kopok').DataTable({
               data: hb,
               columns: [
                  { title: "USER ID" },
                  { title: "DEVICE ID" },
                  { title: "SECRET" },
                  { title: "TANGGAL" }
                ]
            });
        });
    });
});
