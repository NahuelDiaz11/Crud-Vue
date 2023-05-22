export default {

  name: "localidades",
 
  component: () => import("/src/modules/localidades/layouts/LocalidadesLayout.vue"),
  //rutas hijas
  children: [
    {
      path: "",
      name: "index",
      component: () => import("/src/modules/localidades/views/Index.vue"),
    },
    {
      path: "create",
      name: "create",
      component: () => import("/src/modules/localidades/views/Create.vue"),
    },
    {
      path: ":id",
      name: "edit",
      component: () => import("/src/modules/localidades/views/Edit.vue"),
     
    },
  ],

};
