document.getElementById('contact-form').addEventListener('submit',saveTask);

// Con esta funcion evitamos que la pagina se recargue
function saveTask(e){
    document.getElementById('contact-form').reset();
    document.getElementById('text').innerHTML = '';
    e.preventDefault();
}

// Validar que un correo (solo valida la estructura)
function validation(email, text){
    var email = document.getElementById('email').value;
    var text = document.getElementById('text');
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    
    if(pattern.test(email)){
        text.innerHTML = 'Email Addess Valid';
        text.style.color = 'rgb(115, 255, 0)'
    } else{
        text.innerHTML = 'Email Addess Invalid';
        text.style.color = 'red'
    }
}


