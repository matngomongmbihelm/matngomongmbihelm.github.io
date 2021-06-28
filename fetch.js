$(function() {
    $.get('https://trackinguserhtc-default-rtdb.firebaseio.com/user_id.json?print=pretty', function(success){
        $('#fetching').dataTable({
            paging: true,
            searching: true,
            columns: [
                { data: Object.values(success).map(object => object.user_htc) },
                { data: Object.values(success).map(object => object.device_id) },
                { data: Object.values(success).map(object => object.secret_token) },
                { data: Object.values(success).map(object => object.tanggal) }
             ]
         });
    });
    
});
