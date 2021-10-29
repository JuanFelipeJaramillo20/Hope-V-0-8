<template>
  <div class="paciente">   
     <div class="datos">
       <div class="status">
         <h1>Ésta es la pagina del paciente, con sus datos</h1>
         <input type="text" id="idPaciente">
          <button class="btn btn-primary" @click="cargarDatosPaciente()">Cargar Paciente</button>
          </div>
            <div class="cards">
              <div class="card">
                <div class="card-info">
                <h2>Nombre(s)</h2>
                <input type="text" id="nombres">
                <div class="progress"></div>
              </div>
              </div>
              <div class="card">
                <div class="card-info">
                <h2>Apellidos</h2>
                <input type="text" id="apellidos">
                <div class="progress"></div>
              </div>
              </div>
              <div class="card">
                  <div class="card-info">
                    <h2>teléfono</h2>
                    <input type="text" id="telefono">
                    <div class="progress"></div>
              </div>
              </div>
              <div class="card">        
                      <div class="card-info">
                        <h2>Correo electrónico</h2>
                        <input type="text" id="email">
              </div>
              </div>                        
              
          </div>
      </div>
      <button class="btn btn-primary" @click="crearPaciente()">Crear Paciente</button>
      <button class="btn btn-warning" @click="actualizarPaciente()">Modificar Paciente</button>
      <button class="btn btn-danger" @click="eliminarPaciente()">Eliminar Paciente</button>
    </div>
</template>

<script>
export default {
  
    data(){
      return{
        datos:{
          nombres :"",
          apellidos: "",
          identificacion: "",
          email: ""
      }}
    },
    methods:{
      cargarDatosPaciente(){

        this.datos.identificacion = document.getElementById("idPaciente").value;
        this.axios.get(`/paciente/${this.datos.identificacion}`)
        .then((result) =>{
          document.getElementById("nombres").value = result.data.nombres;
          document.getElementById("apellidos").value = result.data.apellidos;
          document.getElementById("idPaciente").value = result.data._id;
          document.getElementById("email").value = result.data.email;
          document.getElementById("telefono").value = result.data.telefono;
          alert("Paciente cargado!");
        }).catch((err) => {console.log("Hay un error:"+ err.response)});
      },
      actualizarPaciente(){

          let paciente = {nombres:document.getElementById("nombres").value, apellidos:document.getElementById("apellidos").value,identificacion:document.getElementById("idPaciente").value,email:document.getElementById("email").value, telefono:document.getElementById("telefono").value};

          this.datos.identificacion = document.getElementById("idPaciente").value;
          this.axios.put(`/paciente/${this.datos.identificacion}`, paciente)
          .then((result)=>{
            document.getElementById("nombres").innerHTML = result.data.nombres;
            document.getElementById("apellidos").innerHTML = result.data.apellidos;
            document.getElementById("idPaciente").innerHTML = result.data._id;
            document.getElementById("email").innerHTML = result.data.email;
            document.getElementById("telefono").innerHTML = result.data.telefono;
            alert("Paciente actualizado!")
          }).catch((err) => console.log(err.response));
          
      },
      crearPaciente(){
          let paciente = {nombres:document.getElementById("nombres").value, apellidos:document.getElementById("apellidos").value,_id:document.getElementById("idPaciente").value,email:document.getElementById("email").value, telefono:document.getElementById("telefono").value};
          this.axios.post("/paciente/", paciente)
          .then((result) =>{
            document.getElementById("nombres").innerHTML = result.data.nombres;
            document.getElementById("apellidos").innerHTML = result.data.apellidos;
            document.getElementById("idPaciente").innerHTML = result.data._id;
            document.getElementById("email").innerHTML = result.data.email;
            document.getElementById("telefono").innerHTML = result.data.telefono;
            alert("Paciente creado!");
          }).catch(err => console.log(err.response));
      },
      eliminarPaciente(){
          this.datos.identificacion = document.getElementById("idPaciente").value;
          this.axios.delete(`/paciente/${this.datos.identificacion}`)
          .then((result) => {
            document.getElementById("nombres").innerHTML = result.data.nombres;
            document.getElementById("apellidos").innerHTML = result.data.apellidos;
            document.getElementById("idPaciente").innerHTML = result.data._id;
            document.getElementById("email").innerHTML = result.data.email;
            document.getElementById("telefono").innerHTML = result.data.telefono;
            alert("Paciente eliminado!")
          }).catch(err => console.log(err.response));
      }
    }
}
</script>