import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative border-t border-border/50 bg-background overflow-hidden">
      {/* subtle glow */}
      <div className="absolute left-1/2 top-0 w-[500px] h-[300px] bg-primary/10 blur-[120px] -translate-x-1/2 -z-10" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <h3 className="text-xl font-semibold text-foreground">
              Anindya Ratna Paramitha
            </h3>
            <p className="text-muted-foreground mt-3 max-w-sm">
              Computer Vision Researcher, Web Developer, and Creative Technologist.
              Focused on building elegant, intelligent digital experiences.
            </p>

            <div className="flex gap-4 mt-6">
              <a
                href="https://github.com/nindyaratnaa"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition"
              >
                <FaGithub size={22} />
              </a>
              <a
                href="https://instagram.com/nindyaratnaa"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition"
              >
                <FaInstagram size={22} />
              </a>
              <a
                href="https://linkedin.com/in/nindyaratnaa"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition"
              >
                <FaLinkedin size={22} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-medium text-foreground mb-4">
              Explore
            </h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#about" className="hover:text-primary transition">About</a></li>
              <li><a href="#projects" className="hover:text-primary transition">Projects</a></li>
              <li><a href="#skills" className="hover:text-primary transition">Skills</a></li>
              <li><a href="#contact" className="hover:text-primary transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-medium text-foreground mb-4">
              Get in touch
            </h4>
            <p className="text-muted-foreground">
              Email me for collaboration or opportunities.
            </p>

            <a
              href="mailto:nindyaratnaa@gmail.com"
              className="inline-block mt-4 text-primary hover:underline"
            >
              nindyaratnaa@gmail.com
            </a>

            <p className="text-muted-foreground text-sm mt-4">
              Based in Indonesia — Available for remote work.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Anindya Ratna Paramitha
          </p>
          <p className="mt-4 md:mt-0">
            Built with React, Tailwind, and modern web technologies.
          </p>
        </div>
      </div>
    </footer>
  );
}
