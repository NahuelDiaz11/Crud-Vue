<template>
    <button class="btn btn-primary">
      
  <i class="fa"
  :class="icon"
  text="Guardar"
  ></i>
  Guardar
    </button>
  </template>

 <script>

export default{
    props:{
    icon:{
      type:String,
      default: 'fa-plus',
     

    }
  }
}
</script>