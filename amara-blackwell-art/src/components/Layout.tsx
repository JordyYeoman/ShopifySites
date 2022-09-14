import * as React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Header from './Header';
import Hero from './Hero';

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
      <Header siteTitle={'Huh'} />
      <Hero />
      <main>{children}</main>
      <footer className='w-full bg-blue-200 h-32'>
        © {new Date().getFullYear()} &middot; Built by
        {` `}
        <a href='/'>Yeoman Industriessszzz</a>
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
