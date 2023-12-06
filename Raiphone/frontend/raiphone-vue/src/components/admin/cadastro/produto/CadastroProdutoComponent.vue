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
            <form class="text-center border border-primary p-2" style="margin-top: 10px; height: auto; padding-top: 50px !important" v-on:submit.prevent="registerSubmitProductForm()">
              <!--INÍCIO BLOCO: Nome-->
              <div class="form-group">
                <input type="text" id="nome" name="nome" class="form-control " placeholder="Inclua o nome do produto" v-model="registerProductForm.nome" :class="{'is-invalid': isSubmitted && $v.registerProductForm.nome.$error,}"/>
                <div v-if="isSubmitted && !$v.registerProductForm.nome.required" class="invalid-feedback"> O campo nome é obrigatório!</div>
              </div>
              <!--FIM BLOCO: Nome-->
              <div class="form-group">
                <input type="text" id="valor" name="valor" class="form-control " placeholder="Inclua o valor do produto" v-model="registerProductForm.valor" :class="{'is-invalid': isSubmitted && $v.registerProductForm.valor.$error,}"/>
                <div v-if="isSubmitted && !$v.registerProductForm.valor.$error" class="invalid-feedback">
                  <span v-if="!$v.registerProductForm.valor.required">O campo valor é obrigatório!</span>
                </div>
              </div>
              <div class="form-group">
                <input type="text" id="descricao" name="descricao" class="form-control " placeholder="Inclua a descrição do produto" v-model="registerProductForm.descricao"/>
              </div>
              <div class="form-group">
                <input type="text" id="estoque" name="estoque" class="form-control " placeholder="Inclua o estoque do produto" v-model="registerProductForm.estoque" :class="{'is-invalid': isSubmitted && $v.registerProductForm.estoque.$error,}"/>
                <div v-if="isSubmitted && !$v.registerProductForm.estoque.$error" class="invalid-feedback">
                  <span v-if="!$v.registerProductForm.estoque.required">O campo estoque é obrigatório!</span>
                </div>
              </div>
              <!--INÍCIO BLOCO: Botão-->
              <center>
                <button @click="submitRegisterProduct" class="btn btn-block w-75 my-4" id="navbar">Cadastrar Produto</button>
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
<script src="./CadastroProduto"></script>

<style src="" scoped>
#navbar {
  background-color: #0C0074 !important;
  color: white !important;
}
</style>
