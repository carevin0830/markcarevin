import { Mail, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-sans tracking-[0.3em] uppercase opacity-60 mb-4">
              Get in Touch
            </p>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">
              Let's Work <span className="opacity-60">Together</span>
            </h2>
            <p className="font-sans text-lg opacity-80 max-w-xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of something great.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <a
              href="mailto:mark.daluson@email.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary-foreground text-primary font-sans text-sm tracking-wide hover:opacity-90 transition-opacity duration-300"
            >
              <Mail className="w-4 h-4" />
              mark.daluson@email.com
            </a>
          </div>

          <div className="flex justify-center gap-6 mt-12">
            <a
              href="#"
              className="w-12 h-12 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors duration-300"
              aria-label="Telegram"
            >
              <Send className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
