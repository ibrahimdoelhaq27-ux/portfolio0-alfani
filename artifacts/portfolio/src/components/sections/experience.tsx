import { motion } from "framer-motion";

const experiences = [
  {
    role: "Senior Design Engineer",
    company: "Studio Obsidian",
    period: "2021 - Present",
    description: "Leading the frontend architecture and visual direction for high-end client projects. Bridging the gap between Figma and production code."
  },
  {
    role: "Frontend Developer",
    company: "Nexus Creative",
    period: "2018 - 2021",
    description: "Built scalable React applications for enterprise clients. Implemented comprehensive design systems and component libraries."
  },
  {
    role: "UI/UX Designer",
    company: "Freelance",
    period: "2015 - 2018",
    description: "Crafted digital brand identities and web experiences for boutique agencies and startups. Focused on typography and interaction design."
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-32 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">Experience</h2>
        </motion.div>

        <div className="relative border-l border-border pl-8 md:pl-12 ml-4 md:ml-6 space-y-16">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-3 h-3 bg-background border-2 border-primary rounded-full ring-4 ring-background" />

              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4 gap-2">
                <h3 className="text-2xl font-serif font-bold text-foreground">{exp.role}</h3>
                <span className="text-sm font-mono tracking-widest text-primary/80">{exp.period}</span>
              </div>

              <h4 className="text-lg text-foreground/80 font-medium mb-4">{exp.company}</h4>

              <p className="text-muted-foreground font-light leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
