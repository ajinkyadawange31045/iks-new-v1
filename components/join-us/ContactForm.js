'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

export default function ContactForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    interest: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value) => {
    setFormData(prev => ({ ...prev, interest: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us! We'll get back to you soon.",
      });

      setFormData({
        name: '',
        email: '',
        organization: '',
        interest: '',
        message: '',
      });

      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section className="pb-16" id="contact-form">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-serif-elegant font-bold leading-tight text-[#5c3a2a] tracking-wider mb-4">
          Contact Us
        </h2>
        <div className="mx-auto mt-3 mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-[#2d7d7d] via-[#8b4a3c] to-[#2d7d7d] opacity-80"></div>
        <p className="mt-4 text-lg text-[#8b6f5e] font-serif-body">Reach out to learn more about our work or to explore collaboration opportunities</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-2xl"
      >
        <Card className="research-card rounded-3xl shadow-xl overflow-hidden px-6 py-8 border-0">
          <CardHeader className="text-center">
            <CardTitle className="text-[#5c3a2a] font-serif-elegant font-semibold tracking-wider">Get in Touch</CardTitle>
            <CardDescription className="text-[#8b6f5e] font-serif-body">Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-[#5c3a2a] font-serif-body font-medium">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="rounded-xl research-card border border-[#8b6f5e]/30 focus:border-[#2d7d7d] focus:ring-2 focus:ring-[#2d7d7d]/30 font-serif-body"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[#5c3a2a] font-serif-body font-medium">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="rounded-xl research-card border border-[#8b6f5e]/30 focus:border-[#2d7d7d] focus:ring-2 focus:ring-[#2d7d7d]/30 font-serif-body"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="organization" className="text-[#5c3a2a] font-serif-body font-medium">Organization (Optional)</Label>
                <Input
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="rounded-xl research-card border border-[#8b6f5e]/30 focus:border-[#2d7d7d] focus:ring-2 focus:ring-[#2d7d7d]/30 font-serif-body"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="interest" className="text-[#5c3a2a] font-serif-body font-medium">Area of Interest</Label>
                <Select
                  value={formData.interest}
                  onValueChange={handleSelectChange}
                  required
                >
                  <SelectTrigger id="interest" className="rounded-xl research-card border border-[#8b6f5e]/30 focus:border-[#2d7d7d] focus:ring-2 focus:ring-[#2d7d7d]/30 font-serif-body">
                    <SelectValue placeholder="Select your area of interest" />
                  </SelectTrigger>
                  <SelectContent className="research-card">
                    <SelectItem value="research">Research Collaboration</SelectItem>
                    <SelectItem value="education">Educational Initiatives</SelectItem>
                    <SelectItem value="community">Community Membership</SelectItem>
                    <SelectItem value="volunteer">Volunteer Opportunities</SelectItem>
                    <SelectItem value="content">Content Contribution</SelectItem>
                    <SelectItem value="partnership">Institutional Partnership</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-[#5c3a2a] font-serif-body font-medium">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="rounded-xl research-card border border-[#8b6f5e]/30 focus:border-[#2d7d7d] focus:ring-2 focus:ring-[#2d7d7d]/30 font-serif-body"
                />
              </div>

              <Button type="submit" className="w-full text-white bg-gradient-to-r from-[#2d7d7d] to-[#8b4a3c] hover:from-[#4a9d9d] hover:to-[#a65a4a] transition-all duration-300 font-serif-body font-semibold shadow-md rounded-xl" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}


