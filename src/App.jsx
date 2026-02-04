import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

// Lazy load Admin Panel so it doesn't affect initial load time
const AdminPanel = lazy(() => import('./pages/Admin'));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/admin/*"
          element={
            <Suspense fallback={<div style={{ color: 'white', padding: 50 }}>Loading Admin...</div>}>
              <AdminPanel />
            </Suspense>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
