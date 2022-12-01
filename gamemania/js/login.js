

function logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;
    if(login == "admin" && senha =="admin"){
        alert("Bem vindo");
        location.href = "./user.html";
    }else{
        alert('Usuário/ senha incorretos.');
    }

}

