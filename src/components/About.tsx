import profileImage from '@/assets/profile.jpg';

const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="relative w-64 h-64 mx-auto md:mx-0">
                <div className="absolute inset-0 border border-border -translate-x-3 -translate-y-3" />
                <img 
                  src={profileImage} 
                  alt="Mark Carevin Daluson" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
            <div>
              <p className="text-sm font-sans tracking-[0.3em] uppercase text-muted-foreground mb-4">
                About Me
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
                A Story of<br />
                <span className="text-muted-foreground">Curiosity</span>
              </h2>
            </div>
            <div className="space-y-6">
              <p className="font-sans text-muted-foreground leading-relaxed">
                Hello! I'm Mark Carevin Daluson, a dedicated student with a deep interest in technology and design. My journey in programming started with curiosity and has evolved into a genuine passion for building meaningful digital solutions.
              </p>
              <p className="font-sans text-muted-foreground leading-relaxed">
                I believe in the power of clean, thoughtful design combined with solid technical foundations. Every project I undertake is an opportunity to learn, grow, and create something that makes a difference.
              </p>
              <div className="pt-4 flex gap-8">
                <div>
                  <p className="font-serif text-3xl text-foreground">3+</p>
                  <p className="text-sm text-muted-foreground">Years Learning</p>
                </div>
                <div>
                  <p className="font-serif text-3xl text-foreground">10+</p>
                  <p className="text-sm text-muted-foreground">Projects</p>
                </div>
                <div>
                  <p className="font-serif text-3xl text-foreground">∞</p>
                  <p className="text-sm text-muted-foreground">Curiosity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
