<template>
  <div>
    <div class="mt-5 table-responsive">
      <div class="container px-4">
        <h1>Listado de localidades</h1>

        <form class="row g-3 mx-auto">
          <div class="col-md-6">
            <label for="inputCity" class="form-label">Ciudad</label>
            <input
              type="text"
              class="form-control"
              v-model="localidad.nombre"
            />
          </div>
          <div class="col-md-6">
            <label for="inputState" class="form-label">Provincia</label>
            <input
              type="text"
              class="form-control"
              v-model="localidad.provincia"
            />
          </div>
          <div class="col-md-6">
            <label for="inputCountry" class="form-label">Cadeteria</label>
            <input
              type="text"
              class="form-control"
              v-model="localidad.cadeteria"
            />
          </div>
          <div class="col-md-6">
            <label for="inputZip" class="form-label">Código Postal</label>
            <input
              type="text"
              class="form-control"
              v-model="localidad.codigo_postal"
            />
          </div>

          <div class="col-12"></div>
          <div class="col-12">
            <!-- <ButtonSave
            @on:click="saveLocalidad()"
            /> -->

            <button class="btn btn-primary" @click="saveLocalidad()">
              GUardar
            </button>

            <router-link
              tag="button"
              class="btn btn-secondary"
              to="javascript:history.back()"
            >
              Volver atrás
            </router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import Button from "../../../components/ButtonSave.vue";
import { mapActions } from "vuex";


export default {
  components: {
    Navbar: defineAsyncComponent(() =>
      import("../../../components/Navbar.vue")
    ),
    // ButtonSave: defineAsyncComponent(() =>
    //   import("../../../components/ButtonSave.vue")
    // ),
  },
  data() {
    return {
      localidad: {
        nombre: "",
        provincia: "",
        codigo_postal: "",
        cadeteria: "",
      },
    };
  },
  methods: {
    ...mapActions("localidades", ["createLocalidad"]),
    loadLocalidad() {
      this.localidad = {
        nombre: "",
        provincia: "",
        codigo_postal: "",
        cadeteria: "",
      };
    },
    async saveLocalidad() {
      await this.createLocalidad(this.localidad);

      this.$router.push({name:'index', params:''})
    },
  },
};
</script>
