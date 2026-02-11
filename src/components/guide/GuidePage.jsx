import React from 'react';
import GuideSectionImage from './GuideSectionImage';

const GuidePage = ({ title, sections }) => {
  return (
    <main className="w-full bg-white">
      {title ? <h1 className="sr-only">{title}</h1> : null}
      <div className="mx-auto w-full max-w-[1600px]">
        {sections.map((section) => (
          <GuideSectionImage
            key={section.src}
            src={section.src}
            alt={section.alt}
            caption={section.caption}
          />
        ))}
      </div>
    </main>
  );
};

export default GuidePage;
