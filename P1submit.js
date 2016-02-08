$("input[type=submit]").attr('disabled','disabled');
$("form").change(function(){
$("input[type=submit]").removeAttr('disabled');
});

$(document).ready(function(){
    $('form').submit(function(){
        alert("Thank you for scheduling! We will confirm your appointment within 24 hours.");
    });
});
