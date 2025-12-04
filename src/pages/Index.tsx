import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import InkBackground from '@/components/InkBackground';

const Index = () => {
  return (
    <main className="min-h-screen bg-background relative">
      <InkBackground />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default Index;
