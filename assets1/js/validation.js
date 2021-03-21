$(document).ready(function () {
    $('#registration-message').hide();


    $('#register-btn').click(function (e) {
        e.preventDefault();
        let firstName = $('#firstName').val();
        let lastName = $('#lastName').val();
        let dob = $('#dob').val();
        let email = $('#email').val();
        let phone = $('#phone').val();
        let address = $('#address').val();
        if (firstName===''){
            $('#registration-message').show();
            $('#show-message').html('Enter Your FirstName Please');
        }else if (firstName.length<3){
            $('#registration-message').show();
            $('#show-message').html('Enter Valid FirstName Please');
        }else if (lastName===''){
            $('#registration-message').show();
            $('#show-message').html('Enter Your LastName Please');
        }else if (lastName.length<3){
            $('#registration-message').show();
            $('#show-message').html('Enter Valid LastName Please');

        }else if ($('.gender:checked').length==0){
            $('#registration-message').show();
            $('#show-message').html('Select Gender Please');
        }else if (dob===''){
            $('#registration-message').show();
            $('#show-message').html('Type Date Of Birth Please');
        } else if (email===''){
            $('#registration-message').show();
            $('#show-message').html('Enter Your Email Please');
        }else if (isEmail(email)===false){
            $('#registration-message').show();
            $('#show-message').html('Enter Valid Email Please');
        }else if (phone===''){
            $('#registration-message').show();
            $('#show-message').html('Enter Your Phone Please');
        }else if (isPhone(phone)===false){
            $('#registration-message').show();
            $('#show-message').html('Enter Valid Phone Please');
        }
        else if (phone.length<10 || phone.length>10){
            $('#registration-message').show();
            $('#show-message').html('Enter Invalid Phone Please');
        }else if (address===''){
            $('#registration-message').show();
            $('#show-message').html('Enter Your Address Please');
        }else if (address.length<6){
            $('#registration-message').show();
            $('#show-message').html('Enter Valid Address Please');
        }else {
            $('#registration-message').show();
            $('#show-message').html('Successfully Done!');
        }


        function isPhone(phone) {
            var phoneReg=/^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
            if (!phoneReg.test(phone)){
                return false
            }else {
                return true
            }
        }

        function isEmail(email) {
            var emailReg=/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (!emailReg.test(email)){
                return false
            }else {
                return true
            }
        }
    })
})



