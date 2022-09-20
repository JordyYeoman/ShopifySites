import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import GumtreeLeaves from "../assets/icons/Gumtree-leaves.svg";
import { useState } from "react";
import SearchInputField from "./atoms/SearchInputField";

const navigationLinks = [
  {
    title: "Shop",
    url: "/",
  },
  // {
  //   title: 'Sale',
  //   url: '/',
  // },
  {
    title: "About",
    url: "/",
  },
  {
    title: "Contact",
    url: "/",
  },
];

type NavigationLink = {
  title: string;
  url: string;
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <div className="w-full">
      <div
        className={`flex items-center justify-between relative h-12 md:h-24 px-8 mx-auto max-w-screen-2xl relative`}
      >
        <div className="hidden md:block">
          <NavigationLinks navLinks={navigationLinks} />
        </div>
        <Link
          className="absolute h-full w-32 mt-2 h-20 rounded-sm md:mt-0 z-10 left-1/2 -ml-16 flex flex-col items-center justify-center"
          to="/"
        >
          <div className="text-3xl font-bold uppercase emberly-black tracking-wider md:border-b-2 md:border-grey-200 pb-0 mb-0">
            Amara
          </div>
          <div className="hidden md:block tracking-widest text-md pt-1 emberly-light tracking-widest font-bold uppercase letter-spacing">
            Blackwell
          </div>
        </Link>
        <div className="block md:hidden">
          <div className="w-8 h-8">
            <HamburgerMenu open={menuOpen} toggle={setMenuOpen} />
          </div>
          <SlideOutMenu navLinks={navigationLinks} open={menuOpen} />
        </div>
        <GumtreeLeavesOverlay />
        <div className="hidden md:block">
          <SearchInputField />
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: `Amara Blackwell Arts`,
};

export default Header;

const SlideOutMenu = ({
  navLinks,
  open,
}: {
  navLinks: any[];
  open: boolean;
}) => {
  return (
    <div
      className={`p-4 flex flex-col items-center mt-12 top-0 w-full absolute bg-white transition duration-300 ${
        open
          ? "left-0 opacity-100 z-20"
          : "-left-full opacity-0 pointer-events-none"
      }`}
    >
      <NavigationLinks navLinks={navLinks} />
      <div className="block md:hidden pt-4 pb-2">
        <SearchInputField />
      </div>
    </div>
  );
};

const NavigationLinks = ({ navLinks }: { navLinks: any[] }) => {
  return (
    <div className="h-auto w-auto emberly-light tracking-widest font-bold uppercase letter-spacing">
      {navLinks.map((el: NavigationLink) => {
        return (
          <Link
            key={el?.title}
            className="mx-4 border-transparent transition duration-300 pb-0 border-b-2 hover:border-slate-200"
            to={el?.url}
          >
            {el?.title}
          </Link>
        );
      })}
    </div>
  );
};

const HamburgerMenu = ({
  open,
  toggle,
}: {
  open: boolean;
  toggle: Function;
}) => {
  return (
    <button
      className={`bg-transparent border-none cursor-pointer flex p-0 ${
        open ? "opened" : ""
      }`}
      onClick={() => {
        console.log("CLICKED");
        toggle(!open);
      }}
      aria-expanded={open ? "true" : "false"}
      aria-label="Main Menu"
    >
      <svg width="100%" height="100%" viewBox="0 0 100 100">
        <path
          className="line line1"
          d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
        />
        <path className="line line2" d="M 20,50 H 80" />
        <path
          className="line line3"
          d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
        />
      </svg>
    </button>
  );
};

const GumtreeLeavesOverlay = () => {
  return (
    <div className="absolute top-0 left-0 absolute w-full h-full pointer-events-none">
      <div className="relative w-full h-full">
        <GumtreeLeaves className="absolute -top-4 -right-0 w-28 h-28 opacity-[5%]" />
        <GumtreeLeaves className="absolute -top-4 left-0 w-28 h-28 opacity-[5%] scale-x-[-1]" />
      </div>
    </div>
  );
};
