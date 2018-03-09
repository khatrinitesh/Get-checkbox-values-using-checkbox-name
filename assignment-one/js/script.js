$(document).ready(function(){
    $("input[name='bla[]']").each(function(){
        alert($(this).val());
    });
});    