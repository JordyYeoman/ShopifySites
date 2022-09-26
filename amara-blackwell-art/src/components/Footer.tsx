import { Link } from "gatsby";
import React from "react";

function Footer() {
  return (
    <footer className="p-4 bg-white shadow md:px-6 md:py-8 dark:bg-gray-900 relative">
      <div className="sm:flex sm:items-center sm:justify-between max-w-[1920px] mx-auto">
        <div className="relative w-full sm:w-4 h-4 pt-2 md:pt-0">
          <Link
            className="footer-logo h-24 md:-top-2 w-32 bg-white -mt-8 py-4 absolute right-0 sm:right-auto sm:left-0 rounded-b-sm z-10 flex flex-col items-center justify-center"
            to="/"
          >
            <div className="text-3xl font-bold uppercase emberly-black tracking-wider border-b-2 border-grey-200 pb-0 mb-0">
              Amara
            </div>
            <div className="block tracking-widest text-md pt-1 emberly-light tracking-widest font-bold uppercase letter-spacing">
              Blackwell
            </div>
          </Link>
        </div>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8 max-w-[1920px]" />
      <span className="block text-sm text-gray-500 font-bold sm:text-center dark:text-gray-400">
        © {new Date().getFullYear()} &middot; Built by
        {` `}
        <span className="hover:underline text-white font-bold cursor-pointer">
          YeomanIndustries
        </span>
      </span>
      <BuyMeABeer />
    </footer>
  );
}

export default Footer;

const BuyMeABeer = () => {
  return (
    <div className="flex items-end justify-end absolute bottom-0 right-0 mb-4 mr-4 z-10">
      <div>
        <a
          title="Buy me a beer"
          href="https://www.buymeacoffee.com/jordyyeoman"
          target="_blank"
          className="block w-14 h-14 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
        >
          <img
            className="object-cover object-center w-full h-full rounded-full"
            src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg"
          />
        </a>
      </div>
    </div>
  );
};
