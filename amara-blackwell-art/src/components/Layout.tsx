import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Header from './Header';
import Hero from './Hero';
import Footer from './Footer';

const Layout = ({ children }: any) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data?.siteTitle} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
