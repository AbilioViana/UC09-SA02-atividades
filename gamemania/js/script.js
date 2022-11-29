function cadastrarnewsletter () {
    let email = document.getElementById("campo-email").value
    alert(email)
    console.log (email) 
} 

function menushow() {
    let menumobile = document.querySelector('.mobile-menu');

        if(menumobile.classList.contains('open')){
            menumobile.classList.remove('open');
        } else {
            menumobile.classList.add('open')
        }
        }