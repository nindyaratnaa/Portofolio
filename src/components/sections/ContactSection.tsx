import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Send } from "lucide-react";

export default function ContactSection() {
    return (
        <section id="contact" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Let's Work Together
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        Have a project in mind? I'd love to hear about it
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-card p-8 rounded-lg shadow-sm"
                    >
                        <h3 className="text-2xl font-bold text-foreground mb-6">
                            Send Me a Message
                        </h3>
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-1">
                                        First Name
                                    </label>
                                    <Input 
                                        id="firstName" 
                                        placeholder="Your first name" 
                                        className="w-full"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-1">
                                        Last Name
                                    </label>
                                    <Input 
                                        id="lastName" 
                                        placeholder="Your last name" 
                                        className="w-full"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                                    Email
                                </label>
                                <Input 
                                    id="email" 
                                    type="email" 
                                    placeholder="your.email@example.com" 
                                    className="w-full"
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1">
                                    Subject
                                </label>
                                <Input 
                                    id="subject" 
                                    placeholder="Project inquiry, collaboration, etc." 
                                    className="w-full"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                                    Message
                                </label>
                                <Textarea 
                                    id="message" 
                                    placeholder="Tell me about your project..." 
                                    className="w-full min-h-[150px]"
                                />
                            </div>
                            <Button className="w-full bg-primary hover:bg-primary/90">
                                Send Message
                                <Send className="ml-2 h-4 w-4" />
                            </Button>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-8"
                    >
                        <div className="bg-card p-8 rounded-lg shadow-sm">
                            <h3 className="text-2xl font-bold text-foreground mb-6">
                                Get In Touch
                            </h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="text-primary p-2 bg-primary/10 rounded-lg">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-foreground">Email</h4>
                                        <p className="text-muted-foreground">nindyaratna@gmail.com</p>
                                        <p className="text-sm text-muted-foreground">I'll respond within 24 hours</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="text-primary p-2 bg-primary/10 rounded-lg">
                                        <MapPin className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-foreground">Location</h4>
                                        <p className="text-muted-foreground">Indonesia</p>
                                        <p className="text-sm text-muted-foreground">Open to remote work</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card p-8 rounded-lg shadow-sm">
                            <h3 className="text-2xl font-bold text-foreground mb-6">
                                Connect With Me
                            </h3>
                            <div className="flex gap-4">
                                <Button variant="outline" className="flex-1" asChild>
                                    <a href="https://github.com/nindyaratnaa" target="_blank" rel="noopener noreferrer">
                                        GitHub
                                    </a>
                                </Button>
                                <Button variant="outline" className="flex-1" asChild>
                                    <a href="https://linkedin.com/in/nindyaratnaa" target="_blank" rel="noopener noreferrer">
                                        LinkedIn
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}