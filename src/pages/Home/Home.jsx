import Hero from '../../components/Hero/Hero';
import AboutIntro from '../../components/AboutIntro/AboutIntro';
import ServicesSection from '../../components/ServicesSection/ServicesSection';
import SectorsSection from '../../components/SectorsSection/SectorsSection';
import CapabilitiesSection from '../../components/CapabilitiesSection/CapabilitiesSection';
import ProjectsSection from '../../components/ProjectsSection/ProjectsSection';
import ApproachSection from '../../components/ApproachSection/ApproachSection';
import ConsultationCTA from '../../components/ConsultationCTA/ConsultationCTA';
import SEO from '../../components/SEO/SEO';


import './Home.css';

function Home() {
  return (
    <div className="home">
      <SEO
        title="Structural Engineering Company in Mohali | Sapex Structural Solutions"
        description="Sapex Structural Solutions provides structural engineering, RCC and steel design, PEB detailing, and consultancy in Mohali, Punjab, and across India."
        keywords="Sapex Structural Solutions, structural solutions, structural engineering, structural engineering company Mohali, structural design India, RCC design, steel structure design, PEB design, structural consultancy Punjab"
      />

      <main>
        <Hero />
         <AboutIntro />
         <ServicesSection />
         <SectorsSection />
         <CapabilitiesSection />
         <ProjectsSection />
         <ApproachSection/>
         <ConsultationCTA />

      </main>
    </div>
  );
}

export default Home;