<template>
  <div>
     <!-- top navbar -->
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-white">
              <a class="navbar-brand" href="#">
                
              </a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto">
                  <li class="nav-item active">
                    <router-link class="nav-link"  to="/mange">Manage</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/chat">Chat</router-link>
                  </li>
                </ul>
                <div class="my-2 my-lg-0 px-2">
                  <!-- <p>logo</p> -->
                    <router-link to=""> 
                      <font-awesome-icon icon="fa-solid fa-circle-user" size="2xl" style="color:black" />
                    </router-link>
                </div>
              </div>
            </nav>
        </div>
        <!-- side navbar -->
        <div class="sidebars bg-white">
          <nav class="nav flex-column pt-3">
              <router-link class="nav-link py-3" to="">
              <font-awesome-icon icon="fa-solid fa-users" style="color:black" size="lg" />
              </router-link>
              <router-link class="nav-link py-3" to="">
              <font-awesome-icon icon="fa-solid fa-magnifying-glass" style="color:black" size="lg" />
              </router-link>
              <router-link class="nav-link py-3" to="/doe">
              <font-awesome-icon icon="fa-solid fa-file" style="color:black" size="lg" />
              </router-link>
              <router-link class="nav-link py-3" to="/register">
              <font-awesome-icon icon="fa-solid fa-file" style="color:black" size="lg" />
              </router-link>
              <router-link class="nav-link py-3" to="/reviewcv">
              <font-awesome-icon icon="fa-solid fa-file" style="color:black" size="lg" />
              </router-link>
              
              
          </nav>  
        </div>
  </div>
</template>

<script>
export default {
    name:"Navbar"
}
</script>

<style>
.sidebars{
  width: 60px;
  height: 100vh;

  position: absolute;
  top:0;
}

.sidebars .nav{
  margin-top:100px ;
}
</style>