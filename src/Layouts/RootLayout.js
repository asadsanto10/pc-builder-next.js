import Header from './Header';

const RootLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      {/* <h1>Footer</h1> */}
    </>
  );
};

export default RootLayout;
