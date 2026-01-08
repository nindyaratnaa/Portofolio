import Seo from '../components/Seo';
import {
    HeroSection,
    SkillsSection,
    AboutSection,
    ProjectsSection,
    SkillsDetailSection,
    ExperienceSection,
    CertificationsSection,
    ContactSection,
    CTASection
} from '@/components/sections';



export default function Home() {
    return (
        <>
            <Seo 
                title="Anindya Ratna Paramitha - Computer Science Student & Developer" 
                description="Computer Science student at University of Brawijaya with experience in web development, computer vision research, and graphic design." 
            />
            
            <HeroSection />
            <SkillsSection />
            <AboutSection />
            <ProjectsSection />
            <SkillsDetailSection />
            <ExperienceSection />
            <CertificationsSection />
            <ContactSection />
            <CTASection />
        </>
    );
}
