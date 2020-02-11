function cheakFristName() {
    var firstName=$('#firstName').val();
    var reg=/^[a-zA-Z -.:]{2,10}$/;
    if(reg.test(firstName)){
        $('#firstNameError').text(' ');
        return true;
    }
    else{
        $('#firstNameError').text('First Name Should be 2 to 10 character');
        return false;
    }
}
    $('#firstName').keyup(function () {
    cheakFristName();
    });

// Last Name
function cheakLastName() {
    var lastName=$('#lastName').val();
    var reg=/^[a-zA-Z -.:]{2,10}$/;
    if(reg.test(lastName)){
        $('#lastNameError').text(' ');
        return true;
    }
    else{
        $('#lastNameError').text('Last Name Should be 2 to 10 character');
        return false;
    }
}
$('#lastName').keyup(function () {
    cheakLastName();
});
    // EMAIL ADDRESS
function cheakEmailAddress() {
    var emailAddress=$('#emailAddress').val();
    var reg=/^([a-zA-Z0 -9_\.\-])+\@(([a-zA-z0-9\-])+\.)+([a-zA-z0-9]{2,3})+$/;
    if(reg.test(emailAddress)){
        $('#emailAddressError').text(' ');
        return true;
    }
    else{
        $('#emailAddressError').text('Email Address is invalid!');
        return false;
    }
}
$('#emailAddress').blur(function () {
    cheakEmailAddress();
});
$('#emailAddress').keyup(function () {
    $('#emailAddressError').text(' ');
});

// PASSWORD

function cheakPassword() {
    var password = $('#password').val();
    var reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    if (reg.test(password)) {
        $('#passwordError').text(' ');
        return true;
    }
    else {
        $('#passwordError').text('Password must have 1 lowercase & uppercase & one charecter (like !@#$%^&*)');
        return false;
    }
}

$('#password').blur(function () {
    cheakPassword();
});
$('#password').click(function () {
    $('#passwordError').text('Password must have 1 lowercase & uppercase & one charecter (like !@#$%^&*)');
});

$('#password').keyup(function () {
    $('#passwordError').text(' ');
});

// CONFROMPASSWORD
function confirmPasswordCheak() {
    var confirmPassword=$('#confirmPassword').val();
    var password=$('#password').val();
    if(password == confirmPassword){
        $('#confirmPasswordError').text(' ');
        return true;
    }
    else{
        $('#confirmPasswordError').text('password and confirm password does not match!');
        return false;
    }
}
$('#confirmPassword').blur(function () {
    confirmPasswordCheak();
});
$('#confirmPassword').keyup(function () {
    $('#confirmPasswordError').text(' ');
});

// SHOW PASSWORD
$('#showhide').click(function () {
    var attrValue=$('#password').attr('type');
    if(attrValue == 'password'){
        $('#password').attr('type','text');
    }
    else{
        $('#password').attr('type','password');
    }
});

// GENDERINFO
function checkGenderInfo() {
    var genderInfo=$('input[type="radio"]:checked').val();
    if(genderInfo=='male'||genderInfo=='female'){
        $('#genderError').text(' ');
        return true;
    }
    else{
        $('#genderError').text('Please give your gender info!');
        return false;
    }
}

// $('#btn').click(function () {
//     checkGenderInfo();
// })

// DISTRICTNAME
function checkDistrictName() {
    var districtvalue=$('#district').val();
    if(districtvalue==' '){
        $('#districtError').text('Please give us Your district info!');
        return false;
    }
    else{
        $('#districtError').text(' ')
        return true;
    }
}

$('#form').submit(function () {
   if(cheakFristName()==true && cheakLastName()==true && cheakEmailAddress()==true && confirmPasswordCheak()==true &&cheakPassword()==true  && checkGenderInfo()==true && checkDistrictName()==true){
   return true;
   }
   else {
       return false;
   }
})









$(window).scroll(function () {
    var menuPosition=$('#menu').position();
    var windowPosition=$(window).scrollTop();
    if(windowPosition >= menuPosition.top) {
        $('#mainUl').css({
            'position': 'fixed',
            'top': '0px',
            'width': '95%'


        })
    }else{
            $('#mainUl').css({
                'position':'relative',
                'top':'0px',
                'width':'100%'
            });
        }


});