$(function() {
    var pengguna, os, token_sec, hg;
    $('#fetching').dataTable({
        ajax: {
            url: 'https://trackinguserhtc-default-rtdb.firebaseio.com/user_id.json?print=pretty',
            datasrc: function(bl){
                for (var key in bl) {
                    if (bl.hasOwnProperty(key)) {
                        pengguna = bl[key].user_htc, os = bl[key].device_id, token_sec = bl[key].secret_token, hg = bl[key].tanggal;
                        return pengguna, os, token_sec, hg;
                    }
                }
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
