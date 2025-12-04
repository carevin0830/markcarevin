import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-background">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-sans tracking-[0.3em] uppercase text-muted-foreground mb-6 animate-fade-up">
            Student Portfolio
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-foreground mb-6 animate-fade-up animate-delay-100">
            Mark Carevin
            <br />
            <span className="text-muted-foreground">Daluson</span>
          </h1>
          <p className="font-sans text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-12 animate-fade-up animate-delay-200">
            Aspiring developer with a passion for creating elegant digital experiences
          </p>
          <div className="flex justify-center gap-4 animate-fade-up animate-delay-300">
            <button
              onClick={scrollToAbout}
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-sans text-sm tracking-wide hover:bg-gray-800 transition-colors duration-300"
            >
              Explore Work
            </button>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 border border-border text-foreground font-sans text-sm tracking-wide hover:bg-secondary transition-colors duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in animate-delay-500"
      >
        <ArrowDown className="w-5 h-5 text-muted-foreground animate-bounce" />
      </button>

      {/* Decorative line */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="w-px h-32 bg-border"></div>
      </div>
      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="w-px h-32 bg-border"></div>
      </div>
    </section>
  );
};

export default Hero;
