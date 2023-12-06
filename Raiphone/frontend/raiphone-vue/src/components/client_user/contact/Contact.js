import swal from 'sweetalert';
import { minLength, required } from 'vuelidate/lib/validators';
import RegisterContactService from '@/services/RegisterContactService';
import VueJwtDecode from 'vue-jwt-decode';

export default {
  name: 'ContactComponent',
  data() {
    return {
      registerContactForm: {
        topic: null,
        message: null,
      },
      isSubmitted: false,
    };
  },
  validations: {
    registerContactForm: {
      topic: { required },
      message: { required },
    },
  },
  methods: {
    registerSubmitContactForm() {},

    async submitRegisterContact() {
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

        await RegisterContactService.registerNewContact(this.registerContactForm);
        this.$router.push('/home');
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
