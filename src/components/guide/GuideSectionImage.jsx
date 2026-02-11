import React from 'react';

const GuideSectionImage = ({ src, alt, caption }) => {
  return (
    <figure className="w-full">
      <img
        src={src}
        alt={alt}
        className="block w-full h-auto"
        loading="lazy"
        decoding="async"
      />
      {caption ? <figcaption className="sr-only">{caption}</figcaption> : null}
    </figure>
  );
};

export default GuideSectionImage;
