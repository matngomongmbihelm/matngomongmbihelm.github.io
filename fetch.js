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
            var sick = childSnapshot.val(), array = [];
            $.each(sick, function(i, v){
                array.concat({
                    'user' : v.user_htc,
                    'pc_hash' : v.device_id,
                    'token_key' : v.secret_token,
                    'tanggale' : v.tanggal
                });
            });
            var getme = JSON.stringify(array);
            console.log(getme);
            $('#fetching').bootstrapTable({data : getme});
        });
    });
});
