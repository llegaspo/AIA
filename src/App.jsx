import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from 'react-router-dom';
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
  Print,
  Merchandise,
  ApplicationsMobileAppIconSystem,
  ApplicationsDigitalSocial,
  ApplicationsCorporate,
  ApplicationsEnvironmental,
  ApplicationsEvents,
  VideoEndFrames,
  // Our Brand combined page
  OurBrand,
  Welcome,
  Contents,
} from './pages/guide';
import { VIDEO_END_FRAMES } from './data/videoEndFrames';

const VideoEndFrameRedirect = () => {
  const { videoId } = useParams();
  const resolvedId = VIDEO_END_FRAMES.some((video) => video.id === videoId)
    ? videoId
    : VIDEO_END_FRAMES[0].id;
  return <Navigate to={`/video/end-frames#${resolvedId}`} replace />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="our-brand" element={<Welcome />} />
          <Route path="our-brand/welcome" element={<Welcome />} />
          <Route path="our-brand/contents" element={<Contents />} />
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
          <Route path="applications/mobile-app-icon-system" element={<ApplicationsMobileAppIconSystem />} />
          <Route path="applications/digital" element={<Navigate to="/applications/digital-social" replace />} />
          <Route path="applications/digital-social" element={<ApplicationsDigitalSocial />} />
          <Route path="applications/corporate" element={<ApplicationsCorporate />} />
          <Route path="applications/print" element={<Print />} />
          <Route path="applications/merchandise" element={<Merchandise />} />
          <Route path="applications/environmental" element={<ApplicationsEnvironmental />} />
          <Route path="applications/events" element={<ApplicationsEvents />} />
          <Route path="video/end-frames" element={<VideoEndFrames />} />
          <Route path="video/end-frames/:videoId" element={<VideoEndFrameRedirect />} />
          <Route path="full-guide" element={<FullGuideViewer />} />
          <Route path="branding/*" element={<BrandSectionPage />} /> {/* Catch-all for others if needed */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
