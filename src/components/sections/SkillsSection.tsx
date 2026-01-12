import { motion } from "framer-motion";
import { Code, Palette, Smartphone, Globe } from "lucide-react";

const skills = [
    {
        icon: <Code className="h-6 w-6" />,
        title: "Web Development",
        description:
        "Building responsive websites and web applications with modern technologies and best practices."
    },
    {
        icon: <Palette className="h-6 w-6" />,
        title: "Graphic Design",
        description:
        "Creating visual content for social media, branding materials, and digital communications using Figma."
    },
    {
        icon: <Smartphone className="h-6 w-6" />,
        title: "Computer Vision",
        description:
        "Developing image classification and object detection models using PyTorch and machine learning."
    },
    {
        icon: <Globe className="h-6 w-6" />,
        title: "Project Management",
        description:
        "Leading teams and coordinating events, from planning to execution with cross-functional collaboration."
    }
];

export default function SkillsSection() {
    return (
        <section className="relative py-28 bg-muted/20 overflow-hidden">
        {/* Soft ambient glow */}
        <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What I Do
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                I focus on building digital experiences that blend design, technology,
                and usability into meaningful products.
            </p>
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
                <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="
                    group relative rounded-xl
                    bg-card/70 dark:bg-white/5
                    backdrop-blur-xl
                    border border-border/50
                    p-6
                    transition-all duration-500
                    hover:border-primary/40
                    hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)]
                "
                >
                {/* Icon */}
                <div
                    className="
                    mb-5 inline-flex p-3 rounded-lg
                    bg-primary/10 text-primary
                    transition-all duration-500
                    group-hover:bg-primary/20
                    dark:group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.6)]
                    "
                >
                    {skill.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-foreground mb-2">
                    {skill.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                    {skill.description}
                </p>
                </motion.div>
            ))}
            </div>
        </div>
        </section>
    );
}
