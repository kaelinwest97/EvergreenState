document.addEventListener('DOMContentLoaded', function () {
    var email = document.getElementById('email');
    var confirmEmail = document.getElementById('confirm-email');

    function checkEmailMatch() {
        
        if (email.value !== confirm-email.value) {
            confirmEmail.setCustomValidity('Email addresses must match.');

            
            confirmEmail.style.borderColor = 'red';

            
            alert('Email addresses do not match. Please enter matching email addresses.');
        } else {
            confirmEmail.setCustomValidity('');

            
            confirmEmail.style.borderColor = 'green';

            
            alert('Email addresses match. Your email has been successfully verified.');


        }
    }

    email.addEventListener('change', checkEmailMatch);
    confirmEmail.addEventListener('change', checkEmailMatch);
});
