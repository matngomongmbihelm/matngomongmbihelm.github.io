$(function() {
    $('#fetching').dataTable({
        ajax: 'https://trackinguserhtc-default-rtdb.firebaseio.com/user_id.json?print=pretty',
        paging: true,
        searching: true,
        columns: [
            { data: Object.values(data).map(object => object.user_htc) },
            { data: Object.values(data).map(object => object.device_id) },
            { data: Object.values(data).map(object => object.secret_token) },
            { data: Object.values(data).map(object => object.tanggal) }
         ]
     });
});
