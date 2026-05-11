import { useState } from "react";
import { motion } from "framer-motion";
import { Map, Users, FolderKanban, ShieldCheck } from "lucide-react";

const skillCategories = [
  {
    title: "Strategy",
    icon: <Map className="w-5 h-5" />,
    color: "hsl(35, 91%, 60%)",
    skills: [
      { name: "IT Strategy Planning", level: 95 },
      { name: "Digital Transformation", level: 92 },
      { name: "Technology Roadmap", level: 90 },
      { name: "Business Alignment", level: 88 },
    ],
  },
  {
    title: "Business Collaboration",
    icon: <Users className="w-5 h-5" />,
    color: "hsl(200, 80%, 55%)",
    skills: [
      { name: "Stakeholder Management", level: 94 },
      { name: "Business Requirement Analysis", level: 91 },
      { name: "Cross-Department Collaboration", level: 89 },
      { name: "IT Consultation", level: 87 },
    ],
  },
  {
    title: "Project Management",
    icon: <FolderKanban className="w-5 h-5" />,
    color: "hsl(150, 60%, 50%)",
    skills: [
      { name: "Agile / Scrum", level: 93 },
      { name: "Project Planning", level: 90 },
      { name: "Risk Management", level: 85 },
      { name: "Delivery Management", level: 88 },
    ],
  },
  {
    title: "IT Governance",
    icon: <ShieldCheck className="w-5 h-5" />,
    color: "hsl(270, 60%, 65%)",
    skills: [
      { name: "IT Governance", level: 88 },
      { name: "Compliance", level: 84 },
      { name: "Risk Management", level: 85 },
      { name: "IT Policy", level: 82 },
    ],
  },
];

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group cursor-default"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-muted-foreground font-light transition-colors group-hover:text-foreground">
          {name}
        </span>
        <motion.span
          className="text-xs font-mono"
          animate={{ opacity: hovered ? 1 : 0 }}
          style={{ color }}
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-px bg-border overflow-hidden">
        <motion.div
          className="h-full origin-left"
          style={{ backgroundColor: color }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: level / 100 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="py-32 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-4">
            Capabilities
          </h2>
          <p className="text-lg text-muted-foreground font-light">
            A specialized toolkit for driving digital transformation and IT strategy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <motion.div
            className="lg:col-span-4 flex flex-col gap-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {skillCategories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-4 px-6 py-4 text-left border transition-all duration-300 ${
                  activeTab === idx
                    ? "border-primary/50 bg-card"
                    : "border-transparent hover:border-border"
                }`}
                data-testid={`skill-tab-${cat.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <span
                  className="p-2 rounded-sm transition-colors flex-shrink-0"
                  style={{
                    backgroundColor: activeTab === idx ? `${cat.color}20` : "transparent",
                    color: activeTab === idx ? cat.color : "hsl(var(--muted-foreground))",
                  }}
                >
                  {cat.icon}
                </span>
                <span
                  className={`font-serif font-medium text-lg transition-colors leading-tight ${
                    activeTab === idx ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {cat.title}
                </span>
                {activeTab === idx && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="ml-auto w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: cat.color }}
                  />
                )}
              </button>
            ))}
          </motion.div>

          <motion.div
            key={activeTab}
            className="lg:col-span-8 bg-card border border-border p-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-10">
              <span
                className="p-3 rounded-sm"
                style={{
                  backgroundColor: `${skillCategories[activeTab].color}20`,
                  color: skillCategories[activeTab].color,
                }}
              >
                {skillCategories[activeTab].icon}
              </span>
              <h3 className="text-2xl font-serif font-bold text-foreground">
                {skillCategories[activeTab].title}
              </h3>
            </div>

            <div className="space-y-6">
              {skillCategories[activeTab].skills.map((skill, sIdx) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={skillCategories[activeTab].color}
                  delay={sIdx * 0.1}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
