<template>
  <div class="container-fluid mt-3">
    <header>
      <Navbar />
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue'
  import Home from "./components/Home.vue"; 
  import Formulario from "./components/Formulario/index.vue";
  import Datos from "./components/Datos.vue";

  export default {
    name: 'app',
    components: {
      Navbar,
      Home,
      Formulario,
      Datos,
    }
  }

</script>

<style>

</style>