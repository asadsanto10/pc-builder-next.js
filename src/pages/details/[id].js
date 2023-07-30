/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/label-has-associated-control */
import Head from 'next/head';
import Image from 'next/image';

import RootLayout from '@/Layouts/RootLayout';

const ProductDetails = ({ product }) => {
  return (
    <section className="text-gray-600 body-font">
      <Head>
        <title>{product?.name}</title>
      </Head>
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 flex justify-center items-center">
          <Image
            className="object-cover object-center rounded"
            priority
            width={228}
            height={228}
            src={product?.image}
            alt="product image"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            {product?.name}
          </h1>
          <div className="mt-3">
            <span className="bg-orange-100 text-orange-800 font-semibold mr-2  p-3 rounded-full text-sm">
              Price: {product?.price} TK
            </span>

            <span className="bg-indigo-100 text-indigo-800 font-semibold mr-2  p-3 rounded-full text-sm">
              Ctaegory: {product?.category}
            </span>

            <span
              className={`${
                product?.status ? 'bg-green-100 text-green-800 ' : 'bg-red-100 text-red-800'
              } font-semibold mr-2  p-3 rounded-full text-sm`}
            >
              Status: {product?.status ? 'In Stock' : 'Out of stock'}
            </span>
          </div>

          <p className="mb-8 leading-relaxed mt-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis soluta aliquam
            natus harum doloribus, autem, est officiis sint temporibus doloremque vitae ipsum
            placeat excepturi quasi, quos veniam facere numquam hic.
          </p>

          <h2 className="font-semibold text-base">Key Features:</h2>
          <p>Model: lorem</p>
          <p>Display: lorem</p>
          <p>Ports: lorem</p>
          <p>Features: lorem</p>
          <div className="flex items-center mt-2.5 mb-5">
            <h1 className="font-medium text-indigo-600">Rating:</h1>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              {product?.rating || 4}
            </span>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <form>
          <div className="mb-8">
            <div>
              <label htmlFor="commnets" className="leading-7 text-sm text-gray-600">
                Write something here
              </label>
              <textarea
                rows={5}
                placeholder="write here..."
                id="commnets"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                name="description"
                defaultValue={''}
              />
            </div>
            <button
              type="submit"
              className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Submit
            </button>
            <div className="mt-5" />
          </div>
        </form>
        <div className="flex justify-center align-middle border-t py-4">
          <img
            alt="blog"
            src="https://dummyimage.com/104x104"
            className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
          />
          <span className="flex-grow flex flex-col pl-4">
            <span className="title-font font-medium text-gray-900">Nice Product</span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
ProductDetails.getLayout = (page) => {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.API_URL}/products`);
  const products = await res.json();
  const paths = products?.map((product) => ({
    params: { id: product.id.toString() },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(`${process.env.API_URL}/products/${params.id}`);

  const data = await res.json();
  return {
    props: {
      product: data,
    },
    revalidate: 30,
  };
};
