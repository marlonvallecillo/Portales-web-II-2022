let typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
  });
   
  typewriter
    .pauseFor(2500)
    .typeString('La Capital del Sol')
    .pauseFor(200)
    .deleteChars(10)
    .start();

    /*FUNCION PARA FORM*/ 
    function captura(){
        var email=document.getElementById("email").value;
        var input=document.getElementById("name").value;
        if (email==""){
          alert("El correo es obligatorio digitarlo");
          document.getElementById("email").focus();
        }else{
          if (input==""){
            alert("El nombre es obligatorio digitarlo");
            document.getElementById("name").focus();
        }else{
          if (tel==""){
            alert("El Telefono es obligatorio digitarlo");
            document.getElementById("phone").focus();
        }
        console.log(email +" "+input +" "+tel);
      }
    }
      }


      /*FUNCION PARA LOGIN*/ 



     /* var attempt=3;
function validate(){
    var usuar, password;
    
    usuar=document.getElementById("usuar").value;
    password=document.getElementById("password").value;
    
    if(usuar =="Admin" && password =="1234."){
        alert("Ingreso Exitosamente");
        window.location.href= "menu.html";
        return false;

    } 
    else{
        attempt--;
    }
    alert("Te queda" +attempt+ "intentos mas")
    if(attempt==0){
        document.getElementById("usuar").disable=true;
        document.getElementById("password").disable=true;
        document.getElementById("submit").disable=true;
    }
   
}*/
    
    