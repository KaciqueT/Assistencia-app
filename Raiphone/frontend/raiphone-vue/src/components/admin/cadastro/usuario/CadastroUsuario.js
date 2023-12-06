import swal from 'sweetalert';
import { minLength, required } from 'vuelidate/lib/validators';
import RegisterEmployeeService from '@/services/RegisterEmployeeService';
import VueJwtDecode from 'vue-jwt-decode';

export default {
  name: 'CadastroUsuarioComponent',
  data() {
    return {
      user: {},
      registerEmployeeForm: {
        name: null,
        email: null,
        cargo: null,
        documento: null,
        password: null,
      },
      isSubmitted: false,
    };
  },
  validations: {
    registerEmployeeForm: {
      name: { required },
      email: { required },
      cargo: { required },
      documento: { required },
      password: { required, minLength: minLength(6) },
    },
  },
  methods: {
    registerSubmitEmployeeUserForm() {},

    async submitRegisterEmployeeUser() {
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

        await RegisterEmployeeService.registerNewEmployeeUser(this.registerEmployeeForm);
        this.$router.push('/');
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
