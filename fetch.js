$(function() {
    $.get('https://trackinguserhtc-default-rtdb.firebaseio.com/user_id.json?print=pretty', function(result){
        var id = [], hor = [], user = Object.values(result).map(object => object.user_htc), os = Object.values(result).map(object => object.device_id), tok = Object.values(result).map(object => object.secret_token), tang = Object.values(result).map(object => object.tanggal);
        id.push({
           pengguna : user,
           device : os,
           token : tok,
           tanggal : tang
        });
        hor.push({
            id_htc : Object.values(id.pengguna),
            windowss : Object.values(id.device),
            key_sec : Object.values(id.token),
            tanggalle: Object.values(id.tanggal)
        });
       console.log(JSON.stringify(hor));
    });
});
