import React from 'react';

function SectionDescription({
  description,
  color,
}: {
  description: string;
  color?: string;
}) {
  return <div className={`${color ? color : ''}`}>{description}</div>;
}

export default SectionDescription;
