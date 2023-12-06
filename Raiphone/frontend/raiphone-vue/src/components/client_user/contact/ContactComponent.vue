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
            <h1 class="text-center">ENTRE EM CONTATO</h1>
            <form v-on:submit.prevent="registerSubmitContactForm()">
              <div class="form-group">
                <input type="text" id="topic" name="topic" placeholder="Insira o assunto" class="w-100 mt-5" v-model="registerContactForm.topic" :class="{'is-invalid': isSubmitted && $v.registerContactForm.topic.$error}"/>
                <div v-if="isSubmitted && !$v.registerContactForm.topic.required" class="invalid-feedback">O campo assunto é obrigatório!</div>
              </div>
              <div class="form-group">
                <input type="text" id="message" name="message" placeholder="Insira a mensagem" class="w-100 p-5"  v-model="registerContactForm.message"/>
                <div v-if="isSubmitted && !$v.registerContactForm.message.required" class="invalid-feedback">O campo mensagem é obrigatório!</div>
              </div>
              <center>
                <button @click="submitRegisterContact" class="btn btn-primary btn-block my-4" id="navbar">Cadastrar</button>
              </center>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script src="./Contact.js"></script>

<style src="" scoped>
#navbar {
  background-color: #0C0074 !important;
}
</style>
