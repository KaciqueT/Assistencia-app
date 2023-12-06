<template>
  <div>
    <nav class="navbar navbar-expand-lg " id="navbar">
      <div class="container">
        <a class="navbar-brand" @click="$router.push('/home')">RAIPHONE</a>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" @click="logOutUser">SAIR</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <section>
      <div class="container mt-5">
        <div class="row">
          <div class="col-md-12">
            <ul class="list-group">
              <li class="list-group-item">Name: {{ user.name }}</li>
              <li class="list-group-item">E-mail: {{ user.email }}</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script src="./MyShopping.js"></script>

<style src="" scoped>
#navbar {
  background-color: #0C0074 !important;
}
</style>
