import React from 'react';

type TitleProps = { title: string; size?: string; color?: string };

function SectionTitle({ title, size, color }: TitleProps) {
  return (
    <h3
      className={`${color ? color : ' text-blue-900'} ${
        size ? size : 'text-7xl'
      } emberly-bold`}
    >
      {title}
    </h3>
  );
}

export default SectionTitle;
