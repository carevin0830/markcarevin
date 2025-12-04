const skills = [
  { category: 'Frontend', items: ['HTML/CSS', 'JavaScript', 'React', 'Tailwind CSS'] },
  { category: 'Backend', items: ['Node.js', 'Python', 'SQL', 'REST APIs'] },
  { category: 'Tools', items: ['Git', 'VS Code', 'Figma', 'Terminal'] },
  { category: 'Soft Skills', items: ['Problem Solving', 'Team Collaboration', 'Communication', 'Adaptability'] },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-sans tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Expertise
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">
              Skills & <span className="text-muted-foreground">Technologies</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {skills.map((skill, index) => (
              <div
                key={skill.category}
                className="group"
              >
                <div className="border-b border-border pb-4 mb-6">
                  <h3 className="font-serif text-2xl text-foreground">
                    {skill.category}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {skill.items.map((item) => (
                    <li
                      key={item}
                      className="font-sans text-muted-foreground flex items-center gap-3 group-hover:text-foreground transition-colors duration-300"
                    >
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
