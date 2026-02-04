import Header from './Header';
import Footer from './Footer';
import ScrollToTop from '../UI/ScrollToTop';

// eslint-disable-next-line react/prop-types
export default function MainLayout({ children }) {
  return (
    <div className="app-layout">
      <Header />
      <ScrollToTop />

      {/* Main Content Area */}
      <main className="main-content">
        {children}
        <Footer />
      </main>

      <style jsx="true">{`
        .app-layout {
          min-height: 100vh;
        }

        .main-content {
          width: 100%;
          min-height: 100vh;
          position: relative;
          padding-top: 0; /* Header is fixed/transparent */
        }
      `}</style>
    </div>
  );
}
