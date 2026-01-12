import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Figma, Instagram } from "lucide-react";

const linkIcons = {
  github: Github,
  figma: Figma,
  live: ExternalLink,
  instagram: Instagram
};

const projects = [
    {
        title: "ReuseHub – Exchange Platform",
        description: "Web-based platform that enables users to post, search, and exchange reusable items to promote sustainability and reduce waste",
        technologies: ["HTML5", "Tailwind CSS", "JavaScript", "PHP", "MySQL"],
        role: "Front-End Developer & Back-End Assistant",
        period: "Oct 2025 - Dec 2025",
        links: [
            { type: "github", url: "https://github.com/nindyaratnaa/ReuseHub", label: "Code" }
            //   { type: "figma", url: "...", label: "Design" },
            //   { type: "live", url: "...", label: "Website" },
            //   { type: "instagram", url: "...", label: "Content" }
        ]
    },
    {
        title: "Bina Lukis Mitra Website",
        description: "Responsive website development for art organization with focus on usability and clean UI",
        technologies: ["HTML5", "Tailwind CSS", "JavaScript", "Responsive Design"],
        role: "Website Developer",
        period: "Aug 2024 - Present",
        links: [
            { type: "github", url: "https://github.com/nindyaratnaa/Bina-Lukis", label: "Code" },
            { type: "instagram", url: "https://www.instagram.com/binalukismitra_/", label: "Content" }
        ]
    },
    {
        title: "BRONE Research Team",
        description: "Image classification and object detection models for person identification using PyTorch",
        technologies: ["Python", "PyTorch", "Computer Vision", "Machine Learning"],
        role: "Computer Vision Researcher",
        period: "Nov 2025 - Present",
        links: [
            { type: "github", url: "https://github.com/nindyaratnaa/TryOn-Brone", label: "Code" }
        ]
    },
    {
        title: "DPM FILKOM Visual Content",
        description: "Social media content design and visual identity materials for student organization",
        technologies: ["Figma", "Graphic Design", "Visual Identity", "Social Media"],
        role: "Graphic Design",
        period: "Feb 2025 - Des 2025",
        links: [
            { type: "figma", url: "https://www.figma.com/design/b3RQmTzkZahaP69sBUClGc/Backup?node-id=31-2&t=ZJ1INVzexdoG8JnX-1", label: "Design" },
            { type: "instagram", url: "https://instagram.com/dpmfilkomub", label: "Content" }
        ]
    },

]

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
                                <div className="flex flex-wrap gap-2">
                                {project.links.map((link, i) => {
                                    const Icon = linkIcons[link.type] || ExternalLink;
                                    return (
                                    <Button key={i} size="sm" variant="outline" asChild>
                                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                                        <Icon className="h-4 w-4 mr-2" />
                                        {link.label}
                                        </a>
                                    </Button>
                                    );
                                })}
                                </div>                                
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}