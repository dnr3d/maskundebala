import MainLayout from '../components/Layout/MainLayout';
import Hero from '../components/Sections/Hero';
import Portfolio from '../components/Sections/Portfolio';
import About from '../components/Sections/About';
// import CaseStudy from '../components/Sections/CaseStudy';
import Services from '../components/Sections/Services';
import Process from '../components/Sections/Process';
import Inquiry from '../components/Sections/Inquiry';
import Contact from '../components/Sections/Contact';

export default function Home() {
    return (
        <MainLayout>
            <Hero />
            <Portfolio />
            <About />
            <Services />
            <Process />
            <Inquiry />
            <Contact />
        </MainLayout>
    );
}
