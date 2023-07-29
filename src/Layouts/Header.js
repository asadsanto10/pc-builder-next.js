import Image from 'next/image';
import Link from 'next/link';
/* eslint-disable jsx-a11y/label-has-associated-control */
const Header = () => {
  return (
    <nav className="bg-indigo-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="./" className="flex items-center">
          <Image
            src="https://cdn3d.iconscout.com/3d/premium/thumb/computer-3711649-3105370.png"
            width={50}
            height={50}
            className="mr-3"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Pc Builder
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <button
                type="button"
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-2 md:w-auto"
              >
                categories{' '}
                <svg
                  className="w-2.5 h-2.5 ml-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {/* Dropdown menu */}
              <div
                id="dropdownNavbar"
                className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      CPU / Processor
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Motherboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      RAM
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Power Supply Unit
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Storage Device
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Monitor
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Others
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 pl-3 pr-4 bg-indigo-500 text-gray-50 rounded hover:bg-indigo-300 md:border-0 md:hover:text-blue-700 md:p-2"
              >
                PC Builder
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
