$(function() {
    $.get('https://trackinguserhtc-default-rtdb.firebaseio.com/user_id.json?print=pretty', function(result){
        function getSampleObject(users){
          return $.map(users, function(item, i){
              return {
                pengguna: item.user_htc,
                device: item.device_id,
                token: item.secret_token,
                tanggal: item.tanggal
              };
            });
        };
        $('#data_fecth').bootstrapTable({data: getSampleObject(result)});
    });
});
