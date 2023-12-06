import swal from 'sweetalert';
import { required } from 'vuelidate/lib/validators';
import RegisterProductService from '@/services/RegisterProductService';
import VueJwtDecode from 'vue-jwt-decode';

export default {
  name: 'CadastroProdutoComponent',
  data() {
    return {
      user: {},
      registerProductForm: {
        name: null,
        valor: null,
        descricao: null,
        estoque: null,
      },
      isSubmitted: false,
    };
  },
  validations: {
    registerProductForm: {
      nome: { required },
      valor: { required },
      estoque: { required },
    },
  },

  methods: {
    registerSubmitProductForm() {},

    async submitRegisterProduct() {
      try {
        this.isSubmitted = true;

        this.$v.$touch();
        if (this.$v.$invalid) {
          swal({
            title: 'Oops!',
            text: 'Você precisa incluir todos os campos obrigatórios',
            icon: 'error',
          });
          return;
        }
        await RegisterProductService.registerNewProduct(this.registerProductForm);
        this.$router.push('/admin');
      } catch (error) {
        swal({
          title: 'Oops!',
          text: 'Alguma coisa deu errado aqui!',
          icon: 'error',
        });
      }
    },
    getUser() {
      const token = localStorage.getItem('jwt');
      const tokenDecoded = VueJwtDecode.decode(token);
      this.user = tokenDecoded;
    },
    logOutUser() {
      localStorage.removeItem('jwt');
      this.$router.push('/');
    },
  },
};
