import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import alfaniPhoto from "/alfani.png";

const roles = ["IT Business Partner", "Digital Transformation Lead", "Technology Strategist", "Innovation Enabler"];

const mobileStats = [
  { value: "5+", label: "Years Exp." },
  { value: "20+", label: "Projects" },
  { value: "3", label: "Industries" },
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* DESKTOP background glow */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none hidden lg:block"
        style={{
          backgroundImage: "radial-gradient(circle at 82% 55%, hsl(var(--primary) / 0.25) 0%, transparent 50%)",
          y: bgY,
        }}
      />
      <div
        className="absolute top-0 right-0 w-[40vw] h-[40vh] pointer-events-none z-0 hidden lg:block"
        style={{ background: "radial-gradient(circle at 90% 10%, hsl(var(--primary) / 0.12) 0%, transparent 60%)" }}
      />

      {/* MOBILE background decorations */}
      <div className="lg:hidden absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(ellipse at 50% 40%, hsl(var(--primary)) 0%, transparent 60%)",
            y: bgY,
          }}
        />
        <div
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-10"
          style={{ background: "hsl(var(--primary))", filter: "blur(60px)" }}
        />
        <div
          className="absolute -bottom-20 -left-10 w-48 h-48 rounded-full opacity-[0.08]"
          style={{ background: "hsl(var(--primary))", filter: "blur(50px)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage: "radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />
        <motion.div
          className="absolute -top-16 -right-16 w-72 h-72 rounded-full border border-primary/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {[0, 120, 240].map((deg) => (
            <span
              key={deg}
              className="absolute w-1.5 h-1.5 rounded-full bg-primary/40"
              style={{
                top: "50%", left: "50%",
                transformOrigin: "0 0",
                transform: `rotate(${deg}deg) translateX(calc(50% - 3px)) translateY(-50%)`,
              }}
            />
          ))}
        </motion.div>
        <motion.div
          className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full border border-dashed border-primary/10"
          animate={{ rotate: -360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-24 right-5 w-8 h-8 border-t-2 border-r-2 border-primary/50"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.0, duration: 0.4 }}
        />
        <motion.div
          className="absolute bottom-24 left-5 w-8 h-8 border-b-2 border-l-2 border-primary/50"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.4 }}
        />
      </div>

      {/* PHOTO COLUMN — DESKTOP ONLY */}
      <motion.div
        className="absolute right-0 top-0 bottom-0 z-0 hidden lg:flex items-end justify-end pointer-events-none"
        style={{ y: imageY }}
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
      >
        {/* Dot grid overlay */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: "radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          />
        </div>

        {/* Decorative rings behind photo */}
        <div className="absolute right-4 xl:right-16 top-1/2 -translate-y-1/2 pointer-events-none w-[420px] h-[420px] xl:w-[500px] xl:h-[500px]">
          <motion.div
            className="absolute inset-0 rounded-full border border-primary/15"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[0, 90, 180, 270].map((deg) => (
              <span
                key={deg}
                className="absolute w-1.5 h-1.5 rounded-full bg-primary/50"
                style={{
                  top: "50%", left: "50%",
                  transformOrigin: "0 0",
                  transform: `rotate(${deg}deg) translateX(calc(50% - 3px)) translateY(-50%)`,
                }}
              />
            ))}
          </motion.div>
          <motion.div
            className="absolute inset-8 rounded-full border border-dashed border-primary/10"
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Amber ground glow */}
        <div
          className="absolute bottom-0 right-0 w-80 h-32 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 60% 100%, hsl(var(--primary) / 0.45) 0%, transparent 70%)" }}
        />

        {/* PHOTO */}
        <div className="relative h-full flex items-end justify-center w-[380px] xl:w-[460px]">
          <motion.img
            src={alfaniPhoto}
            alt="Alfani"
            className="relative z-10 h-[90%] w-auto object-contain object-bottom select-none"
            style={{ filter: "drop-shadow(0 0 60px hsl(var(--primary) / 0.3))" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            draggable={false}
          />

          {/* Stat card — Years Experience */}
          <motion.div
            className="absolute left-0 xl:-left-8 top-[26%] z-20 bg-card/90 backdrop-blur-sm border border-border/60 px-5 py-4 shadow-2xl pointer-events-auto"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            <div className="text-3xl font-serif font-bold text-primary leading-none">5+</div>
            <div className="text-[10px] tracking-widest uppercase text-muted-foreground mt-1">Years Experience</div>
          </motion.div>

          {/* Stat card — Projects Delivered */}
          <motion.div
            className="absolute left-0 xl:-left-8 top-[50%] z-20 bg-card/90 backdrop-blur-sm border border-border/60 px-5 py-4 shadow-2xl pointer-events-auto"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
          >
            <div className="text-3xl font-serif font-bold text-primary leading-none">20+</div>
            <div className="text-[10px] tracking-widest uppercase text-muted-foreground mt-1">Projects Delivered</div>
          </motion.div>

          {/* Corner accents */}
          <motion.div
            className="absolute top-6 right-2 w-10 h-10 border-t-2 border-r-2 border-primary/60 z-20"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          />
          <motion.div
            className="absolute bottom-6 left-2 w-10 h-10 border-b-2 border-l-2 border-primary/60 z-20"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.5 }}
          />
        </div>
      </motion.div>

      {/* TEXT CONTENT */}
      <div className="container relative z-10 px-6 mx-auto">
        <div className="w-full lg:max-w-2xl">

          {/* Typing role badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 text-primary tracking-[0.25em] uppercase text-xs lg:text-sm font-medium mb-6 lg:mb-8">
              <span
                className="inline-block w-2 h-2 rounded-full bg-primary flex-shrink-0"
                style={{ animation: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite" }}
              />
              <span className="min-w-[160px] lg:min-w-[220px]">
                {displayed}
                <span className="inline-block w-0.5 h-3 lg:h-4 bg-primary ml-0.5 align-middle animate-pulse" />
              </span>
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-6xl sm:text-7xl lg:text-7xl xl:text-8xl font-serif font-bold text-foreground leading-[0.9] tracking-tighter mb-3 lg:mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            Alfani
          </motion.h1>

          {/* Title with decorative line */}
          <motion.div
            className="flex items-center gap-4 mb-5 lg:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="text-lg sm:text-xl lg:text-2xl font-serif italic font-light text-primary tracking-wide">
              IT Business Partner
            </span>
            <span className="flex-1 h-px bg-gradient-to-r from-primary/40 to-transparent lg:hidden" />
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-base sm:text-lg lg:text-xl text-muted-foreground font-light leading-relaxed mb-8 lg:mb-12 max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Bridging business strategy with innovative technology solutions to create scalable, impactful, and future-ready digital transformation.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 mb-10 lg:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
          >
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="group relative inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-3.5 lg:px-8 lg:py-4 text-sm font-medium tracking-widest uppercase overflow-hidden transition-all hover:shadow-lg hover:shadow-primary/25 active:scale-95"
              data-testid="button-view-work"
            >
              <span className="relative z-10">View Work</span>
              <span className="relative z-10 w-0 group-hover:w-4 overflow-hidden transition-all duration-300">
                <ArrowDown className="w-4 h-4 -rotate-90" />
              </span>
            </button>

            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-3 border border-border text-foreground px-7 py-3.5 lg:px-8 lg:py-4 text-sm font-medium tracking-widest uppercase hover:border-primary hover:text-primary transition-colors active:scale-95"
              data-testid="button-contact"
            >
              Get in Touch
            </button>
          </motion.div>

          {/* Mobile stats */}
          <motion.div
            className="lg:hidden grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-border/40"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            {mobileStats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-xl font-serif font-bold text-primary leading-none">{value}</div>
                <div className="text-[9px] tracking-widest uppercase text-muted-foreground mt-1">{label}</div>
              </div>
            ))}
          </motion.div>

          {/* Availability pill */}
          <motion.div
            className="hidden lg:inline-flex items-center gap-2 border border-border/60 bg-card/50 px-4 py-2 mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-medium tracking-widest uppercase text-foreground">
              Available for work
            </span>
          </motion.div>
        </div>
      </div>

      {/* Scroll arrow */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
      >
        <button
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          className="animate-bounce p-4 rounded-full border border-border/50 text-muted-foreground hover:border-primary hover:text-primary transition-colors"
          data-testid="button-scroll-down"
        >
          <ArrowDown className="w-5 h-5" />
        </button>
      </motion.div>
    </section>
  );
}
