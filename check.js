$(document).ready(function(){
  var subid = getSearchParams("id"), parameter = getSearchParams("parameter"), trackingout = getSearchParams("trackID"), safety = getSearchParams("isSafe");
  var mixed = ['f582b68c125a42','84a43a0d4e098e','a4858e60258c1d','567b2eb975bfb4','957af7079ce416','d96081dae2fbc7','9149da5c8c1a68','8cd555c2903d6c'], gotti = Math.floor(Math.random() * mixed.length);
 if (typeof subid && parameter && trackingout && safety !== 'undefined'){
    $.ajax({
        url: 'https://ipinfo.io/?token=' +mixed[gotti]+ '',
        type: 'get',
        dataType: 'JSON',
        success: function(data){
           var obj = data.ip
        }
    });
 }else {

 }


 function getSearchParams(k){
  var p={};
  location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(s,k,v){p[k]=v})
  return k?p[k]:p;
 }
});
