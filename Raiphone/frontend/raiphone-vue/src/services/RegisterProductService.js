import swal from 'sweetalert';
import Api from './Api';

export default {
  /**
   * Método responsável por criar um novo produto (new Register Product)
   * (POST): localhost:3000/api/v1/registerProduct
   */
  async registerNewProduct(NewProduct) {
    try {
      const response = await Api().post('/registerProduct', NewProduct);
      swal({
        title: 'Excelente!',
        text: 'Produto criado com sucesso!',
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
};
