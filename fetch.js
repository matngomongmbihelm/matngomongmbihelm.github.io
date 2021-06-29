$(function() {
    $.get('https://trackinguserhtc-default-rtdb.firebaseio.com/user_id.json?print=pretty', function(result){
        var id = [], objek = {}, user = Object.values(result).map(object => object.user_htc), os = Object.values(result).map(object => object.device_id), tok = Object.values(result).map(object => object.secret_token), tang = Object.values(result).map(object => object.tanggal);
        objek.pengguna = user;
        objek.device = os;
        objek.token = tok;
        objek.tanggal = tang;
        id.push(objek);
        console.log(id);
    });
});
