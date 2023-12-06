const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { Schema } = mongoose;

const userEmployeeSchema = new Schema({
  name: { type: String, maxlength: 50, required: true },
  email: { type: String, maxlength: 30, required: true },
  documento:{ type: String, maxlength: 30, required: true},
  cargo:{ type: String, maxlength: 30, required: true},
  password: { type: String, required: true },
  tokens: [
    {
      token: { type: String, required: true },
    },
  ],
}, {
  timestamps: true,
  collection: 'employees',
});

// ==> Esse método irá fazer o 'hash' da senha antes de salvar o modelo da classe 'User'
userEmployeeSchema.pre('save', async function (next) {
  const userEmployee = this;
  if (userEmployee.isModified('password')) {
    userEmployee.password = await bcrypt.hash(userEmployee.password, 8);
  }
  next();
});

// ==> Esse método irá criar (gerar) uma autenticação auth para o 'User'
userEmployeeSchema.methods.generateAuthToken = async function () {
  const userEmployee = this;
  const token = jwt.sign({ _id: userEmployee._id, name: userEmployee.name, email: userEmployee.email, documento: userEmployee.documento, cargo: userEmployee.cargo }, 'secret');
  userEmployee.tokens = userEmployee.tokens.concat({ token });
  await userEmployee.save();
  return token;
};

// ==> Esse método irá fazer uma pesquisa por um 'user' por 'email' e 'password'
userEmployeeSchema.statics.findByCredentials = async (email, password) => {
  const userEmployee = await UserEmployee.findOne({ email });
  console.log(userEmployee);
  if (!userEmployee) {
    throw new Error({ error: 'Login inválido!' });
  }
  const isPasswordMatch = await bcrypt.compare(password, userEmployee.password);
  if (!isPasswordMatch) {
    throw new Error({ error: 'Login inválido!' });
  }
  return userEmployee;
};

const UserEmployee = mongoose.model('UserEmployee', userEmployeeSchema);

module.exports = UserEmployee;
