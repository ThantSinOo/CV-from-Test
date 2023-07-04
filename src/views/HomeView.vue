<template>
  <div class="bg-light mains">
    <Navbar/>
    <div class="page">
      <h1>Home Page</h1>
    </div>
  </div>
  <router-view/>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default{
  components:{Navbar}
}
</script>

<style>
.mains{
  height: 100vh;
}
</style>