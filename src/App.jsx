import { HashRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { useStore } from './store/useStore';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

// Lazy load Admin Panel so it doesn't affect initial load time
const AdminPanel = lazy(() => import('./pages/Admin'));

function App() {
  const { fetchProjects, fetchGlobalContent } = useStore();

  useEffect(() => {
    fetchProjects();
    fetchGlobalContent();
  }, [fetchProjects, fetchGlobalContent]);

  return (
    <HashRouter>
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
    </HashRouter>
  );
}

export default App;
