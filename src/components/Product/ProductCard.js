import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ product }) => {
  return (
    <Link href="#">
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-center">
          <Image
            priority
            width={228}
            height={228}
            className="p-8 rounded-t-lg"
            src={product?.image}
            alt="product image"
          />
        </div>

        <div className="px-5 pb-5">
          <span className="bg-blue-100 capitalize text-blue-800 text-xs font-medium mb-10 p-1.5 rounded">
            {product?.category}
          </span>

          <h5 className="mt-1 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {product?.name}
          </h5>

          <div className="flex items-center mt-2.5 mb-5">
            <h1 className="font-medium text-indigo-600">Rating:</h1>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              {product.rating}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              {product?.price} Tk.
            </span>
            <span
              className={`${
                product?.status ? 'bg-green-100 text-green-800 ' : 'bg-red-100 text-red-800 '
              }text-xs font-medium mr-2 p-1.5 rounded`}
            >
              {product?.status ? 'In Stock' : 'Out of stock'}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
