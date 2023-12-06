import swal from 'sweetalert';
import Api from './Api';

export default {
  /**
   * Método responsável por criar um novo Registro de Usuário (new Register Contact)
   * (POST): localhost:3000/api/v1/registerContact
   */
  async registerNewContact(NewContact) {
    try {
      const response = await Api().post('/registerContact', NewContact);
      swal({
        title: 'Excelente!',
        text: 'Mensagem de contato enviada com sucesso!',
        icon: 'success',
      });
    } catch (error) {
      swal({
        title: 'Oops!',
        text: 'Alguma coisa deu errado aqui!',
        icon: 'error',
      });
    }
  },

  async findMyCalls() {
    const calls = await Api().get('/userCalls');
    return (calls);
  },
};
