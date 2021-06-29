$(function() {
    $.get('https://trackinguserhtc-default-rtdb.firebaseio.com/user_id.json?print=silent', function(result){
        function getSampleObject(users){
          return $.map(users, function(item, i){
              return {
                pengguna: item.user_htc,
                device: item.device_id,
                token: Array(item.secret_token.length + 1).join('*'),
                tanggal: item.tanggal
              };
            });
        };
        $('#data_fecth').bootstrapTable({data: getSampleObject(result)});
    });
});
