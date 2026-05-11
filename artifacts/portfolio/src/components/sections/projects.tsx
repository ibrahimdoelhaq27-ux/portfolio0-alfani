import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "Onyx Dashboard",
    category: "Web App",
    description: "A premium analytics dashboard for creative agencies to track metrics, manage clients, and visualize financial data with bespoke charting.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["React", "D3.js", "Tailwind", "Node.js"],
    links: { github: "https://github.com", live: "https://example.com" },
  },
  {
    title: "Aura Mobile",
    category: "Mobile Apps",
    description: "An elegant habit tracking and mindfulness application focused on typography, subtle haptics, and fluid motion design.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    tags: ["React Native", "Framer Motion", "Figma"],
    links: { live: "https://example.com" },
  },
  {
    title: "Maison Identity",
    category: "Integration Partner",
    description: "Complete digital identity and e-commerce experience for a luxury furniture atelier, deeply integrated with third-party inventory and CRM systems.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    tags: ["Next.js", "Shopify", "REST API"],
    links: { github: "https://github.com", live: "https://example.com" },
  },
  {
    title: "Nexus Connect",
    category: "Integration Partner",
    description: "A unified middleware platform that bridges enterprise tools — Salesforce, HubSpot, and Stripe — into a single real-time data layer.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    tags: ["Node.js", "Webhooks", "PostgreSQL"],
    links: { github: "https://github.com", live: "https://example.com" },
  },
  {
    title: "Prism Commerce",
    category: "Web App",
    description: "A headless e-commerce storefront built for speed and conversion, featuring AI-powered recommendations and dynamic pricing modules.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tags: ["Next.js", "Tailwind", "Stripe", "Vercel"],
    links: { live: "https://example.com" },
  },
  {
    title: "Pulse Tracker",
    category: "Mobile Apps",
    description: "A cross-platform fitness and wellness app with real-time biometric syncing, personalized workout plans, and social accountability features.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
    tags: ["Expo", "TypeScript", "Firebase"],
    links: { github: "https://github.com", live: "https://example.com" },
  },
];

const categories = ["All", "Integration Partner", "Web App", "Mobile Apps"];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, scale: 0.96, transition: { duration: 0.25 } },
};

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = projects.filter(
    (p) => activeFilter === "All" || p.category === activeFilter
  );

  return (
    <section id="projects" className="py-32 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-10">
            Selected <span className="italic font-light text-primary">Works</span>
          </h2>

          <div className="flex flex-wrap gap-2" role="tablist">
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeFilter === cat}
                onClick={() => setActiveFilter(cat)}
                className="relative px-5 py-2 text-sm font-medium tracking-widest uppercase transition-colors"
                style={{
                  color:
                    activeFilter === cat
                      ? "hsl(var(--primary-foreground))"
                      : "hsl(var(--muted-foreground))",
                }}
                data-testid={`filter-${cat.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {activeFilter === cat && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 bg-primary"
                    style={{ borderRadius: 2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            {filtered.map((project, idx) => (
              <motion.div
                key={project.title}
                variants={cardVariants}
                className="group relative bg-background border border-border overflow-hidden flex flex-col"
                data-testid={`card-project-${idx}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-background/30 group-hover:bg-transparent transition-colors duration-500" />

                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 bg-background/90 backdrop-blur-sm border border-border text-foreground hover:text-primary hover:border-primary transition-colors"
                        aria-label="View live"
                        data-testid={`link-live-${idx}`}
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 bg-background/90 backdrop-blur-sm border border-border text-foreground hover:text-primary hover:border-primary transition-colors"
                        aria-label="View source"
                        data-testid={`link-github-${idx}`}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-4 md:p-5 flex flex-col gap-2 flex-1">
                  <span className="text-[10px] md:text-xs font-medium text-primary tracking-widest uppercase">
                    {project.category}
                  </span>
                  <h3 className="font-serif font-bold text-base md:text-lg text-foreground leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground font-light leading-relaxed line-clamp-2 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {project.tags.slice(0, 3).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] tracking-wider border border-border px-2 py-0.5 text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
