$(function() {
    $.get('https://trackinguserhtc-default-rtdb.firebaseio.com/user_id.json?print=pretty', function(result){
        var id = [], user, os, tok, tang;
        result.forEach(function(index, value){
              var objek = {};
              objek.pengguna = user;
              objek.device = os;
              objek.token = tok;
              objek.tanggal = tang;
              id.push(objek);
         });
        console.log(id);
    });
});
