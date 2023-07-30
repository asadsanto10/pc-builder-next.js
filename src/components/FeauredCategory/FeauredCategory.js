/* eslint-disable react/no-array-index-key */
import Link from 'next/link';

const FeauredCategory = () => {
  const category = ['processor', 'motherboard', 'RAM', 'power supply', 'monitor'];

  return (
    <div className="flex justify-center">
      {category.map((cate, i) => (
        <Link
          key={i}
          href={`/product/${cate.split(' ').join('')}`}
          className="text-white bg-indigo-700 hover:bg-indigo-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 capitalize"
        >
          {cate}
        </Link>
      ))}
    </div>
  );
};

export default FeauredCategory;
