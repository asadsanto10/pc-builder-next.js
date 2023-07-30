import Head from 'next/head';

import RootLayout from '@/Layouts/RootLayout';
import Product from '@/components/Product/Product';

const CategoryProduct = ({ products }) => {
  return (
    <div>
      <Head>
        <title>PC-Builder</title>
      </Head>
      <Product products={products} />
    </div>
  );
};

export default CategoryProduct;

CategoryProduct.getLayout = (page) => {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.API_URL}/products`);
  const products = await res.json();
  const paths = products?.map((product) => ({
    params: { categoryName: product.category.toString() },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(`${process.env.API_URL}/products?category=${params.categoryName}`);
  const data = await res.json();
  return {
    props: {
      products: data,
    },
    revalidate: 30,
  };
};
