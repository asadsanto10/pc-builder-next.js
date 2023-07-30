/* eslint-disable react/no-array-index-key */
import RootLayout from '@/Layouts/RootLayout';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const PCBuilder = () => {
  const category = ['processor', 'motherboard', 'RAM', 'power supply', 'monitor'];

  const { buildItem } = useSelector((state) => state?.pcBuilder);
  console.log({ buildItem });

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        {category.map((cate, i) => (
          <div key={i} className="border-b flex justify-between items-center p-4">
            <div className="flex items-center">
              <img
                alt="team"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-md mr-4"
                src="https://dummyimage.com/80x80"
              />
              <div>
                <h2 className="font-medium">{cate}</h2>
                <p>adsadasd asd asd sadas</p>
              </div>
            </div>
            <div className="flex items-center">
              <p className="font-bold text-xl mr-16">7,000 TK.</p>
              <Link
                href={`/pc_builder/choose/${cate.split(' ').join('')}`}
                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Select
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PCBuilder;
PCBuilder.getLayout = (page) => {
  return <RootLayout>{page}</RootLayout>;
};
