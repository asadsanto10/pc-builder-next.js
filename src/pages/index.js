import RootLayout from '@/Layouts/RootLayout';
import Product from '@/components/Product/Product';
import 'flowbite';
import Head from 'next/head';

const HomePage = ({ products }) => {
  const featuredProduct = products?.filter((product) => product.featured && product);

  return (
    <>
      <Head>
        <title>PC-Builder</title>
      </Head>
      <Product products={featuredProduct} />
    </>
  );
};

export default HomePage;

HomePage.getLayout = (page) => {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.API_URL}/products`);
  const data = await res.json();

  return {
    props: {
      products: data,
    },
    revalidate: 30,
  };
};
