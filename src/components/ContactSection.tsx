
import { useState } from "react";
import { Github, Linkedin, Mail, Send, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="h-1.5 w-20 bg-primary rounded-full mx-auto mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Have a project in mind or want to chat? Feel free to reach out through the form below 
            or connect with me on social media.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Email</h4>
                  <a 
                    href="mailto:johndeveloper@example.com" 
                    className="text-gray-600 dark:text-gray-300 hover:text-primary"
                  >
                    johndeveloper@example.com
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-4">Social Media</h4>
                <div className="flex items-center gap-4">
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={cn(
                      "flex items-center justify-center w-12 h-12 rounded-full",
                      "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300",
                      "hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors"
                    )}
                  >
                    <Github size={22} />
                  </a>
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={cn(
                      "flex items-center justify-center w-12 h-12 rounded-full",
                      "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300",
                      "hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors"
                    )}
                  >
                    <Linkedin size={22} />
                  </a>
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={cn(
                      "flex items-center justify-center w-12 h-12 rounded-full",
                      "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300",
                      "hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors"
                    )}
                  >
                    <Twitter size={22} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={cn(
                    "w-full px-4 py-3 rounded-lg",
                    "bg-gray-100 dark:bg-gray-800",
                    "border border-gray-200 dark:border-gray-700",
                    "focus:ring-2 focus:ring-primary focus:border-transparent",
                    "transition-all duration-200 outline-none"
                  )}
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={cn(
                    "w-full px-4 py-3 rounded-lg",
                    "bg-gray-100 dark:bg-gray-800",
                    "border border-gray-200 dark:border-gray-700",
                    "focus:ring-2 focus:ring-primary focus:border-transparent",
                    "transition-all duration-200 outline-none"
                  )}
                  placeholder="johndoe@example.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={cn(
                    "w-full px-4 py-3 rounded-lg",
                    "bg-gray-100 dark:bg-gray-800",
                    "border border-gray-200 dark:border-gray-700",
                    "focus:ring-2 focus:ring-primary focus:border-transparent",
                    "transition-all duration-200 outline-none resize-none"
                  )}
                  placeholder="Hello, I'd like to talk about..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-medium",
                  "bg-primary text-white hover:bg-primary/90 disabled:bg-primary/70",
                  "shadow-lg shadow-primary/20 transition-all w-full justify-center"
                )}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
