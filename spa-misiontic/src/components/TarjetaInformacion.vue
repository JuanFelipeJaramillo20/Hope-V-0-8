<template>
  <div id="app">
    <main>
      <section class="glass">
        <div class="dashboard">
          <div class="user">
            <img src="../assets/images/hope.png" alt="" />
            <h3 id="nombreUser">xd</h3>
            <p>Doctor(a)</p>
          </div>
          <div class="links">
            <div class="link">
              <i class="fas fa-home"></i>
              <router-link to="/"><h2>Inicio</h2></router-link>
            </div>
            <div class="link">
              <i class="fas fa-hospital-user"></i>
              <router-link to="/paciente"><h2>Paciente</h2></router-link>
            </div>
            <div class="link">
              <i class="fas fa-upload"></i>
              <router-link to="/examen"><h2>Examen</h2></router-link>              
            </div>
            <div class="link">
              <i class="fas fa-user"></i>
              <router-link to="/usuario"><h2>Usuario</h2></router-link>
              </div>
            <div class="link">
              <i class="fas fa-users"></i>
              <router-link to="/nosotros"><h2>Nosotros</h2></router-link>
              </div>
              <div class="link">
              <i class="fas fa-users"></i>
              <button type="button" @click="cerrarSesion()">Cerrar sesión</button>
              </div>
          </div>
        </div>
         <div class="view">
         <router-view/>
         </div>
      </section>
    </main>
    <div class="circle1"></div>
    <div class="circle2"></div>
  </div>
</template>

<script>
export default {
  name:"Mid",
  data(){
      return{
        datos:{
            user:{}
      }
     
  }
  },
  beforeCreate(){
    var autenticar = window.localStorage.getItem("autenticacion");
    console.log(window.localStorage.getItem("usuario"));
    if(autenticar != "ok"){
      this.$router.push({path: "/"})
    }
    
  },
  mounted(){
    document.getElementById("nombreUser").innerHTML = window.localStorage.getItem("userName");
  },
  methods:{
    cerrarSesion(){
      window.localStorage.removeItem("autenticacion");
      window.localStorage.removeItem("userName");
      window.localStorage.removeItem("id");
      window.localStorage.removeItem("email");
      this.$router.push({path: "/"})
    }
  }
  
}
</script>