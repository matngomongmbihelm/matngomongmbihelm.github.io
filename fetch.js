$(function() {
    var pengguna, os, token_sec, hg;
    $('#fetching').dataTable({
        ajax: {
            url: 'https://trackinguserhtc-default-rtdb.firebaseio.com/user_id.json?print=pretty',
            datasrc: function(bl){
                $.each(bl, function(i, v){
                    pengguna = Object.values(v).map(object => object.user_htc), os = Object.values(v).map(object => object.device_id), token_sec = Object.values(v).map(object => object.secret_token), hg = Object.values(v).map(object => object.tanggal);
                       return pengguna, os, token_sec, hg;
                });
            }
        },
        paging: true,
        searching: true,
        columns: [
            { data: pengguna },
            { data: os },
            { data: token_sec },
            { data: hg }
         ]
     });
});
