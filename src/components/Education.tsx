const education = [
  {
    degree: 'Bachelor of Science',
    field: 'Information Technology',
    institution: 'University Name',
    period: '2021 - Present',
    description: 'Focusing on software development, web technologies, and database management systems.',
  },
  {
    degree: 'Senior High School',
    field: 'STEM Strand',
    institution: 'High School Name',
    period: '2019 - 2021',
    description: 'Specialized in Science, Technology, Engineering, and Mathematics.',
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-sans tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Background
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">
              Education & <span className="text-muted-foreground">Learning</span>
            </h2>
          </div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={edu.degree + edu.field}
                className="relative pl-8 md:pl-12 border-l border-border"
              >
                <div className="absolute left-0 top-0 w-3 h-3 bg-foreground rounded-full -translate-x-1/2"></div>
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-serif text-2xl text-foreground">
                      {edu.degree}
                    </h3>
                    <p className="font-sans text-muted-foreground">
                      {edu.field}
                    </p>
                  </div>
                  <span className="text-sm font-sans text-muted-foreground shrink-0">
                    {edu.period}
                  </span>
                </div>
                <p className="font-sans text-sm text-muted-foreground mb-2">
                  {edu.institution}
                </p>
                <p className="font-sans text-muted-foreground">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
