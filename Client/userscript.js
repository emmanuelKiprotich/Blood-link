const uname = document.querySelector('#uname');
const pass = document.querySelector('#pass');
const btnContainer = document.querySelector('.btn-container');
const btn = document.querySelector('#login-btn');
const form = document.querySelector('form');
const msg = document.querySelector('.msg');
btn.disabled = true;

function shiftButton() {
    showMsg();
    const positions = ['shift-left', 'shift-top', 'shift-right', 'shift-bottom'];
    const currentPosition = positions.find(dir => btn.classList.contains(dir));
    const nextPosition = positions[(positions.indexOf(currentPosition) + 1) % positions.length];
    btn.classList.remove(currentPosition);
    btn.classList.add(nextPosition);
}

function showMsg() {
    const isEmpty = uname.value === '' || pass.value === '';
    btn.classList.toggle('no-shift', !isEmpty);

    if (isEmpty) {
        btn.disabled = true
        msg.style.color = 'rgb(218 49 49)';
        msg.innerText = 'Please fill the input fields before proceeding';
    } else {
        msg.innerText = 'Great! Now you can proceed';
        msg.style.color = '#92ff92';
        btn.disabled = false;
        btn.classList.add('no-shift')
    }
}

btnContainer.addEventListener('mouseover', shiftButton);
btn.addEventListener('mouseover', shiftButton);
form.addEventListener('input', showMsg)
btn.addEventListener('touchstart', shiftButton);

 document.getElementById('register-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            const errorMsg = document.getElementById('error-msg');
            
            if (password !== confirmPassword) {
                errorMsg.textContent = "Passwords do not match!";
                return;
            }
            
            if (!document.getElementById('terms').checked) {
                errorMsg.textContent = "You must agree to the terms and conditions";
                return;
            }
            
            errorMsg.textContent = "";
            
            // Here you would typically send the data to your server
            // For demonstration, we'll just show a success message
            alert('Registration successful! You can now login.');
            window.location.href = 'login.html';
        });

        // Set max date for date of birth to today (18 years minimum)
        const today = new Date();
        const minDate = new Date(today.getFullYear() - 100, today.getMonth(), today.getDate());
        const maxDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
        
        const dobInput = document.getElementById('dob');
        dobInput.min = minDate.toISOString().split('T')[0];
        dobInput.max = maxDate.toISOString().split('T')[0];
        
        // Add focus effects to inputs
        const inputs = document.querySelectorAll('input, select');
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.querySelector('.fa').style.color = '#4a8cd6';
            });
            
            input.addEventListener('blur', function() {
                this.parentElement.querySelector('.fa').style.color = '#7d7d7d';
            });
        });