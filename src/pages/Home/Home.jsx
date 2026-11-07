import Hero from '../../components/Hero/Hero';
import AboutIntro from '../../components/AboutIntro/AboutIntro';
import ServicesSection from '../../components/ServicesSection/ServicesSection';
import SectorsSection from '../../components/SectorsSection/SectorsSection';
import CapabilitiesSection from '../../components/CapabilitiesSection/CapabilitiesSection';
import ProjectsSection from '../../components/ProjectsSection/ProjectsSection';
import ApproachSection from '../../components/ApproachSection/ApproachSection';
import ConsultationCTA from '../../components/ConsultationCTA/ConsultationCTA';


import './Home.css';

function Home() {
  return (
    <div className="home">

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