<template>
  <div>
    <Navbar />


    <div class="row justify-content-md-center" v-if="isLoading">
        <div class="col-3 alert-info text-center mt-5">
          Cargando...
          <h3 class="mt-2">
            <i class="fa fa-spin fa-sync"></i>
          </h3>
        </div>
      </div>
      
    <div class="mt-5">
      <h1>Listado de localidades</h1>
      <router-link to="/localidades/create">
        <button class="btn btn-success ml-3">
          Agregar localidad
        </button></router-link
      >
      <router-view></router-view>
     
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

import { mapState } from "vuex";

export default {
  components: {
    Navbar: defineAsyncComponent(() => import("../../../components/Navbar.vue")),
    Tabla: defineAsyncComponent(() => import("../views/Index.vue")),
  },

  computed: {
    ...mapState("localidades", ["isLoading"]),
  },
};
</script>
