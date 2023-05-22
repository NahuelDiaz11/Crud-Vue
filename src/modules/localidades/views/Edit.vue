<template>
  <div>
    <div class="mt-5 table-responsive">
      <div class="container px-4">
        <h1>Listado de localidades</h1>
      
        <form class="row g-3 mx-auto">
          

          <div class="col-md-6">
            <label for="inputCity" class="form-label">Ciudad</label>
            <input type="text" class="form-control" v-model="localidad.nombre" />
          </div>
          <div class="col-md-6">
            <label for="inputState" class="form-label">Provincia</label>
            <input type="text" class="form-control" v-model="localidad.provincia" />
          </div>
          <div class="col-md-6">
            <label for="inputCountry" class="form-label">Cadeteria</label>
            <input type="text" class="form-control" v-model="localidad.cadeteria" />
          </div>
          <div class="col-md-6">
            <label for="inputZip" class="form-label">Código Postal</label>
            <input type="text" class="form-control" v-model="localidad.codigo_postal" />
          </div>
          <div class="col-12"></div>
          <div class="col-12">
            <button class="btn btn-primary" @click="saveLocalidad()">
              Actualizar
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
import {
  
  localidadesCreateOrUpdateApi,
} from "../../../api/localidadesApi";

export default {
  data() {
    return {
      localidad: {},
    };
  },
  created() {
    // Obtener el id de la localidad desde la ruta
    const id = this.$route.params.id;
    // Obtener los datos de la localidad
    this.fetchLocalidad(id);
  },
  methods: {
    async fetchLocalidad(id) {
      
    // Obtener los datos de la localidad desde tu API usando Axios
    const response = await localidadesCreateOrUpdateApi.get(`localidades/${id}`);
    
    const data = response.data;
   
    // Asignar los datos de la localidad a la propiedad localidad
    this.localidad = data.data;

   

    
  },
  
    saveLocalidad() {
      // ...
    },
  },
};
</script>