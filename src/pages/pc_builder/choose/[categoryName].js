import RootLayout from '@/Layouts/RootLayout';
import Product from '@/components/Product/Product';

const ChooseCategory = ({ products }) => {
  // console.log(products);
  return (
    <div>
      <Product products={products} />
    </div>
  );
};

export default ChooseCategory;

ChooseCategory.getLayout = (page) => {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async (context) => {
  const { params } = context;
  console.log({ params });
  const res = await fetch(`${process.env.API_URL}/products?category=${params.categoryName}`);
  const data = await res.json();
  return {
    props: {
      products: data,
    },
  };
};
