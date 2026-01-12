import { motion } from "framer-motion";
import { Code, Coffee, Heart, Sparkles } from "lucide-react";

const interests = [
  {
    icon: <Code className="w-6 h-6" />,
    title: "Clean Code",
    description:
      "I care deeply about writing elegant, maintainable code that scales with both teams and ideas."
  },
  {
    icon: <Coffee className="w-6 h-6" />,
    title: "Continuous Learning",
    description:
      "From computer vision to web technologies, I constantly explore new tools and paradigms."
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "User Experience",
    description:
      "Technology should feel intuitive. I design with empathy and clarity in mind."
  }
];

const stats = [
  { number: "2+", label: "Years of Experience" },
  { number: "30+", label: "Projects Built" },
  { number: "5+", label: "Technologies Used" },
  { number: "10+", label: "Team & Solo Projects" }
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-28 bg-background">
      {/* background glow */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-primary/10 blur-[140px] rounded-full -translate-x-1/2 -translate-y-1/2 -z-10" />

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/50 backdrop-blur text-sm text-muted-foreground mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              About Me
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Designing & Engineering Digital Experiences
            </h2>

            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              I’m Anindya Ratna Paramitha — a Computer Science student and Computer Vision
              researcher who blends technical depth with creative design to build meaningful products.
            </p>
          </motion.div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 text-muted-foreground leading-relaxed"
            >
              <p>
                I’m currently part of the <span className="text-foreground font-medium">
                BRONE Humanoid Research Team</span>, focusing on computer vision and
                intelligent perception systems.
              </p>
              <p>
                My background spans from Java & Python engineering to UI/UX design using Figma.
                I enjoy building things that are not just functional, but beautiful and intuitive.
              </p>
              <p>
                Outside academics, I lead events, mentor students, and contribute to
                communities where technology meets creativity.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="relative rounded-xl border border-border/50 bg-card/60 backdrop-blur p-6 text-center overflow-hidden"
                >
                  <div className="absolute inset-0 bg-primary/5 opacity-0 hover:opacity-100 transition" />
                  <div className="relative text-3xl font-bold text-primary mb-1">
                    {stat.number}
                  </div>
                  <div className="relative text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Interests */}
          <div className="grid md:grid-cols-3 gap-8">
            {interests.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative rounded-xl border border-border/50 bg-card/60 backdrop-blur p-8 hover:border-primary/40 transition"
              >
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition" />

                <div className="relative text-primary mb-4">
                  {item.icon}
                </div>

                <h3 className="relative text-xl font-semibold text-foreground mb-2">
                  {item.title}
                </h3>

                <p className="relative text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
