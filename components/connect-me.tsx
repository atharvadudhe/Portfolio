"use client"

import { useState, type FormEvent } from "react"
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

interface ContactData {
  email: string
  phone: string
  socials: {
    github: string
    linkedin: string
    twitter: string
  }
}

interface ConnectMeProps {
  contact: ContactData
}

export default function ConnectMe({ contact }: ConnectMeProps) {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "", // spam protection
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Honeypot check
    if (formData.honeypot) {
      return
    }

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      })
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    })

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      honeypot: "",
    })

    setIsSubmitting(false)
  }

  const socialLinks = [
    {
      name: "GitHub",
      url: contact.socials.github,
      icon: Github,
      color: "hover:text-[#6C9EFF]",
    },
    {
      name: "LinkedIn",
      url: contact.socials.linkedin,
      icon: Linkedin,
      color: "hover:text-[#6C9EFF]",
    }
  ]

  return (
    <section id="connect" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Let&apos;s Connect</h2>
        <p className="text-center text-[#6B7280] mb-12 max-w-2xl mx-auto text-pretty">
          Have a project in mind or just want to chat? Feel free to reach out through any of the channels below or send
          me a message directly.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info & Socials */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>

              <div className="space-y-4">
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-3 text-[#6B7280] hover:text-[#6C9EFF] transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6C9EFF] rounded-md p-2"
                  aria-label={`Email: ${contact.email}`}
                >
                  <div className="bg-[#6C9EFF]/10 p-3 rounded-lg group-hover:bg-[#6C9EFF]/20 transition-colors">
                    <Mail className="h-5 w-5 text-[#6C9EFF]" />
                  </div>
                  <span>{contact.email}</span>
                </a>

                <a
                  href={`tel:${contact.phone}`}
                  className="flex items-center gap-3 text-[#6B7280] hover:text-[#6C9EFF] transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6C9EFF] rounded-md p-2"
                  aria-label={`Phone: ${contact.phone}`}
                >
                  <div className="bg-[#A18FF3]/10 p-3 rounded-lg group-hover:bg-[#A18FF3]/20 transition-colors">
                    <Phone className="h-5 w-5 text-[#A18FF3]" />
                  </div>
                  <span>{contact.phone}</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Social Links</h3>

              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-[#6C9EFF]/10 p-4 rounded-lg ${social.color} transition-all hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6C9EFF]`}
                    aria-label={`Visit ${social.name} profile`}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Honeypot field - hidden from users */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                className="sr-only"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <Input
                  id="name"
                  type="text"
                  required
                  maxLength={100}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  className="focus-visible:ring-[#6C9EFF]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  maxLength={100}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  className="focus-visible:ring-[#6C9EFF]"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  type="text"
                  maxLength={150}
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="What's this about?"
                  className="focus-visible:ring-[#6C9EFF]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <Textarea
                  id="message"
                  required
                  maxLength={1000}
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Your message..."
                  className="focus-visible:ring-[#6C9EFF] resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#6C9EFF] hover:bg-[#A18FF3] transition-colors"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>

              <div role="status" aria-live="polite" className="sr-only">
                {isSubmitting && "Sending your message..."}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
