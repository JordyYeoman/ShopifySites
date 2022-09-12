import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Search from "../assets/icons/Search.svg"

const navigationLinks = [
  {
    title: "Shop",
    url: "/",
  },
  {
    title: "Sale",
    url: "/",
  },
  {
    title: "About",
    url: "/",
  },
  {
    title: "Contact",
    url: "/",
  },
]

type NavigationLink = {
  title: string
  url: string
}

const Header = () => (
  <div className="w-full bg-blue-200 border-b-4 border-white">
    <div className="flex items-center justify-between relative h-24 px-8 mx-auto max-w-screen-2xl">
      <div className="h-auto w-auto">
        {navigationLinks.map((el: NavigationLink) => {
          return (
            <Link key={el?.title} className="p-4" to={el?.url}>
              {el?.title}
            </Link>
          )
        })}
      </div>
      <Link
        className="absolute h-full w-32 bg-red-200 left-1/2 -ml-16 flex flex-col items-center justify-center"
        to="/"
      >
        <div className="text-2xl font-bold uppercase font-serif border-b-2 border-grey-200 pb-0 mb-0">
          Amara
        </div>
        <div className="tracking-widest text-xs pt-1 font-bold uppercase letter-spacing">
          Blackwell
        </div>
      </Link>
      <Search className="h-6 w-6 stroke-slate-50" />
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Amara Blackwell Arts`,
}

export default Header
