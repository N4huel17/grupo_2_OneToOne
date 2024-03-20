console.log('login');
const $ = (id) => document.getElementById(id);
const exRegEmail= /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i

$('email').addEventListener('focus', function () {
    this.classList.remove('is-invalid')
    
})

$('password').addEventListener('focus', function () {
    this.classList.remove('is-invalid')
    
})

$('email').addEventListener('blur', function () {
    switch (true) {
        case !this.value:
            this.classList.add('is-invalid');
            $('error-email').innerHTML = "El email es requerido"
            break;
            case !exRegEmail.test(this.value):
                this.classList.add('is-invalid');
                $('error-email').innerHTML = "Email con formato invalido"
                break;
                
        default:
            this.classList.remove('is-invalid');
                $('error-email').innerHTML = null
            break;
    }
    
})
$('password').addEventListener('blur', function () {
    switch (true) {
        case !this.value:
            this.classList.add('is-invalid');
            $('error-password').innerHTML = "La contraseña es requerida";
            break;
        case this.value.length < 8:
            this.classList.add('is-invalid');
            $('error-password').innerHTML = "La contraseña debe tener al menos 8 caracteres";
            break;
        case !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+}{"':;?/>.<,])(?=.*[a-zA-Z]).{8,}/.test(this.value):
            this.classList.add('is-invalid');
            $('error-password').innerHTML = "La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial";
            break;
        default:
            this.classList.remove('is-invalid');
            $('error-password').innerHTML = null;
            break;
    }
});

$('button-eye').addEventListener('click', function () {
    this.classList.toggle("fa-eye")
    this.classList.toggle("fa-eye-slash") 
 $('password').type = $ ('password').type === "password" ? "text" : "password"
   
});


//---------------------------------------------------------------//

$('form-login').addEventListener('submit', function (e){
    e.preventDefault()
    let error = false;
    for (let i = 0; i < this.elements.length -2; i++) {
       if (!this.elements[i].value) {
        error= true;
        this.elements[i].classList.add('is-invalid')
        
       }
        
    }
    !error ? this.submit() : $('msg-error').hidden = false
})

