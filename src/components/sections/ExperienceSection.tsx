import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
    {
        title: "Computer Vision Researcher",
        company: "University of Brawijaya - BRONE Humanoid Research Team",
        location: "Malang, East Java, Indonesia",
        period: "Nov 2025 - Present",
        description: "Conducting computer vision research focused on detecting University of Brawijaya affiliates based on visual attributes.",
        achievements: [
            "Developed and experimented with image classification and object detection models",
            "Prepared and labeled custom image datasets for model training and evaluation",
            "Applied machine learning, computer vision, and data preprocessing concepts",
            "Explored system extension toward individual identity recognition"
        ]
    },
    {
        title: "Web Developer",
        company: "Bina Lukis Mitra",
        location: "Kediri, East Java, Indonesia",
        period: "Dec 2024 - Present",
        description: "Independently developing a responsive website for Bina Lukis Mitra, currently in development phase.",
        achievements: [
            "Designed and implemented frontend architecture with focus on usability and clean UI",
            "Implemented backend integration to support core website functionality",
            "Translated organizational needs into functional features and structured layouts",
            "Applied best practices in UI/UX, performance optimization, and maintainable code"
        ]
    },
    {
        title: "IT Intern",
        company: "Hellocation",
        location: "Remote",
        period: "Sep 2025 - Present",
        description: "Optimizing website performance and handling technical maintenance tasks.",
        achievements: [
            "Optimized website performance including loading speed and efficiency",
            "Identified and fixed bugs and technical issues",
            "Handled livestreaming to social media platforms",
            "Managed and maintained server infrastructure"
        ]
    },
    {
        title: "Basic Programming Lab Assistant",
        company: "Faculty of Computer Science (FILKOM) University of Brawijaya",
        location: "Malang, East Java, Indonesia",
        period: "Aug 2025 - Dec 2025",
        description: "Assisted in teaching Basic Java Programming from fundamentals to Object-Oriented Programming during lab sessions.",
        achievements: [
            "Guided and mentored 30+ students per class through hands-on coding practices",
            "Provided debugging support and code reviews for 100+ programming tasks",
            "Supported 10+ practicum sessions ensuring smooth lab execution",
            "Helped students transition from basic syntax to structured OOP-based Java programs"
        ]
    },
    {
        title: "Media and Communications Staff",
        company: "DPM FILKOM UB",
        location: "Brawijaya University",
        period: "Jan 2025 - Dec 2025",
        description: "Created and managed visual content for DPM FILKOM's social media platforms and digital communications.",
        achievements: [
            "Created visual content for social media platforms (feeds, stories, posters)",
            "Designed and edited graphic materials including mascots and visual identities",
            "Contributed to digital communication strategies for institutional messages",
            "Maintained design consistency and reinforced DPM's branding across platforms"
        ]
    },
    {
        title: "Head of Events Division",
        company: "KBMDSI FILKOM UB - IT FEST 2025",
        location: "Malang, East Java, Indonesia",
        period: "Apr 2025 - Aug 2025",
        description: "Led a team of 10 members in planning and executing the main event of IT FEST 2025.",
        achievements: [
            "Coordinated 4 major sessions (Opening, Final Pitching, Judging, and Awarding)",
            "Oversaw scheduling and rundown adjustments in real-time",
            "Led cross-divisional collaboration with 5+ related divisions",
            "Successfully managed event attended by 10 teams"
        ]
    }
];

export default function ExperienceSection() {
    return (
        <section id="experience" className="py-20 bg-muted/50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Experience
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        My professional journey
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-card p-6 rounded-lg shadow-sm border-l-4 border-primary"
                        >
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-semibold text-foreground">
                                        {exp.title}
                                    </h3>
                                    <p className="text-primary font-medium">{exp.company}</p>
                                </div>
                                <div className="flex flex-col md:items-end text-sm text-muted-foreground mt-2 md:mt-0">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="h-4 w-4" />
                                        {exp.period}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <MapPin className="h-4 w-4" />
                                        {exp.location}
                                    </div>
                                </div>
                            </div>
                            <p className="text-muted-foreground mb-4">{exp.description}</p>
                            <ul className="space-y-2">
                                {exp.achievements.map((achievement, achIndex) => (
                                    <li key={achIndex} className="flex items-start gap-2">
                                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                        <span className="text-muted-foreground">{achievement}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}