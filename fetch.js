$(function() {
    $.get('https://trackinguserhtc-default-rtdb.firebaseio.com/user_id.json?print=pretty', function(data){
        $.each(data, function(i, v){
            var pengguna = Object.values(v).map(object => object.user_htc), os = Object.values(v).map(object => object.device_id), key_secret = Object.values(v).map(object => object.secret_token), data_tanggal = Object.values(v).map(object => object.tanggal);
            $('#fetching').dataTable({
                paging: true,
                searching: true,
                data: [{
                    pengguna, os, key_secret, data_tanggal
                }],
                columns: [
                    { title: "USER" },
                    { title: "DEVICE" },
                    { title: "SECRET" },
                    { title: "TANGGAL SUBMIT" }
                ]
            });
        });
    });
});
