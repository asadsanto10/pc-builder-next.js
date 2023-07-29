import ProductCard from './ProductCard';

const FeatureProduct = ({ featuredProduct }) => {
  return (
    <div className="container mx-auto mt-10">
      <div className="text-center mb-5">
        <h1 className="text-4xl font-bold">Featured Products</h1>
        <p className="text-lg font-normal">Check & Get Your Desired Product!</p>
      </div>
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
        {featuredProduct?.map(
          (product) => product.featured && <ProductCard key={product.id} product={product} />
        )}
      </div>
    </div>
  );
};

export default FeatureProduct;
