$(function() {
    $.get('https://trackinguserhtc-default-rtdb.firebaseio.com/user_id.json?print=pretty', function(result){
        var id = [], user = Object.values(result).map(object => object.user_htc), os = Object.values(result).map(object => object.device_id), tok = Object.values(result).map(object => object.secret_token), tang = Object.values(result).map(object => object.tanggal);
        id.push({
           pengguna : user,
           device : os,
           token : tok,
           tanggal : tang
        });
        var yell = JSON.stringify(id);
       console.log(yell.pengguna);
    });
});
