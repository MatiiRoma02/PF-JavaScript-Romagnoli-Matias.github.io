alert("Hola bienvenido a 'THE RED BARBER' Tu peluqueria de confianza 👋🏼😎");
alert("Por favor ingresa tu nombre y contraseña 🤙🏽");
alert("Por favor ingresa tu nombre: 'prueba' 🤙🏽");
alert("Por favor ingresa tu contraseña: '1234' 🤙🏽");

function login() {
  var user, password;
  user = document.getElementById("usuario").value;
  password = document.getElementById("contrasena").value;

  if (user === "prueba" && password === "1234") {
    localStorage.setItem("username", user);
    localStorage.setItem("password", password);
    window.location = "../PAGES/inicio.html";
  } else {
    alert("Datos incorrectos");
  }
}

window.onload = function () {
  var savedUsername = localStorage.getItem("username");
  var savedPassword = localStorage.getItem("password");

  if (savedUsername && savedPassword) {
    document.getElementById("usuario").value = savedUsername;
    document.getElementById("contrasena").value = savedPassword;
  }
};


function login() {
  var user, password;
  user = document.getElementById("usuario").value;
  password = document.getElementById("contrasena").value;

  if (user === "prueba" && password === "1234") {
    localStorage.setItem("username", user);
    localStorage.setItem("password", password);
    window.open("../PAGES/inicio.html", "_blank");
    
    // Agregar notificación de éxito
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    });
    
    Toast.fire({
      icon: 'success',
      title: 'Inicio de sesión exitoso'
    });
  } else {
    alert("Datos incorrectos");
  }
}
