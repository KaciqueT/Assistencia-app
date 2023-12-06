const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
  nome: { type: String, required: true },
  valor: { type: String, required: true },
  descricao: { type: String, required: false },
  estoque: { type: String, required: true },
}, {
  timestamps: true,
  collection: 'products',
});



const Product = mongoose.model('Product', productSchema);

module.exports = Product;
