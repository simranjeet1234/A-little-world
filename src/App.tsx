import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingDecorations } from './components/FloatingDecorations';
import { CursorSparkles } from './components/CursorSparkles';
import { HomePage } from './pages/HomePage';
import { GalleryPage } from './pages/GalleryPage';
import { LittleThingsPage } from './pages/LittleThingsPage';
import { MemoriesPage } from './pages/MemoriesPage';
import { ForYouPage } from './pages/ForYouPage';
import { FunZonePage } from './pages/FunZonePage';
import { SecretRoomPage } from './pages/SecretRoomPage';
import { NotFoundPage } from './pages/NotFoundPage';

export function App() {
  return (
    <BrowserRouter>
      <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <FloatingDecorations />
        <CursorSparkles />
        <Navbar />

        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/little-things" element={<LittleThingsPage />} />
            <Route path="/memories" element={<MemoriesPage />} />
            <Route path="/for-you" element={<ForYouPage />} />
            <Route path="/fun-zone" element={<FunZonePage />} />
            <Route path="/secret" element={<SecretRoomPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
