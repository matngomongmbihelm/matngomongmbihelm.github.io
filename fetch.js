$(function() {
    $("#fecthing").dataTable({
        ajax : {
            url : 'https://trackinguserhtc-default-rtdb.firebaseio.com/user_id.json?print=pretty',
            dataSrc : function(json) {
                var temp, item, data = [];
                for (var i=0;i<json.length;i++) {
                    temp = Object.values(json);
                    item = {};
                    for (var elem in temp) {        
                        item[temp[elem].user_htc];
                        item[temp[elem].device_id];
                        item[temp[elem].secret_token];
                        item[temp[elem].tanggal];
                    }
                    data.push(item);
                }
                return data
            }
        },
        paging: true,
        searching: true,
        columns : [
            { data : 'user_htc', title : 'user_htc' },
            { data : 'device_id', title : 'device_id'  },
            { data : 'secret_token', title : 'secret_token' },        
            { data : 'tanggal', title : 'tanggal' }
        ]    
    });
});
