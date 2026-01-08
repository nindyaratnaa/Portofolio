import { motion } from "framer-motion";
import { Code, Palette, Smartphone, Globe } from "lucide-react";

const skills = [
    {
        icon: <Code className="h-6 w-6" />,
        title: "Web Development",
        description: "Building responsive websites and web applications with modern technologies and best practices."
    },
    {
        icon: <Palette className="h-6 w-6" />,
        title: "Graphic Design",
        description: "Creating visual content for social media, branding materials, and digital communications using Figma."
    },
    {
        icon: <Smartphone className="h-6 w-6" />,
        title: "Computer Vision",
        description: "Developing image classification and object detection models using PyTorch and machine learning."
    },
    {
        icon: <Globe className="h-6 w-6" />,
        title: "Project Management",
        description: "Leading teams and coordinating events, from planning to execution with cross-functional collaboration."
    }
];

export default function SkillsSection() {
    return (
        <section className="py-20 bg-muted/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        What I Do
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        I specialize in creating digital experiences that make a difference
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="text-primary mb-4">{skill.icon}</div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">
                                {skill.title}
                            </h3>
                            <p className="text-muted-foreground">
                                {skill.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}