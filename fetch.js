$(function() {
    $.get('https://trackinguserhtc-default-rtdb.firebaseio.com/user_id.json?print=pretty', function(result){
        $.each(result, function(i, v){
            var id = [], user, os, tok, tang;
            if(v.hasOwnProperty("user_htc")){
                user = v.user_htc;
                os = v.device_id;
                tok = v.secret_token;
                tang = v.tanggal;
             }
             id.push({
                pengguna: user,
                device: os,
                token: tok,
                tanggal: tang
             });
            console.log(id);
        });
    });
});
