import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        title: "ReuseHub – Sustainable Goods Exchange Platform",
        description: "Web-based platform that enables users to post, search, and exchange reusable items to promote sustainability and reduce waste",
        image: "/api/placeholder/400/250",
        technologies: ["HTML5", "Tailwind CSS", "JavaScript", "PHP", "MySQL"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/nindyaratnaa/ReuseHub",
        period: "Oct 2025 - Dec 2025",
        role: "Front-End Developer & Back-End Assistant"
    },
    {
        title: "Bina Lukis Mitra Website",
        description: "Responsive website development for art organization with focus on usability and clean UI",
        image: "/api/placeholder/400/250",
        technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/nindyaratnaa/bina-lukis-mitra"
    },
    {
        title: "Computer Vision Research",
        description: "Image classification and object detection models for person identification using PyTorch",
        image: "/api/placeholder/400/250",
        technologies: ["Python", "PyTorch", "Computer Vision", "Machine Learning"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/nindyaratnaa/cv-research"
    },
    {
        title: "DPM FILKOM Visual Content",
        description: "Social media content design and visual identity materials for student organization",
        image: "/api/placeholder/400/250",
        technologies: ["Figma", "Graphic Design", "Visual Identity", "Social Media"],
        liveUrl: "https://instagram.com/dpmfilkomub",
        githubUrl: "https://github.com/nindyaratnaa/dmp-designs"
    }
];

export default function ProjectsSection() {
    return (
        <section id="projects" className="py-20 bg-muted/50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        My Projects
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        Here are some of the projects I've worked on
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="aspect-video bg-muted"></div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-semibold text-foreground">
                                        {project.title}
                                    </h3>
                                    {project.period && (
                                        <span className="text-xs text-muted-foreground">
                                            {project.period}
                                        </span>
                                    )}
                                </div>
                                {project.role && (
                                    <p className="text-sm text-primary font-medium mb-2">
                                        {project.role}
                                    </p>
                                )}
                                <p className="text-muted-foreground mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-2 py-1 bg-primary/10 text-primary text-sm rounded"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-2">
                                    <Button size="sm" variant="outline" asChild>
                                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink className="h-4 w-4 mr-2" />
                                            Live Demo
                                        </a>
                                    </Button>
                                    <Button size="sm" variant="outline" asChild>
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                            <Github className="h-4 w-4 mr-2" />
                                            Code
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}