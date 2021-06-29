$(function() {
    $.get('https://trackinguserhtc-default-rtdb.firebaseio.com/user_id.json?print=pretty', function(result){
        $.each(result, function(i, v){
            var id = [];
            for(var c in v){
                var user = v[c].user_htc, os = v[c].device_id, tok = v[c].secret_token, tang = v[c].tanggal;
                id.push({
                    pengguna: user,
                    device: os,
                    token: tok,
                    tanggal: tang
                });
            }
            console.log(JSON.stringify(id));
        });
    });
});
