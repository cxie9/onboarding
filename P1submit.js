$("body").addClass("js");
var pname = document.getElementById('pname');
var telephone = document.getElementById('telephone');
var email = document.getElementById('email');
var pick = document.getElementById('pick');
var form = document.getElementById('fields');
var submit = document.getElementById('submit');
var flag = false;
form.addEventListener('keyup', function yolo(){
    form.addEventListener('click', function swag(){
        flag = false;
        if(pname.value != ""){
            if(telephone.value != ""){
                if(email.value != ""){
                    if(pick.value != ""){
                        flag = true;
                    }
                }
            }
        }
        if(flag == true){
            submit.style.display = "inline"
        } else {
            submit.style.display = "none"
        }
    });
});



$('#fields').submit(function (ev){
    ev.preventDefault();
    document.getElementById('bottom').innerHTML = "Thank you for scheduling! We will confirm your appointment within 24 hours.";

});