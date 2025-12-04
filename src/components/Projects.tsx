import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Personal Website',
    description: 'A clean, minimal portfolio showcasing my work and journey as a developer.',
    tags: ['React', 'Tailwind', 'Responsive'],
    year: '2024',
  },
  {
    title: 'Task Manager App',
    description: 'A productivity application with drag-and-drop functionality and local storage.',
    tags: ['JavaScript', 'CSS', 'LocalStorage'],
    year: '2024',
  },
  {
    title: 'Weather Dashboard',
    description: 'Real-time weather information with location search and forecast display.',
    tags: ['API Integration', 'React', 'Charts'],
    year: '2023',
  },
  {
    title: 'Student Portal',
    description: 'A mock student information system with grade tracking and schedule management.',
    tags: ['Full Stack', 'Database', 'Auth'],
    year: '2023',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-sans tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Portfolio
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">
              Selected <span className="text-muted-foreground">Projects</span>
            </h2>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="group border-b border-border pb-8 last:border-0 cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-sm font-sans text-muted-foreground">
                        {project.year}
                      </span>
                      <div className="flex gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-sans px-2 py-1 bg-background border border-border text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl text-foreground group-hover:text-muted-foreground transition-colors duration-300 mb-2">
                      {project.title}
                    </h3>
                    <p className="font-sans text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-foreground group-hover:border-foreground transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 text-foreground group-hover:text-background transition-colors duration-300" />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
