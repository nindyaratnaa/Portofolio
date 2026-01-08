import { motion } from "framer-motion";
import { Code, Coffee, Heart } from "lucide-react";

const interests = [
    {
        icon: <Code className="w-6 h-6" />,
        title: "Clean Code",
        description: "I believe in writing clean, maintainable code that other developers can easily understand and work with."
    },
    {
        icon: <Coffee className="w-6 h-6" />,
        title: "Continuous Learning",
        description: "Technology evolves rapidly, and I'm always learning new frameworks, tools, and best practices."
    },
    {
        icon: <Heart className="w-6 w-6" />,
        title: "User Experience",
        description: "Creating intuitive and delightful user experiences is at the heart of everything I build."
    }
];

const stats = [
    { number: "2+", label: "Years Experience" },
    { number: "30+", label: "Projects Completed" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "24/7", label: "Learning Mode" }
];

export default function AboutSection() {
    return (
        <section id="about" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                                About Me
                            </h2>
                            <p className="text-xl text-muted-foreground">
                                Get to know me better
                            </p>
                        </motion.div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="space-y-4 text-muted-foreground">
                                <p>
                                    I'm Anindya Ratna Paramitha, a Computer Science student at University of Brawijaya with diverse experience 
                                    in web development, computer vision research, and graphic design. Currently working as a Computer Vision Researcher 
                                    in the BRONE Humanoid Research Team.
                                </p>
                                <p>
                                    My expertise spans from technical programming in Java and Python to creative design work using Figma. 
                                    I have experience in teaching programming, managing events, and developing web applications. 
                                    I'm passionate about combining technology with creative problem-solving.
                                </p>
                                <p>
                                    Beyond academics, I actively participate in student organizations, lead event committees, 
                                    and contribute to various projects that bridge technology and community engagement.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="grid grid-cols-2 gap-4"
                        >
                            {stats.map((stat, index) => (
                                <div key={index} className="bg-card p-4 rounded-lg text-center">
                                    <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {interests.map((interest, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="text-primary mb-4">
                                    {interest.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-foreground mb-2">
                                    {interest.title}
                                </h3>
                                <p className="text-muted-foreground">
                                    {interest.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}