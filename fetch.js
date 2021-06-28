$(function() {
    $.get('https://trackinguserhtc-default-rtdb.firebaseio.com/user_id.json?print=pretty', function(result){
        var show = '';
        $.each(result, function(i, v){
            var user = Object.values(v).map(object => object.user_htc), os = Object.values(v).map(object => object.device_id), tok = Object.values(v).map(object => object.secret_token), tang = Object.values(v).map(object => object.tanggal);
            show += '<tr>';
            show += '<td>'+ user +'</td>';
            show += '<td>'+ os +'</td>';
            show += '<td>'+ tok +'</td>';
            show += '<td>'+ tang +'</td>';
            show += '</tr>';
            $('#fetching').append(show);
        });
    });
});
