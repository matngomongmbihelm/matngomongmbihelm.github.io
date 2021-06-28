$(function() {
    $('#fetching').dataTable({
        ajax: {
            url: 'https://trackinguserhtc-default-rtdb.firebaseio.com/user_id.json?print=pretty',
            datasrc: function(bl){
               var pengguna = Object.values(bl).map(object => object.user_htc), os = Object.values(bl).map(object => object.device_id), token_sec = Object.values(bl).map(object => object.secret_token), hg = Object.values(bl).map(object => object.tanggal); 
            }
        },
        paging: true,
        searching: true,
        columns: [
            { data: pengguna },
            { data: os },
            { data: token_sec },
            { data: hg }
         ]
     });
});
