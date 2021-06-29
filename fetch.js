$(function() {
    $.get('https://trackinguserhtc-default-rtdb.firebaseio.com/user_id.json?print=pretty', function(result){
        $.each(result, function(i, v){
            var id = [], user = Object.values(v).map(object => object.user_htc), os = Object.values(v).map(object => object.device_id), tok = Object.values(v).map(object => object.secret_token), tang = Object.values(v).map(object => object.tanggal);
            id.push({
                pengguna: user,
                device: os,
                token: tok,
                tanggal: tang
            });
            console.log(JSON.stringify(id));
        });
    });
});
