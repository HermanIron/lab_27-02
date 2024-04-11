let usuarioCorrecto = "usuario";
let passwordCorrecto = "contraseña";
let intentosMaximos = 3;
let intentos = 0;

    function login() {
        while (intentos < intentosMaximos) {
            let username = document.getElementById("username").value;
            let password = document.getElementById("password").value;

            if (username === usuarioCorrecto && password === passwordCorrecto) {
                window.open("https://www.w3schools.com");
                return;
            } else {
                intentos++;
                document.getElementById("error").innerText = "Usuario incorrecto  o password. Intentos restantes: " + (intentosMaximos - intentos);
                return; 
        } 
     }

    document.getElementById("error").innerText = "Intentos  agotados. Saliendo ..";
    setTimeout(function () {
        window.alert("Lo siento... si no eres Hacker no puedes entrar...");
    }, 2000);

}