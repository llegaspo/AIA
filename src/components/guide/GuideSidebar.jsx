import React from 'react';

const defaultSections = [
  {
    title: 'Our Brand',
    items: [
      { label: 'Welcome', active: false },
      { label: 'Contents', active: false },
      { label: 'Our Purpose', active: false },
      { label: 'Our Personality', active: false },
      { label: 'Our Tone of Voice', active: false },
      { label: 'Cultural Guidance', active: false },
    ],
  },
  {
    title: 'Our Identity',
    items: [{ label: 'Our Logos', active: false }],
  },
  {
    title: 'Visual Elements',
    items: [
      { label: 'Colours', active: false },
      { label: 'Typography', active: false },
      { label: 'Moving Mountains', active: false },
      { label: 'Photography', active: false },
      { label: 'Illustration', active: false },
      { label: 'Iconography', active: false },
    ],
  },
  {
    title: 'Applications',
    items: [
      { label: 'Digital', active: false },
      { label: 'Print', active: false },
      { label: 'Merchandise', active: false },
    ],
  },
  {
    title: 'AIA One Billion',
    items: [],
  },
  {
    title: 'AIA Vitality',
    items: [],
  },
  {
    title: 'High Net Worth',
    items: [],
  },
  {
    title: 'Brand Checklist',
    items: [],
  },
  {
    title: 'Assets',
    items: [],
  },
];

const GuideSidebar = ({ sections = defaultSections, activeLabel = null }) => {
  const resolvedSections = sections.map((section) => ({
    ...section,
    items: section.items.map((item) => ({
      ...item,
      active: activeLabel ? item.label === activeLabel : item.active,
    })),
  }));

  return (
    <aside className="w-[220px] shrink-0 border-r border-aia-red/20 pl-6 pr-4 pt-10 pb-8 text-[11px] leading-tight text-aia-charcoal">
      <div className="flex items-center gap-2 mb-6">
        <img src="/assets/assets/logo_cropped.png" alt="AIA" className="h-10 w-auto logo-clean" />
        <div className="text-[10px] uppercase tracking-widest text-aia-red">
          <div>Healthier, Longer,</div>
          <div>Better Lives</div>
        </div>
      </div>

      <nav className="space-y-6">
        {resolvedSections.map((section) => (
          <div key={section.title}>
            <div className="font-bold uppercase tracking-widest text-[10px] text-aia-charcoal/70">
              {section.title}
            </div>
            {section.items.length > 0 ? (
              <ul className="mt-2 space-y-1">
                {section.items.map((item) => (
                  <li
                    key={item.label}
                    className={
                      item.active
                        ? 'text-aia-red font-semibold'
                        : 'text-aia-charcoal/70'
                    }
                  >
                    {item.label}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default GuideSidebar;
