import products from '../../../data.json';

const featuredProduct = (req, res) => {
  res.status(200).json({ status: 'success', products });
};

export default featuredProduct;
