import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Send, Loader2 } from "lucide-react";

const FORMSPREE_URL = "https://formspree.io/f/xlggeeqe";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  return (
    <section id="contact" className="py-28 bg-background relative overflow-hidden">
      {/* subtle glow */}
      <div className="absolute top-1/3 left-1/2 w-[500px] h-[500px] bg-primary/10 blur-[140px] rounded-full -translate-x-1/2 -z-10" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Let’s Work Together
          </h2>
          <p className="text-muted-foreground text-lg">
            Have a project in mind? Send me a message.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-xl border border-border/50 bg-card/70 backdrop-blur-xl p-8"
          >
            <h3 className="text-2xl font-semibold mb-6">Send a message</h3>

            <form
              className="space-y-6"
              onSubmit={async (e) => {
                e.preventDefault();
                setStatus("loading");

                const form = e.target as HTMLFormElement;
                const formData = new FormData(form);

                try {
                  const res = await fetch(FORMSPREE_URL, {
                    method: "POST",
                    body: formData,
                    headers: { Accept: "application/json" },
                  });

                  if (res.ok) {
                    setStatus("success");
                    form.reset();
                  } else {
                    setStatus("error");
                  }
                } catch {
                  setStatus("error");
                }
              }}
            >
              <div className="grid md:grid-cols-2 gap-4">
                <Input name="firstName" placeholder="First name" required />
                <Input name="lastName" placeholder="Last name" required />
              </div>

              <Input name="email" type="email" placeholder="Email address" required />
              <Input name="subject" placeholder="Subject" required />
              <Textarea name="message" placeholder="Tell me about your project..." required />

              <Button
                type="submit"
                className="w-full"
                disabled={status === "loading"}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>

              {status === "success" && (
                <p className="text-green-500 text-sm mt-2">
                  ✅ Message sent. I’ll reply soon.
                </p>
              )}

              {status === "error" && (
                <p className="text-red-500 text-sm mt-2">
                  ❌ Failed to send message. Please try again.
                </p>
              )}
            </form>
          </motion.div>

          {/* INFO */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="rounded-xl border border-border/50 bg-card/70 backdrop-blur-xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Contact Info</h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-lg">
                    <Mail />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">nindyaratnaa@gmail.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-lg">
                    <MapPin />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">Indonesia — Remote friendly</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border/50 bg-card/70 backdrop-blur-xl p-8">
              <h3 className="text-2xl font-semibold mb-4">Connect</h3>
              <div className="flex gap-4">
                <Button variant="outline" className="flex-1" asChild>
                  <a href="https://github.com/nindyaratnaa" target="_blank">GitHub</a>
                </Button>
                <Button variant="outline" className="flex-1" asChild>
                  <a href="https://linkedin.com/in/nindyaratnaa" target="_blank">LinkedIn</a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
