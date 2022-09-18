import { Link } from 'gatsby';
import React from 'react';

const DefaultButton = ({
  buttonText,
  buttonLink,
}: {
  buttonText: string;
  buttonLink: string;
}) => {
  return (
    <>
      <Link
        className='bg-blue-500 rounded-lg tracking-wider text-white font-bold mt-8 py-2 px-8'
        to={buttonLink}
      >
        {buttonText}
      </Link>
    </>
  );
};

export default DefaultButton;
