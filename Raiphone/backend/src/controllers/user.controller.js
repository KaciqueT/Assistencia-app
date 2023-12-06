const User = require("../models/user.model");
const UserEmployee = require("../models/userEmployee.model");
const Contact = require("../models/contact.model");
const Product = require("../models/product.model");

// ==> Usando conceito de Async e Await

// ==> Método responsável por Criar um novo 'User':
exports.registerNewUser = async (req, res) => {
  try {
    // => Antes vamos fazer uma verificação se o usuário já possui algum e-mail já cadastrado:
    const isUser = await User.find({ email: req.body.email });
    console.log(isUser);
    if (isUser.length >= 1) {
      return res
        .status(409)
        .json({ message: "Atenção! Este e-mail já possui registro!" });
    }

    const newUser = new User(req.body);
    const user = await newUser.save();
    const token = await newUser.generateAuthToken(); // ==> Aqui chamaremos o método que criamos no model
    return res
      .status(201)
      .json({ message: "Usuário(a) criado(a) com sucesso!", user, token });
  } catch (err) {
    return res.status(400).json({ err });
  }
};
// ==> Método responsável por Criar um novo 'User Employee':
exports.registerNewUserEmployee = async (req, res) => {
  try {
    // => Antes vamos fazer uma verificação se o usuário já possui algum e-mail já cadastrado:
    const isUserEmployee = await UserEmployee.find({ email: req.body.email });
    console.log(isUserEmployee);
    if (isUserEmployee.length >= 1) {
      return res
        .status(409)
        .json({ message: "Atenção! Este funcionário já possui registro!" });
    }

    const newUserEmployee = new UserEmployee(req.body);
    const userEmployee = await newUserEmployee.save();
    const token = await newUserEmployee.generateAuthToken(); // ==> Aqui chamaremos o método que criamos no model
    return res
      .status(201)
      .json({ message: "Funcionário(a) cadastrado(a) com sucesso!", userEmployee, token });
  } catch (err) {
    return res.status(400).json({ err });
  }
};

// ==> Método responsável por realizar um novo login 'User':
exports.loginUser = async (req, res) => {
  try {
    const { email } = req.body;
    const { password } = req.body;
    const user = await User.findByCredentials(email, password);
    if (!user) {
      return res.status(401).json({
        error: "Erro ao Logar! Verifique as suas credenciais de autenticação!",
      });
    }
    const token = await user.generateAuthToken();
    return res
      .status(201)
      .json({ message: "Usuário(a) logado com sucesso!", user, token });
  } catch (err) {
    return res.status(400).json({ err });
  }
};
// ==> Método responsável por Criar um novo chamado com ID do'User':
exports.registerNewProduct = async (req, res) => {
    const NewProduct = new Product(req.body);
    const product = await NewProduct.save()
    .then(doc => {
      console.log(doc)
      return res
      .status(201)
      .json({ message: "Produto criado com sucesso!" });
    })
    .catch(err => {
      console.error(err);
      return res.status(400).json({ err: 'Erro ao criar produto!' });
    })
};
// ==> Método responsável por Criar um novo chamado com ID do'User':
exports.registerNewContact = async (req, res) => {
    const NewContact = new Contact(req.body);
    const contact = await NewContact.save()
    .then(doc => {
      console.log(doc)
      return res
      .status(201)
      .json({ message: "Chamado criado com sucesso!" });
    })
    .catch(err => {
      console.error(err);
      return res.status(400).json({ err: 'aqui' });
    })
};
// ==> Método responsável por retornar um determinado 'User'
exports.returnUserProfile = async (req, res) => {
  await res.json(req.userData);
};
exports.returnProducts = async (req, res) => {
  try {
    const Productslist = await Product.find({});
    await res.json(Productslist);
    console.log(Productslist);
  } catch (error) {
      return res.status(400).json({message: 'Erro ao buscar produtos' });
  }
}
// ==> Método responsável por retornar chamados
exports.returnCalls = async (req, res) => {
  try {
    const userCallsData = await Contact.find();
    await res.json(userCallsData);
    console.log(userCallsData);
  } catch (error) {
    console.log(error);
  }
};
