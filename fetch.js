$(function() {
    $.get('https://trackinguserhtc-default-rtdb.firebaseio.com/user_id.json?print=pretty', function(result){
        var id = [], objek = {}, user, os, tok, tang;
        if(result.hasOwnProperty("user_htc")){
                user = result.user_htc, os = result.device_id, tok = result.secret_token, tang = result.tanggal;
         }
        objek.pengguna = user;
        objek.device = os;
        objek.token = tok;
        objek.tanggal = tang;
        id.push(objek);
        console.log(id);
    });
});
