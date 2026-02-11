import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const clearHighlights = (container) => {
  if (!container) return;
  const marks = container.querySelectorAll('mark.search-highlight');
  marks.forEach((mark) => {
    const textNode = document.createTextNode(mark.textContent || '');
    mark.replaceWith(textNode);
  });
};

const highlightTerm = (container, term) => {
  if (!container || !term) return [];
  const highlights = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      if (node.parentElement && ['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(node.parentElement.tagName)) {
        return NodeFilter.FILTER_REJECT;
      }
      return NodeFilter.FILTER_ACCEPT;
    },
  });

  const regex = new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  nodes.forEach((textNode) => {
    const text = textNode.nodeValue;
    if (!text || !regex.test(text)) return;
    const frag = document.createDocumentFragment();
    let lastIndex = 0;
    text.replace(regex, (match, offset) => {
      const before = text.slice(lastIndex, offset);
      if (before) frag.appendChild(document.createTextNode(before));
      const mark = document.createElement('mark');
      mark.className = 'search-highlight';
      mark.textContent = match;
      frag.appendChild(mark);
      highlights.push(mark);
      lastIndex = offset + match.length;
      return match;
    });
    const after = text.slice(lastIndex);
    if (after) frag.appendChild(document.createTextNode(after));
    textNode.replaceWith(frag);
  });

  return highlights;
};

const useSearchHighlight = (containerRef) => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const term = params.get('q') || '';
    const container = containerRef?.current;
    if (!container) return;

    clearHighlights(container);
    if (!term) return;

    const marks = highlightTerm(container, term);
    if (marks.length > 0) {
      marks[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [location.search, containerRef]);
};

export default useSearchHighlight;
