$(function() {
    var pengguna, os, key_secret, data_tanggal;
    $.get('https://trackinguserhtc-default-rtdb.firebaseio.com/user_id.json?print=pretty', function(success){
        pengguna = Object.values(success).map(object => object.user_htc), os = Object.values(success).map(object => object.device_id), key_secret = Object.values(success).map(object => object.secret_token), data_tanggal = Object.values(success).map(object => object.tanggal);
        $('#fetching').dataTable({
            paging: true,
            searching: true,
            columns: [
                { data: pengguna },
                { data: os },
                { data: key_secret },
                { data: data_tanggal }
             ]
         });
    });
    
});
