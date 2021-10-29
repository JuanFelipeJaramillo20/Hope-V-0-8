<template>
         <body>
             <main>
                 <div class="contenedor__todo">

            <div class="caja__trasera">
                <div class="caja__trasera-login">
                    <h3>¿Ya tienes una cuenta?</h3>
                    <p>Iniciar Sesión para entrar en la página</p>
                    <button id="btn__Iniciar-Sesión"> Iniciar Sesión</button>
                </div>
                <div class="caja__trasera-register">
                    <h3>¿Aún no tienes una cuenta?</h3>
                    <p>Registrarse para Iniciar Sesión</p>
                    <button id="btn__Registrarse" > Registrarse</button>
                </div>
            </div>

            <div class="contenedor__login-register">

                <form action="" class="formulario__login">
                    <h2>Iniciar sesión</h2>
                    <input type="text" placeholder="Usuario" id="user">
                    <input type="password" placeholder="Contraseña" id="pass">
                    <button @click="login()" id="entrar" type="button">Entrar</button><br>
                    <a href="/inicio">¿Recordar contraseña?</a>
                </form>

                <form action="" class="formulario__register">
                    <h2>Registrarse</h2>
                    <input type="text" placeholder="Nombre" id="nombres">
                    <input type="text" placeholder="Apellidos" id="apellidos">
                    <input type="text" placeholder="Correo electrónico" id="email">
                    <input type="password" placeholder="Número de identificacion" id="idN">
                    <input type="checkbox" placeholder="terms">
                    <label for ="terms"><a hrefer="#">Al seleccionar esta casilla aceptas nuestro aviso de privacidad, los términos y condiciones</a></label>
                    <button @click="register()" type="button">Enviar </button >
                    
                    
                </form>
                    
            </div>
        </div>
             </main>
            
         </body>

</template>

<script>
export default {
  name: 'Login',
  props: {
    msg: String
  },
  data(){
      return{
        datos:{
            username:"",
            password:"",
            nombres: "",
            apellidos: "",
            email:"",
            id:"",
            users:[]
      }
     
  }
  }
  ,beforeCreate(){
    var autenticar = window.localStorage.getItem("autenticacion");
    if(autenticar === "ok"){
      this.$router.push({path: "/usuario"})
    }
  },
  mounted() {

    document.getElementById("btn__Registrarse").addEventListener("click",register);
    document.getElementById("btn__Iniciar-Sesión").addEventListener("click",iniciarSesion);
    window.addEventListener("resize", anchopagina);


    var formulario_login = document.querySelector(".formulario__login");
    var formulario_register = document.querySelector(".formulario__register");
    var contenedor_login_register= document.querySelector(".contenedor__login-register");
    var caja_trasera_login = document.querySelector(".caja__trasera-login");
    var caja_trasera_register = document.querySelector(".caja__trasera-register");

    function anchopagina(){
        if(window.innerWidth>850){
            caja_trasera_login.style.display="block";
            caja_trasera_register.style.display="block";}
        else{
            caja_trasera_register.style.display="block";
            caja_trasera_register.style.opacity="1";
            caja_trasera_login.style.display="none";
            formulario_login.style.display="block";
            formulario_register.style.display="none";
            contenedor_login_register.style.left="0px";    }   }

    anchopagina(); 


    function iniciarSesion(){
        if(window.innerWidth>850){
            formulario_register.style.display="none";
            contenedor_login_register.style.left="10px";
            formulario_login.style.display="block";
            caja_trasera_register.style.opacity="1";
            caja_trasera_login.style.opacity="0";}
        else{
            formulario_register.style.display="none";
            contenedor_login_register.style.left="0px";
            formulario_login.style.display="block";
            caja_trasera_register.style.display="block";
            caja_trasera_login.style.display="none";}}

    function register (){
        if(window.innerWidth>850){
            formulario_register.style.display="block";
            contenedor_login_register.style.left="420px";
            formulario_login.style.display="none";
            caja_trasera_register.style.opacity="0";
            caja_trasera_login.style.opacity="1";}
        else{
            formulario_register.style.display="block";
            contenedor_login_register.style.left="0px";
            formulario_login.style.display="none";
            caja_trasera_register.style.display="none";
            caja_trasera_login.style.display="block";
            caja_trasera_login.style.opacity="1";
        }

        }


    },
  methods:{
      login(){
          this.datos.username = document.getElementById("user").value;
          this.datos.password = document.getElementById("pass").value;
          this.axios.get("/user")
          .then( res => {
            this.datos.users = res.data;
            this.datos.users.forEach((value) => {
   
              if(this.datos.username === value.username){
              
                if(this.datos.password === value.password){
               
                  window.localStorage.setItem("autenticacion", "ok");
                  window.localStorage.setItem("Nombres", value.nombres);
                  window.localStorage.setItem("Apellidos", value.apellidos)
                  window.localStorage.setItem("id", value._id);
                  window.localStorage.setItem("email", value.email);
                  this.$router.push({path: '/usuario'})

                }
              }
            })
          })
         
          
          
      },
      register(){
          this.datos.nombres = document.getElementById("nombres").value;
          this.datos.apellidos = document.getElementById("apellidos").value;
          this.datos.email = document.getElementById("email").value;
          this.datos.username = document.getElementById("idN").value;
          this.datos.id = document.getElementById("idN").value;
          this.datos.password = document.getElementById("idN").value;
          let usuario = {nombres: this.datos.nombres, apellidos: this.datos.apellidos, email: this.datos.email, username: this.datos.id, password: this.datos.id, _id: this.datos.id};
          console.log(usuario);
          this.axios.post("/user", usuario)
          .then(res =>{
              alert("Usuario creado correctamente! " + res.data )
          }).catch(err => console.log(err));
      }
  }
}
</script>

<style scoped src="../assets/css/estilos.css"></style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
