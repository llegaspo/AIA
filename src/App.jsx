import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import MovingMountainsLibrary from './pages/MovingMountainsLibrary';
import BrandStandards from './pages/BrandStandards';
import BrandSectionPage from './pages/BrandSectionPage';
import FullGuideViewer from './pages/FullGuideViewer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="brand-standards" element={<BrandStandards />} />
          <Route path="moving-mountains-library" element={<MovingMountainsLibrary />} />

          {/* Dynamic Brand Sections */}
          <Route path="purpose" element={<BrandSectionPage />} />
          <Route path="personality" element={<BrandSectionPage />} />
          <Route path="tone-of-voice" element={<BrandSectionPage />} />
          <Route path="cultural-guidance" element={<BrandSectionPage />} />
          <Route path="logos" element={<BrandSectionPage />} />
          <Route path="colour" element={<BrandSectionPage />} />
          <Route path="typography" element={<BrandSectionPage />} />
          <Route path="moving-mountains" element={<BrandSectionPage />} />
          <Route path="photography" element={<BrandSectionPage />} />
          <Route path="illustration" element={<BrandSectionPage />} />
          <Route path="iconography" element={<BrandSectionPage />} />
          <Route path="digital" element={<BrandSectionPage />} />
          <Route path="print" element={<BrandSectionPage />} />
          <Route path="merchandise" element={<BrandSectionPage />} />
          <Route path="full-guide" element={<FullGuideViewer />} />
          <Route path="branding/*" element={<BrandSectionPage />} /> {/* Catch-all for others if needed */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
