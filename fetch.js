$(function() {
    $.get('https://trackinguserhtc-default-rtdb.firebaseio.com/user_id.json', function(doooo){
        $('#fetching').bootstrapTable({data : doooo});
    });
});
