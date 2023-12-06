const express = require('express');

const router = express.Router();
const auth = require('../middlewares/auth');
const userController = require('../controllers/user.controller');

// ==> Rota responsável por Criar um novo 'User': (POST): localhost:3000/api/v1/register
router.post('/register', userController.registerNewUser);
// ==> Rota responsável por Criar um novo 'UserEmployee': (POST): localhost:3000/api/v1/registerEmployee
router.post('/registerEmployee', userController.registerNewUserEmployee);
// ==> Rota responsável por realizar um novo login 'User': (POST): localhost:3000/api/v1/login
router.post('/login', userController.loginUser);
// ==> Rota responsável por retornar o perfil/profile do 'User': (GET): localhost:3000/api/v1/userProfile
router.get('/userProfile', auth, userController.returnUserProfile);
// ==> Rota responsável por retornar os chamados: (GET): localhost:3000/api/v1/userCalls
router.get('/userCalls', userController.returnCalls);
// ==> Rota responsável por criar um novo chamado do usuário: (POST): localhost:3000/api/v1/registerNewContact
router.post('/registerContact', userController.registerNewContact);
// ==> Rota responsável por criar um novo produto: (POST): localhost:3000/api/v1/registerNewProduct
router.post('/registerProduct', userController.registerNewProduct);
// ==> Rota responsável por criar um novo produto: (POST): localhost:3000/api/v1/registerNewProduct
router.get('/products', userController.returnProducts);
module.exports = router;
