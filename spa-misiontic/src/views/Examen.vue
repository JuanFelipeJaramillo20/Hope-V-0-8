<template>
  <div id="app">
    <main>
      <NavbarComponent />
      <section class="glass">
        <!-- Aqui deben estar los componentes de cada vista-->
        <div class="view">
          <!--COMPONENT-->
          <template>
            <div class="examen">
              <h1>Ésta es la pagina de los examenes</h1>
              <form>
                <div class="container.examen">
                  <div class="form-row">
                    <div class="form-group col-md-10">
                      <label for="inputNombres">Número de identificación</label>
                      <input
                        type="nombre"
                        class="form-control"
                        id="idPaciente"
                      />
                    </div>
                  </div>
                  <div class="form-group col-md-10">
                    <label for="inputRadio">Radio promedio</label>
                    <input type="text" class="form-control" id="radio" />
                  </div>
                  <div class="form-group col-md-10">
                    <label for="inputTextura">Textura Promedio</label>
                    <input type="text" class="form-control" id="textura" />
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-10">
                      <label for="inputArea">Area Promedio</label>
                      <input type="text" class="form-control" id="area" />
                    </div>
                    <div class="form-group col-md-10">
                      <label for="inputSuavidad">Suavidad</label>
                      <input type="text" class="form-control" id="suavidad" />
                    </div>
                    <div class="form-group col-md-10">
                      <label for="inputPerimetro">Perímetro</label>
                      <input type="text" class="form-control" id="perimetro" />
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="exampleFormControlFile1"
                      >Subir imagen diagnostica</label
                    ><br />
                    <input
                      type="file"
                      class="form-control-file"
                      id="exampleFormControlFile1"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <label class="form-check-label" for="gridCheck">
                      Acepto el tratamiento de datos segun la ley 1581 del 2012.
                    </label>
                  </div>
                </div>
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="calcularProbabilidad()"
                >
                  Enviar
                </button>
                <h2 id="nombreCompleto"></h2>
                <h3>Resultados de malignidad del examen ingresado:</h3>
                <br />
                <h4 id="probabilidad"></h4>
              </form>
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
      probabilidad: "",
      datos: {
        identificacion: "",
        nombreCompleto: "",
      },
    };
  },
  methods: {
    calcularProbabilidad() {
      this.datos.identificacion = document.getElementById("idPaciente").value;
      /*this.axios.post(`/paciente/predict/${this.datos.identificacion}`)
        .then((result) =>{
          document.getElementById("nombreCompleto").innerHTML = result.data.nombres + ":";
        }).catch((err) => {console.log(err.response)});*/
      let radioMedio = parseFloat(document.getElementById("radio").value);
      let perimetroMedio = parseFloat(
        document.getElementById("perimetro").value
      );
      let areaMedia = parseFloat(document.getElementById("area").value);
      let texturaMedia = parseFloat(document.getElementById("textura").value);
      let suavidadMedia = parseFloat(document.getElementById("suavidad").value);
      let examen = {
        examen: [
          radioMedio,
          texturaMedia,
          areaMedia,
          suavidadMedia,
          perimetroMedio,
        ],
      };
      console.log(examen);
      this.axios
        .put(`/paciente/${this.datos.identificacion}`, examen)
        .catch((err) => console.log(err.response));
      this.axios
        .post(`/paciente/predict/${this.datos.identificacion}`)
        .then((result) => {
          this.datos.probabilidad = result.data;
          console.log(result.data);
          document.getElementById("probabilidad").innerHTML =
            this.datos.probabilidad;
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
  },
};
</script>
