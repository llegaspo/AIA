import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const useScrollSpy = (sectionIds = [], initialId = null) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return undefined;

    if (!location.hash && initialId) {
      navigate(`${location.pathname}#${initialId}`, { replace: true });
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top));

        if (visible.length > 0) {
          const topId = visible[0].target.getAttribute('id');
          if (topId) {
            const newHash = `#${topId}`;
            if (location.hash !== newHash) {
              navigate(`${location.pathname}${newHash}`, { replace: true });
            }
          }
        }
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds, location.hash, location.pathname, navigate, initialId]);
};

export default useScrollSpy;
