$(function() {
    $.get('https://trackinguserhtc-default-rtdb.firebaseio.com/user_id.json?print=pretty', function(data){
        $.each(data, function(i, v){
            for(var i in v){
                var th = [
                    {
                        'user_htc': data[i].user_htc,
                        'device_id': data[i].device_id,
                        'secret_token': data[i].secret_token,
                        'tanggal': data[i].tanggal
                     }
                ]
            }
        });
        $('#fetching').bootstrapTable({data: th});
    });
});
