import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-32 bg-card relative z-10">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">
            The <span className="italic text-primary font-light">Story</span>
          </h2>

          <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
            <p>
              I believe that software should feel like a physical artifact—crafted, deliberate, and responding perfectly to touch. The distance between design and engineering is where the best work is lost, so I occupy both spaces.
            </p>
            <p>
              My background is in graphic design and computer science, giving me the technical rigor to build scalable systems and the aesthetic sensitivity to make them beautiful.
            </p>
            <p>
              When I'm not writing code or pushing pixels, I'm studying architecture, roasting coffee, and looking for new ways to bring analog warmth into digital spaces.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-12 pt-8 border-t border-border"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div>
            <h4 className="text-3xl font-serif text-foreground mb-2">10+</h4>
            <p className="text-sm tracking-widest uppercase text-muted-foreground">Years Experience</p>
          </div>
          <div>
            <h4 className="text-3xl font-serif text-foreground mb-2">40+</h4>
            <p className="text-sm tracking-widest uppercase text-muted-foreground">Projects Delivered</p>
          </div>
          <div>
            <h4 className="text-3xl font-serif text-foreground mb-2">15+</h4>
            <p className="text-sm tracking-widest uppercase text-muted-foreground">Happy Clients</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
