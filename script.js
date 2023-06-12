function verificarContraseña() {
    var contraseñaCorrecta = "12345";
    var contraseñaIngresada = document.getElementById("password").value;
    var mensajeElement = document.getElementById("mensaje");
  
    if (contraseñaIngresada === contraseñaCorrecta) {
      mensajeElement.textContent = 
      "Buenos días pequeña, Quiero que recibas este mensaje lleno de alegría y pisitividad para iluminar tu día. Permiteme recordarte lo increible y hermosa persona que eres. gracias por hacer de mis dias, dias felicdad, te quiero mucho...... Att: Alaini Marte";
    } else
      mensajeElement.textContent = "Contraseña incorrecta. Acceso denegado.";
    }