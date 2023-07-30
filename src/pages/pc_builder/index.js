import RootLayout from '@/Layouts/RootLayout';

const PCBuilder = () => {
  return (
    <div>
      <h1>Build</h1>
    </div>
  );
};

export default PCBuilder;
PCBuilder.getLayout = (page) => {
  return <RootLayout>{page}</RootLayout>;
};
