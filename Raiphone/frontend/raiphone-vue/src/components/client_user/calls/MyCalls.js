import VueJwtDecode from 'vue-jwt-decode';

export default {
  name: 'MyContactComponent',
  data() {
    return {
      user: {},
      contact: {
        _id: '',
        topic: '',
        message: '',
      },
    };
  },
  methods: {
    getCalls() {
      const contact = this.findMyCalls;
      console.log(this.findMyCalls());
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
  created() {
    this.getUser();
  },
};
