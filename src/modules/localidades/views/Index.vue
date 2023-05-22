<template>
  <div class="row">
    <div class="col-lg-8 offset-lg-2">
      <div class="table-responsive">
        
        <DataTable
          :data="localidades"
          class="table table-striped table-bordered display"
          :options="{
            responsive: true,
            autoWidth: true,
            select: true,
            dom: 'Bfrtip',
            language: {
              search: 'Buscar',
              zeroRecords: 'No hay localidades cargadas',
              info: 'Mostrando del _START_ a _END_ de _TOTAL_ localidades',
              infoFiltered: 'Filtrados de _MAX_ localidades',
              paginate: {
                first: 'Primero',
                previous: 'Anterior',
                next: 'Siguiente',
                last: 'Ultimo',
              },
            },

            columns: [
              {
                data: 'id',

                render: function (data, type, row, meta) {
                  return data;
                },
              },

              { data: 'nombre' },
              { data: 'provincia' },
              { data: 'codigo_postal' },
            ],
          }"
          @click="handleRowClick"
        >
          <thead>
            <tr>
              <th>#Id</th>
              <th>Nombre</th>
              <th>Provincia</th>
              <th>Codigo Postal</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="localidad in localidades" :key="localidad.id">
              <td>{{ localidad.id }}</td>
              <td>{{ localidad.nombre }}</td>
              <td>{{ localidad.provincia }}</td>
              <td>{{ localidad.codigo_postal }}</td>
            </tr>
          </tbody>
        </DataTable>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import DataTable from "datatables.net-vue3";
import DataTableLib from "datatables.net-bs5";
import Buttons from "datatables.net-buttons-bs5";
import ButtonsHtml5 from "datatables.net-buttons/js/buttons.html5";
import print from "datatables.net-buttons/js/buttons.print";
import pdfmake from "pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import "datatables.net-responsive-bs5";
import JsZip from "jszip";
window.JsZip = JsZip;
DataTable.use(DataTableLib);
DataTable.use(pdfmake);
DataTable.use(ButtonsHtml5);

export default {
  components: {
    DataTable: DataTable,
  },

  data() {
    return {
      columns: [
        {
          data: "id",
          title: "#Id",
          render: function (data, type, row, meta) {
            return data;
          },
        },
        { data: "nombre" },
        { data: "provincia" },
        { data: "codigo_postal" },
      ],
    };
  },

  computed: {
    ...mapState("localidades", ["localidades"]),
    localidadesList() {
      return this.localidades;
    },
  },

  methods: {
    ...mapActions("localidades", ["loadLocalidades"]),

    handleRowClick(event) {
      const table = $(event.currentTarget).DataTable();
      const row = table.row(event.target.closest("tr")).data();

      if (row) {
        const id = row.id;
        window.location.href = `edit/${id}`;
      }
    },
  },

  created() {
    this.loadLocalidades();
  },
};
</script>

<style>
@import "datatables.net-bs5";
</style>
