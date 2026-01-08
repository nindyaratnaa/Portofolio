import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certifications = [
    {
        title: "Belajar Back-End Pemula dengan JavaScript",
        issuer: "Dicoding Indonesia",
        date: "Dec 2025",
        credentialId: "GRX5JEY4YX0M",
        category: "Backend Development"
    },
    {
        title: "Belajar Dasar AI",
        issuer: "Dicoding Indonesia",
        date: "Dec 2025",
        credentialId: "ERZR2JD72PYV",
        category: "Artificial Intelligence"
    },
    {
        title: "Belajar Dasar Data Science",
        issuer: "Dicoding Indonesia",
        date: "Dec 2025",
        credentialId: "07Z6JED2JXQR",
        category: "Data Science"
    },
    {
        title: "Belajar Dasar Pemrograman JavaScript",
        issuer: "Dicoding Indonesia",
        date: "Dec 2025",
        credentialId: "L4PQ2JM0OZO1",
        category: "Programming"
    },
    {
        title: "Certificate of Accomplishment Java (Basic)",
        issuer: "HackerRank",
        date: "Mar 2025",
        credentialId: "1D196A75E51A",
        category: "Programming"
    },
    {
        title: "Belajar Dasar Cloud dan Gen AI di AWS",
        issuer: "Dicoding Indonesia",
        date: "Jun 2025",
        credentialId: "07Z63277JZQR",
        category: "Cloud Computing"
    }
];

export default function CertificationsSection() {
    return (
        <section id="certifications" className="py-20 bg-muted/50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Certifications
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        Professional certifications and achievements
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div className="text-primary p-2 bg-primary/10 rounded-lg">
                                    <Award className="h-5 w-5" />
                                </div>
                                <div className="flex-1">
                                    <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded mb-2">
                                        {cert.category}
                                    </span>
                                    <h3 className="font-semibold text-foreground text-sm mb-2">
                                        {cert.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm mb-1">
                                        {cert.issuer}
                                    </p>
                                    <p className="text-muted-foreground text-xs">
                                        {cert.date} • ID: {cert.credentialId}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}