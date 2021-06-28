$(function() {
    $('#fetching').dataTable({
        ajax: 'https://trackinguserhtc-default-rtdb.firebaseio.com/user_id.json?print=pretty',
        paging: true,
        searching: true,
        columns: [
            { data: Object.values(v).map(object => object.user_htc) },
            { data: Object.values(v).map(object => object.device_id) },
            { data: Object.values(v).map(object => object.secret_token) },
            { data: Object.values(v).map(object => object.tanggal) }
         ]
     });
});
