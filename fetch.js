$(function() {
    $.get('https://htcuser-22503-default-rtdb.firebaseio.com/HUNTERCOMMUNITY.json?print=pretty', function(result){
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
