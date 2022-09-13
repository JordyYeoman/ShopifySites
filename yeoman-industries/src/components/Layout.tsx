import * as React from 'react';
import { Link } from 'gatsby';

const Layout = ({
  pageTitle,
  children,
}: {
  pageTitle: string;
  children: any;
}) => {
  return (
    <div>
      <NavigationBar />
      <main>{children}</main>
    </div>
  );
};
export default Layout;

const NavigationBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};
