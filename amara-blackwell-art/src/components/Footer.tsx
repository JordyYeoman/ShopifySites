import React from "react";

function Footer() {
  return (
    <footer className="p-4 bg-white shadow md:px-6 md:py-8 dark:bg-gray-900">
      <div className="sm:flex sm:items-center sm:justify-between max-w-[1920px] mx-auto">
        <a
          href="https://flowbite.com/"
          className="flex items-center mb-4 sm:mb-0"
        >
          {/* <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-8" alt="Flowbite Logo"> */}
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            AmaraBlackwellArt
          </span>
        </a>
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
    </footer>
  );
}

export default Footer;
