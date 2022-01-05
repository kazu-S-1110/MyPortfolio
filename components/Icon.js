import React from 'react';
import { ReactSVG } from 'react-svg';

export const Icon = ({ src, link }) => {
  return (
    <ReactSVG
      src={src}
      className="svg"
      beforeInjection={(svg) => {
        svg.setAttribute('style', `width:40px ; `);
      }}
      href={link}
    />
  );
};
