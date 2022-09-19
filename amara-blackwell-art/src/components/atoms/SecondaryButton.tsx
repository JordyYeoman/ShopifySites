import { Link } from 'gatsby';
import React from 'react';

const SecondaryButton = ({
  buttonText,
  buttonLink,
}: {
  buttonText: string;
  buttonLink: string;
}) => {
  return (
    <>
      <Link
        className='bg-blue-600 rounded-lg tracking-wider text-white hover:bg-blue-700 transition duration-300 text-sm mt-4 py-1 px-4'
        to={buttonLink}
      >
        {buttonText}
      </Link>
    </>
  );
};

export default SecondaryButton;
