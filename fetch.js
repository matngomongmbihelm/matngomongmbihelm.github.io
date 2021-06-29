$(function() {
    $.get('https://trackinguserhtc-default-rtdb.firebaseio.com/user_id.json?print=pretty', function(result){
        var id = [], objek = {}, user, os, tok, tang;;
            $.each(result, function(i, v){
                if(v.hasOwnProperty("user_htc")){
                    user = v.user_htc;
                    os = v.device_id;
                    tok = v.secret_token;
                    tang = v.tanggal;
                 }
                objek.pengguna = user;
                objek.device = os;
                objek.token = tok;
                objek.tanggal = tang;
                id.push(objek);
            });
        console.log(id);
    });
});
