/* eslint-disable react/no-array-index-key */
import RootLayout from '@/Layouts/RootLayout';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const PCBuilder = () => {
  const category = ['processor', 'motherboard', 'RAM', 'powersupply', 'monitor'];

  const { buildItem } = useSelector((state) => state?.pcBuilder);
  // console.log(buildItem.length);
  const isButtonDisable = buildItem.length >= 5;
  // console.log(isButtonDisable);
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        {category.map((cate, i) => {
          const product = buildItem.filter((item) => item.category === cate);

          return (
            <div key={i} className="border-b flex justify-between items-center p-4">
              {product.length ? (
                product.map((productItem, index) => {
                  return (
                    <div key={productItem.id + index} className="flex justify-between w-full">
                      <div className="flex items-center">
                        <Image
                          priority
                          height={64}
                          width={64}
                          alt="team"
                          className="bg-gray-100 object-cover object-center flex-shrink-0 rounded-md mr-4"
                          src={productItem.image}
                        />
                        <div>
                          <h2 className="font-medium capitalize">{cate}</h2>
                          <p>{productItem.name}</p>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <p className="font-bold text-xl mr-16">{productItem.price} TK.</p>
                      </div>
                    </div>
                  );
                })
              ) : (
                <>
                  <div className="flex items-center">
                    <Image
                      priority
                      alt="team"
                      height={64}
                      width={64}
                      className="bg-gray-100 object-cover object-center flex-shrink-0 rounded-md mr-4"
                      src="https://dummyimage.com/80x80"
                    />
                    <div>
                      <h2 className="font-medium capitalize">{cate}</h2>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Link
                      href={`/pc_builder/choose/${cate.split(' ').join('')}`}
                      className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                    >
                      Select
                    </Link>
                  </div>
                </>
              )}
            </div>
          );
        })}
        <div className="text-right mt-10">
          <button
            disabled={!isButtonDisable}
            // eslint-disable-next-line no-alert
            onClick={() => alert('Congratulations.. You have successfully build your own PC')}
            type="button"
            className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg disabled:bg-indigo-300"
          >
            Complete Build
          </button>
        </div>
      </div>
    </section>
  );
};

export default PCBuilder;

PCBuilder.getLayout = (page) => {
  return <RootLayout>{page}</RootLayout>;
};
