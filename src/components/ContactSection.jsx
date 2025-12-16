import { useState } from "react";
import { Instagram, Linkedin, Mail, MapPin, Phone, Facebook, Twitter, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

export const ContactSection = () => {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    setSending(true);

    emailjs
      .sendForm(
        "service_nvmx9r5",     // Replace with your EmailJS Service ID
        "template_fii1ash",     // Replace with your EmailJS Template ID
        form,
        "zZvNP0ejMOExAsSTs"     // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          toast.success("Message sent ✅ Thank you for your message — I’ll get back to you soon!");
          form.reset();
          setSending(false);
        },
        (error) => {
          toast.error("Oops! ❌ Something went wrong. Please try again later.");
          console.error("EmailJS error:", error.text);
          setSending(false);
        }
      );
  };

  return (
    <section className="py-24 px-4 relative bg-secondary/30" id="contact">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind and want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a href="mailto:jeremiahayoola350@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    jeremiahayoola350@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a href="tel:09029246324" className="text-muted-foreground hover:text-primary transition-colors">
                    09029246324
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">Lagos, Nigeria</p>
                </div>
              </div>

              {/* Socials */}
              <div className="pt-4">
                <h4 className="font-medium mb-4">Connect With Me</h4>
                <div className="flex space-x-4">
                  <a href="#" target="_blank" className="hover:text-primary transition-colors"><Linkedin /></a>
                  <a href="#" target="_blank" className="hover:text-primary transition-colors"><Twitter /></a>
                  <a href="https://www.instagram.com/ayoola_jeremiah/" target="_blank" className="hover:text-primary transition-colors"><Instagram /></a>
                  <a href="https://www.facebook.com/jeremiah.abiona.98" target="_blank" className="hover:text-primary transition-colors"><Facebook /></a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Type your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={sending}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2",
                  sending ? "opacity-50 cursor-not-allowed" : ""
                )}
              >
                {sending ? "Sending..." : "Send Message"} <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
