import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Toaster } from 'sonner';
import { LandingPage } from './pages/Landing';
import { AuthPage } from './pages/Auth';
import { DashboardPage } from './pages/Dashboard';
import { TrackingPage } from './pages/Tracking';
import { AIPage } from './pages/AI';
import { MapPage } from './pages/Map';
import { CommunityPage } from './pages/Community';
import { MarketplacePage } from './pages/Marketplace';
import { MedicalPage } from './pages/Medical';
import { TeleconsultPage } from './pages/Teleconsult';
import { BottomNav } from './components/ui-premium';

const AppContent = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('dashboard');
  
  // Hide bottom nav on landing and auth pages
  const hideNav = ['/', '/auth'].includes(location.pathname);

  useEffect(() => {
    const path = location.pathname.substring(1);
    if (['dashboard', 'tracking', 'ai', 'map', 'community'].includes(path)) {
      setActiveTab(path);
    }
  }, [location]);

  return (
    <div className="min-h-screen pb-24 md:pb-0">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/tracking" element={<TrackingPage />} />
        <Route path="/ai" element={<AIPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/marketplace" element={<MarketplacePage />} />
        <Route path="/medical" element={<MedicalPage />} />
        <Route path="/teleconsult" element={<TeleconsultPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {!hideNav && (
        <div className="md:hidden">
          <BottomNav activeTab={activeTab} setActiveTab={(tab) => window.location.href = `/${tab}`} />
        </div>
      )}
      <Toaster position="top-center" expand={true} richColors />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
export default App;
