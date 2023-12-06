<template>
  <div>
    <nav class="navbar navbar-expand-lg " id="navbar">
      <div class="container">
        <a class="navbar-brand" @click="$router.push('/admin')">RAIPHONE</a>
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
          <div class="col-md-12 bg-sucess">
            <ul class="list-group">
              <div>
            <form class="text-center border border-primary p-2" style="margin-top: 10px; height: auto; padding-top: 50px !important" v-on:submit.prevent="registerSubmitEmployeeUserForm()">
              <!--INÍCIO BLOCO: Nome-->
              <div class="form-group">
                <input type="text" id="name" name="name" class="form-control " placeholder="Inclua o nome do funcionário" v-model="registerEmployeeForm.name" :class="{'is-invalid': isSubmitted && $v.registerEmployeeForm.name.$error,}"/>
                <div v-if="isSubmitted && !$v.registerEmployeeForm.name.required" class="invalid-feedback"> O campo nome é obrigatório!</div>
              </div>
              <!--FIM BLOCO: Nome-->
              <!--INÍCIO BLOCO: E-mail-->
              <div class="form-group">
                <input type="email" id="email" name="email" class="form-control " placeholder="Inclua o e-mail do funcionário" v-model="registerEmployeeForm.email" :class="{'is-invalid': isSubmitted && $v.registerEmployeeForm.email.$error,}"/>
                <div v-if="isSubmitted && !$v.registerEmployeeForm.email.$error" class="invalid-feedback">
                  <span v-if="!$v.registerEmployeeForm.email.required">O campo e-mail é obrigatório!</span>
                  <span v-if="!$v.registerEmployeeForm.email.email">E-mail inválido!</span>
                </div>
              </div>
              <div class="form-group">
                <input type="text" id="documento" documento="documento" class="form-control " placeholder="Inclua o documento do funcionário" v-model="registerEmployeeForm.documento" :class="{'is-invalid': isSubmitted && $v.registerEmployeeForm.documento.$error,}"/>
                <div v-if="isSubmitted && !$v.registerEmployeeForm.documento.required" class="invalid-feedback"> O campo documento é obrigatório!</div>
              </div>
              <div class="form-group">
                <input type="text" id="cargo" cargo="cargo" class="form-control " placeholder="Inclua o cargo do funcionário" v-model="registerEmployeeForm.cargo" :class="{'is-invalid': isSubmitted && $v.registerEmployeeForm.cargo.$error,}"/>
                <div v-if="isSubmitted && !$v.registerEmployeeForm.cargo.required" class="invalid-feedback"> O campo cargo é obrigatório!</div>
              </div>
              <!--FIM BLOCO: E-mail-->
              <!--INÍCIO BLOCO: Password-->
              <div class="form-group">
                <input type="password" id="password" name="password" class="form-control " placeholder="Inclua uma senha padrão" v-model="registerEmployeeForm.password" :class="{'is-invalid': isSubmitted && $v.registerEmployeeForm.password.$error,}"/>
                <div v-if="isSubmitted && $v.registerEmployeeForm.password.$error" class="invalid-feedback">
                  <span v-if="!$v.registerEmployeeForm.password.required">O campo senha é obrigatório!</span>
                  <span v-if="!$v.registerEmployeeForm.password.minLength">A senha deve conter pelo menos 6 caracteres!</span>
                </div>
              </div>
              <!--FIM BLOCO: Password-->
              <!--INÍCIO BLOCO: Botão-->
              <center>
                <button @click="submitRegisterEmployeeUser && $router.push('/admin')" class="btn btn-block w-75 my-4" id="navbar">Cadastrar Funcionário</button>
              </center>
              <!--FIM BLOCO: Botão-->
            </form>
          </div>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script src="./CadastroUsuario"></script>

<style src="" scoped>
#navbar {
  background-color: #0C0074 !important;
  color: white !important;
}
</style>
