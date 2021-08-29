const btnEntrar = document.getElementById('btnEntrar')
const url='http://localhost:3000/api/usuarios/login'
function signIn() {

    let user = document.getElementById('userlog').value;
    let pass = document.getElementById('passlog').value;
    const credenciales ={

      email: user,
      password: pass

    };
    console.log(JSON.stringify(credenciales));
    const userAction = async () => {
      const res = await fetch(url, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify(credenciales)
      });
      const myJson = await res.json(); 
      window.location.href = 'http://127.0.0.1:5501/front/pres.html';
      return myJson
     
      
      
    };
    const x=userAction();
    if (x==Error) {
      alert("Contraseña o usuario incorrectos")
      
    }



  }

  function signUp() {

    let user = document.getElementById('user').value;
    let pass = document.getElementById('pass1').value;
    let passR = document.getElementById('pass2').value;
    let email = document.getElementById('email').value;
  
    if(pass === passR){
      const userAction = async () => {
      
        const res = await fetch(`http://localhost:3000/registro`, {
          method: "POST", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json;charset=UTF-8"
          },
          body: JSON.stringify({nombre:user,email: email, password: passR})
        });
        const myJson = await res.json(); //extract JSON from the http response
        console.log(myJson);
        alert('Se ha registrado con exito')
      };
      userAction();
  
    }else{
      alert('Las contraseñas no coinciden')
    }
  
    
  
  }
