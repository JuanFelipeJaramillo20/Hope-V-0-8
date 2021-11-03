<template>
  <div id="app2">
    <main>
      <NavbarComponent />
      <section class="glass">
        <!-- Aqui deben estar los componentes de cada vista-->
        <div >
          <!--COMPONENT-->
          <template>
            <div class="paciente">
              <div class="datos">
                <div class="status">
                  
                </div>
                <div class="cards">
                  <div class="card">
                    <div class="card-info">
                      <h2>identificación</h2>
                      <input type="text" id="idPaciente" />
                      <div class="progress"></div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-info">
                      <h2>Nombre(s)</h2>
                      <input type="text" id="nombres" />
                      <div class="progress"></div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-info">
                      <h2>Apellidos</h2>
                      <input type="text" id="apellidos" />
                      <div class="progress"></div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-info">
                      <h2>Correo electrónico</h2>
                      <input type="text" id="email" />
                    </div>
                  </div>
                </div>
              </div>
              <button class="btn btn-primary" @click="cargarDatosUsuario()">
                Cargar datos de usuario
              </button>
              <button class="btn btn-primary" @click="crearPaciente()">
                Crear Usuario
              </button>
              <button class="btn btn-warning" @click="actualizarPaciente()">
                Modificar Usuario
              </button>
            </div>
          </template>

          <!-- / COMPONENT-->
        </div>
        <!-- / Aqui deben estar los componentes de cada vista-->
      </section>
    </main>
  </div>
</template>

<script>
import NavbarComponent from "@/components/NavbarComponent";

export default {
  components: {
    NavbarComponent,
  },

  data() {
    return {
      datos: {
        nombres: "",
        apellidos: "",
        identificacion: "",
        email: "",
      },
    };
  },
  methods: {
    cargarDatosUsuario() {
      /*
        this.datos.identificacion = window.localStorage.getItem("id");
        document.getElementById("nombres").value = window.localStorage.getItem("Nombres");
        document.getElementById("apellidos").value = window.localStorage.getItem("Apellidos");
        document.getElementById("idPaciente").value = window.localStorage.getItem("id");
        document.getElementById("email").value = window.localStorage.getItem("email");
        */
      this.datos.identificacion = window.localStorage.getItem("id");
      this.axios
        .get(`/user/${this.datos.identificacion}`)
        .then((result) => {
          document.getElementById("nombres").value = result.data.nombres;
          document.getElementById("apellidos").value = result.data.apellidos;
          document.getElementById("idPaciente").value = result.data._id;
          document.getElementById("email").value = result.data.email;
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    actualizarPaciente() {
      let paciente = {
        nombres: document.getElementById("nombres").value,
        apellidos: document.getElementById("apellidos").value,
        identificacion: document.getElementById("idPaciente").value,
        email: document.getElementById("email").value,
      };
      console.log(paciente);
      document.getElementById("nombreUser").innerHTML = paciente.nombres;
      this.datos.identificacion = document.getElementById("idPaciente").value;
      this.axios
        .put(`/user/${this.datos.identificacion}`, paciente)
        .then((result) => {
          console.log("realizado");
          document.getElementById("nombres").value = result.data.nombres;
          document.getElementById("apellidos").value = result.data.apellidos;
          document.getElementById("idPaciente").value = result.data._id;
          document.getElementById("email").value = result.data.email;
          alert("Usuario actualizado exitosamente!");
        })
        .catch((err) => console.log(err.response));
    },
    crearPaciente() {
      let paciente = {
        nombres: document.getElementById("nombres").value,
        apellidos: document.getElementById("apellidos").value,
        _id: document.getElementById("idPaciente").value,
        email: document.getElementById("email").value,
      };
      this.axios
        .post("/user", paciente)
        .then((result) => {
          document.getElementById("nombres").innerHTML = result.data.nombres;
          document.getElementById("apellidos").innerHTML =
            result.data.apellidos;
          document.getElementById("idPaciente").innerHTML = result.data._id;
          document.getElementById("email").innerHTML = result.data.email;
          alert("Usuario creado exitosamente!");
        })
        .catch((err) => console.log(err.response));
    },
    eliminarPaciente() {
      this.datos.identificacion = document.getElementById("idPaciente").value;
      this.axios
        .delete(`/user/${this.datos.identificacion}`)
        .then((result) => {
          document.getElementById("nombres").innerHTML = result.data.nombres;
          document.getElementById("apellidos").innerHTML =
            result.data.apellidos;
          document.getElementById("idPaciente").innerHTML = result.data._id;
          document.getElementById("email").innerHTML = result.data.email;
          alert("Usuario eliminado exitosamente!");
        })
        .catch((err) => console.log(err.response));
    },
  },
};
</script>
<style >
.card{
  margin-left: 15px;
}

</style>
