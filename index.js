document.addEventListener('DOMContentLoaded', function () {
    var passwordinput_signup = document.getElementById('passwordsignup');
    var Email_signup = document.getElementById('emailsignup');
    var userName = document.getElementById('namesignup');
    var exit = document.getElementById('exit');
    var passwordinput_signin = document.getElementById('password-signin');
    var Email_signin = document.getElementById('e-mail-signin');
    var btn_register = document.querySelector('.btn-register');
    var pageside = document.getElementById('page-side');
    var signin = document.getElementById('signin');
    var btnlogin = document.getElementById('btnlogin');
    var loginin = document.getElementById('loginin');
    var home =document.getElementById('home');
    var btnlogout=document.getElementById('btn-logout');

   

    var signupArray = [];

    if (localStorage.getItem('emails')) {
        signupArray = JSON.parse(localStorage.getItem('emails'));
    }

    function add_data() {
        var data = { username: userName.value, Acounts: Email_signup.value, password: passwordinput_signup.value };
      
       
            signupArray.push(data);
        localStorage.setItem('emails', JSON.stringify(signupArray));
       
        
    }

    function clear() {
        userName.value = '';
        Email_signup.value = '';
        passwordinput_signup.value = '';
    }

    function is_exit() {
        for (var i = 0; i < signupArray.length; i++) {
            if (signupArray[i].Acounts === Email_signup.value) {
                return true;
            }
        }
        return false;
    }

    function is_Empty() {
        return userName.value === '' || Email_signup.value === '' || passwordinput_signup.value === '';
    }

    function check_data() {
        var found = false;
        for (var i = 0; i < signupArray.length; i++) {
            if (signupArray[i].Acounts === Email_signin.value && signupArray[i].password === passwordinput_signin.value) {
                pageside.textContent = 'Welcome ' + signupArray[i].username;
                home.classList.remove('d-none');
                pageside.classList.remove('d-none');
                signin.style.display = 'none';  // Hides the signin form
                found = true;
                break;
            }
        }
        if (!found) {
            loginin.innerHTML = '<span class="p-2 text-danger">incorrect email or password</span>';
        }
    }

    if (btn_register) {
        btn_register.addEventListener('click', function () {
            if (is_exit()) {
                exit.textContent = 'This email already exists';
            } else if (is_Empty()) {
                exit.innerHTML = '<span class="p-2 text-danger">All fields are required</span>';
            } else {
                add_data();
                exit.innerHTML = '<span class="p-2 text-success">Success</span>';
                clear();
            }
        });
    }

    if (btnlogin) {
        btnlogin.addEventListener('click', function (params) {
            check_data();
          
            
        });
    }
  
    
});



