import RootLayout from '@/Layouts/RootLayout';
import FeatureProduct from '@/components/FeaturedProduct/FeatureProduct';
import 'flowbite';
import Head from 'next/head';

const HomePage = ({ featuredProduct }) => {
  return (
    <>
      <Head>
        <title>PC-Builder</title>
      </Head>

      <FeatureProduct featuredProduct={featuredProduct} />
    </>
  );
};

export default HomePage;

HomePage.getLayout = (page) => {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.API_URL}/api/featuredProduct`);
  const data = await res.json();

  return {
    props: {
      featuredProduct: data,
    },
  };
};
