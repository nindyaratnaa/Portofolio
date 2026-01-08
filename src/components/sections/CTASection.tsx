import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
    return (
        <section className="py-20 bg-primary/5">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Let's Work Together
                    </h2>
                    <p className="text-xl text-muted-foreground mb-8">
                        I'm always interested in new opportunities and exciting projects. 
                        Let's discuss how we can bring your ideas to life.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={() => {
                            const element = document.querySelector('#contact');
                            if (element) element.scrollIntoView({ behavior: 'smooth' });
                        }}>
                            Get In Touch
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button size="lg" variant="outline" onClick={() => {
                            const element = document.querySelector('#projects');
                            if (element) element.scrollIntoView({ behavior: 'smooth' });
                        }}>
                            View Projects
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}