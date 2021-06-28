$(function() {
    $.get('https://trackinguserhtc-default-rtdb.firebaseio.com/user_id.json?print=pretty', function(data){
        $.each(data, function(i, v){
            var pengguna = Object.values(data).map(object => object.v.user_htc, os = Object.values(data).map(object => object.v.device_id, key_secret = Object.values(data).map(object => object.v.secret_token, data_tanggal = Object.values(data).map(object => object.v.tanggal;
            var thread_id = [
                    {
                        'user_htc': v[x].user_htc,
                        'device_id': v[x].device_id,
                        'secret_token': v[x].secret_token,
                        'tanggal': v[x].tanggal
                     }
               ]
            $('#fetching').bootstrapTable({data: thread_id});
        });
    });
});
