import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import MovingMountainsLibrary from './pages/MovingMountainsLibrary';
import BrandStandards from './pages/BrandStandards';
import BrandSectionPage from './pages/BrandSectionPage';
import FullGuideViewer from './pages/FullGuideViewer';
import {
  Purpose,
  Personality,
  ToneOfVoice,
  CulturalGuidance,
  Logos,
  Colours,
  Typography,
  MovingMountains,
  Photography,
  Illustration,
  Iconography,
  Digital,
  Print,
  Merchandise,
  AiaOneBillion,
  AiaVitality,
  HighNetWorth,
  BrandChecklist,
  Assets,
  // Our Brand combined page
  OurBrand,
} from './pages/guide';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="our-brand" element={<OurBrand />} />
          <Route path="brand-standards" element={<OurBrand />} />
          <Route path="moving-mountains-library" element={<MovingMountainsLibrary />} />

          {/* Dynamic Brand Sections */}
          <Route path="purpose" element={<Purpose />} />
          <Route path="personality" element={<Personality />} />
          <Route path="tone-of-voice" element={<ToneOfVoice />} />
          <Route path="cultural-guidance" element={<CulturalGuidance />} />
          <Route path="logos" element={<Logos />} />
          <Route path="colour" element={<Colours />} />
          <Route path="typography" element={<Typography />} />
          <Route path="moving-mountains" element={<MovingMountains />} />
          <Route path="photography" element={<Photography />} />
          <Route path="illustration" element={<Illustration />} />
          <Route path="iconography" element={<Iconography />} />
          <Route path="digital" element={<Digital />} />
          <Route path="print" element={<Print />} />
          <Route path="merchandise" element={<Merchandise />} />
          <Route path="aia-one-billion" element={<AiaOneBillion />} />
          <Route path="aia-vitality" element={<AiaVitality />} />
          <Route path="high-net-worth" element={<HighNetWorth />} />
          <Route path="brand-checklist" element={<BrandChecklist />} />
          <Route path="assets" element={<Assets />} />
          <Route path="full-guide" element={<FullGuideViewer />} />
          <Route path="branding/*" element={<BrandSectionPage />} /> {/* Catch-all for others if needed */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
