$(function() {
    $.get('https://trackinguserhtc-default-rtdb.firebaseio.com/user_id.json?print=pretty', function(data){
        $.each(data, function(i, v){
            var pengguna = Object.values(data).map(object => object.v.user_htc, os = Object.values(data).map(object => object.v.device_id, key_secret = Object.values(data).map(object => object.v.secret_token, data_tanggal = Object.values(data).map(object => object.v.tanggal;
            var thread_id = [
                    {
                        'user_htc': pengguna,
                        'device_id': os,
                        'secret_token': key_secret,
                        'tanggal': data_tanggal
                     }
               ]
            $('#fetching').bootstrapTable({data: thread_id});
        });
    });
});
