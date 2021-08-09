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
      console.log(myJson);
     
      
      
    };
    userAction();




  }
