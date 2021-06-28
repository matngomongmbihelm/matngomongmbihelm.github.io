$(function() {
    $.get('https://trackinguserhtc-default-rtdb.firebaseio.com/user_id.json?print=pretty', function(result){
        var user = Object.values(result).map(object => object.user_htc), os = Object.values(result).map(object => object.device_id), tok = Object.values(result).map(object => object.secret_token), tang = Object.values(result).map(object => object.tanggal), show = '';
        show += '<tr>';
        show += '<td>'+ user +'</td>';
        show += '<td>'+ os +'</td>';
        show += '<td>'+ tok +'</td>';
        show += '<td>'+ tang +'</td>';
        show += '</tr>';
        $('#fetching').append(show);
    });
});
