$(function() {
    $.get('https://trackinguserhtc-default-rtdb.firebaseio.com/user_id.json?print=pretty', function(data){
        $.each(data, function(i, v){
            for(var x in v){
                var thread = [
                    {
                        'user_htc': v[x].user_htc,
                        'device_id': v[x].device_id,
                        'secret_token': v[x].secret_token,
                        'tanggal': v[x].tanggal
                     }
                ]
            }
            $('#fetching').bootstrapTable({data: thread});
        });
    });
});
