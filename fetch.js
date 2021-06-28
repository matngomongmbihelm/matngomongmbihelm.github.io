$(function() {
    function ajaxRequest(params) {
      $.ajax({
        type: "GET",
        url: "https://trackinguserhtc-default-rtdb.firebaseio.com/user_id.json?print=pretty",
        dataType: "json",
        success: function(data){
          params.success({
            "rows": data,
            "total": data.length
          })
        },
        error: function(er) {
          params.error(er);
        }
      });
    }
});
