import { motion } from "framer-motion";
import { Code2, Palette, Cpu } from "lucide-react";

const skillCategories = [
  {
    title: "Programming & Development",
    icon: Code2,
    description: "Core languages, paradigms, and foundations I use to build software.",
    skills: ["Java", "Python", "JavaScript", "HTML5/CSS3", "Object-Oriented Programming"],
  },
  {
    title: "Design & Media",
    icon: Palette,
    description: "Design thinking and visual communication for usable interfaces.",
    skills: ["Figma", "Graphic Design", "UI/UX Design", "Visual Identity Design", "Social Media Content"],
  },
  {
    title: "Technical Skills",
    icon: Cpu,
    description: "Advanced and supporting technical capabilities.",
    skills: ["Computer Vision", "PyTorch", "Project Management", "Web Development", "Server Management"],
  },
];

export default function SkillsDetailSection() {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground">
            A snapshot of the technologies, tools, and disciplines I actively work with.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                whileHover={{ y: -6 }}
                className="relative bg-card rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow"
              >
                {/* Icon */}
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {category.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  {category.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-full bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
