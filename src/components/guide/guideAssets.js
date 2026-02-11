export const pageImage = (pageNumber) => {
  const padded = String(pageNumber).padStart(3, '0');
  return `/guide/pages/page_${padded}.png`;
};
