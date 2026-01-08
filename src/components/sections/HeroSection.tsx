import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Text from "@/components/custom-ui/text";
import Particles from "@/components/custom-ui/particles";
import { ArrowRight, Download, Github, Linkedin, Mail, Code, Globe, Palette, Smartphone } from "lucide-react";

const stats = [
    { 
        number: "2+", 
        label: "Years Experience",
        description: "In frontend development",
        icon: <Code className="h-6 w-6 text-primary" />
    },
    { 
        number: "30+", 
        label: "Projects Completed",
        description: "UI/UX & Frontend",
        icon: <Globe className="h-6 w-6 text-primary" />
    },
    { 
        number: "100%", 
        label: "Client Satisfaction",
        description: "Happy clients",
        icon: <Palette className="h-6 w-6 text-primary" />
    },
    { 
        number: "24/7", 
        label: "Learning Mode",
        description: "Always improving",
        icon: <Smartphone className="h-6 w-6 text-primary" />
    }
];

export default function HeroSection() {
    return (
        <section className="relative w-full overflow-hidden bg-background pt-[80px]">
            <div className="absolute inset-0">
                <Particles />
            </div>
            <div className="relative z-10">
                <div className="container mx-auto px-4 py-24 md:py-32">
                    <div className="flex flex-col items-center text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="max-w-4xl"
                        >
                            <div className="mb-6">
                                <Text 
                                    label="Hello, I'm" 
                                    className="text-xl md:text-2xl text-muted-foreground mb-2" 
                                />
                                <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
                                    Anindya Ratna Paramitha
                                </h1>
                                <Text 
                                    label="Computer Science Student & Developer" 
                                    className="text-2xl md:text-3xl text-primary font-semibold" 
                                />
                            </div>
                            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                                Computer Science student at University of Brawijaya with experience in web development, 
                                computer vision research, and graphic design. Passionate about combining technology with creative solutions.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                                <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={() => {
                                    const element = document.querySelector('#projects');
                                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                                }}>
                                    View My Work
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                                <Button size="lg" variant="outline">
                                    <Download className="mr-2 h-5 w-5" />
                                    Download CV
                                </Button>
                            </div>
                            <div className="flex gap-4 justify-center">
                                <Button size="sm" variant="ghost" className="p-2" asChild>
                                    <a href="https://github.com/nindyaratnaa" target="_blank" rel="noopener noreferrer">
                                        <Github className="h-5 w-5" />
                                    </a>
                                </Button>
                                <Button size="sm" variant="ghost" className="p-2" asChild>
                                    <a href="https://linkedin.com/in/nindyaratnaa" target="_blank" rel="noopener noreferrer">
                                        <Linkedin className="h-5 w-5" />
                                    </a>
                                </Button>
                                <Button size="sm" variant="ghost" className="p-2" onClick={() => {
                                    const element = document.querySelector('#contact');
                                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                                }}>
                                    <Mail className="h-5 w-5" />
                                </Button>
                            </div>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 w-full max-w-4xl"
                        >
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                    className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-border/50 hover:border-primary/20"
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        {stat.icon}
                                        <div className="text-3xl font-bold text-primary">{stat.number}</div>
                                    </div>
                                    <div className="space-y-1">
                                        <div className="font-semibold text-foreground">{stat.label}</div>
                                        <div className="text-sm text-muted-foreground">{stat.description}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}