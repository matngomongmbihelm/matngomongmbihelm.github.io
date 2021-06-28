$(function() {
    var shock;
    var pengguna, os, token_sec, hg;
    $('#fetching').dataTable({
        ajax: {
            url: 'https://trackinguserhtc-default-rtdb.firebaseio.com/user_id.json?print=pretty',
            dataSrc: '',
            success: function (data) {
                for (var key in data) {
                    if (data.hasOwnProperty(key)) {
                        pengguna = data[key].user_htc, os = data[key].device_id, token_sec = data[key].secret_token, hg = data[key].tanggal;
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
