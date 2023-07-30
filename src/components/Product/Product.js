import { useRouter } from 'next/router';

import FeauredCategory from '../FeauredCategory/FeauredCategory';
import ProductCard from './ProductCard';

const Product = ({ products }) => {
  const router = useRouter();

  return (
    <div className="container mx-auto mt-10">
      {!router.query?.categoryName && (
        <>
          <div className="text-center mb-5">
            <h1 className="text-4xl font-bold">Featured Products</h1>
            <p className="text-lg font-normal">Check & Get Your Desired Product!</p>
          </div>
          <div className="mb-5">
            <FeauredCategory />
          </div>
        </>
      )}

      <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Product;
