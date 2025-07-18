import { useState } from "react";
import { motion } from "framer-motion";
import InteractiveHero from "@/components/ui/hero-section-nexus";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Clock, 
  Camera, 
  BarChart3, 
  Calendar, 
  TrendingUp, 
  Users, 
  CheckCircle, 
  XCircle, 
  ArrowRight, 
  PlayCircle,
  Star,
  Phone,
  Mail,
  Shield,
  Zap,
  Target,
  Timer,
  Activity,
  PieChart,
  UserCheck,
  FileBarChart,
  AlertTriangle,
  DollarSign,
  Eye
} from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";
import indiaFlag from "@/assets/india-flag.jpg";
import { BentoGrid, type BentoItem } from "@/components/ui/bento-grid";
import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects";
import { PricingCard } from "@/components/ui/pricing-card";
import { TestimonialsSection } from "@/components/ui/testimonials-with-marquee";

const Index = () => {
  const [freeSeatsLeft] = useState(21);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Problem and Solution data for cards
  const problemSolutionData = [
    {
      type: "problem",
      title: "Manual logs = human errors",
      description: "Employees forget to track time accurately",
      icon: <AlertTriangle className="w-6 h-6 text-red-400" />,
    },
    {
      type: "solution",
      title: "Smart auto-tracking with screenshot capture",
      description: "Automatic time logging with visual proof of work",
      icon: <Timer className="w-6 h-6 text-blue-400" />,
    },
    {
      type: "problem",
      title: "No team activity overview",
      description: "Managers can't see real-time productivity",
      icon: <Eye className="w-6 h-6 text-red-400" />,
    },
    {
      type: "solution",
      title: "Real-time team insights",
      description: "Live dashboard showing team productivity and activity",
      icon: <BarChart3 className="w-6 h-6 text-blue-400" />,
    },
    {
      type: "problem",
      title: "Expensive tools not built for Indian teams",
      description: "Foreign solutions cost too much for local businesses",
      icon: <DollarSign className="w-6 h-6 text-red-400" />,
    },
    {
      type: "solution",
      title: "₹70/user pricing, Made for India",
      description: "Affordable pricing designed for Indian market needs",
      icon: <Shield className="w-6 h-6 text-blue-400" />,
    },
  ];

  // Testimonials data for the new marquee section
  const testimonials = [
    {
      author: {
        name: "Priya Sharma",
        handle: "@priyatech",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
      },
      text: "We switched from TimeDoctor to Trakkar — and never looked back. The Indian pricing makes it perfect for our team.",
    },
    {
      author: {
        name: "Rahul Gupta",
        handle: "@rahuldesign",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      },
      text: "Finally, a time tracker that understands Indian work culture. Screenshot monitoring helps me show clients my progress.",
    },
    {
      author: {
        name: "Anjali Patel",
        handle: "@anjaliCEO",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
      },
      text: "Trakkar has transformed how we manage our remote team. The insights are incredible for just ₹70 per user!",
    },
    {
      author: {
        name: "Vikram Singh",
        handle: "@vikramdev",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
      },
      text: "The automatic screenshot feature is a game-changer. No more disputes about work hours with clients.",
    },
    {
      author: {
        name: "Meera Reddy",
        handle: "@meeramarketing",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
      },
      text: "Best productivity tool for Indian startups. The pricing is fair and the features are exactly what we needed.",
    }
  ];

  return (
    <div className="min-h-screen bg-[#111111] text-gray-300">
      {/* Hero Section */}
      <InteractiveHero />

      {/* Sticky CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#1a1a1a] border-t border-gray-700/50 p-4 shadow-xl backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between">
          <span className="text-gray-300 font-medium">Your team's productivity dashboard – simplified.</span>
          <div className="flex gap-3">
            <motion.button
              className="bg-blue-500 text-white px-6 py-2 rounded-md text-sm font-semibold hover:bg-blue-600 transition-colors duration-200 shadow-sm hover:shadow-md"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              Start Free Trial
            </motion.button>
            <motion.button
              className="border border-gray-600 text-gray-300 px-6 py-2 rounded-md text-sm font-semibold hover:bg-gray-700/30 transition-colors duration-200"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              Book a Demo
            </motion.button>
          </div>
        </div>
      </div>

      {/* Problem → Solution Section with Cards */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-semibold text-white mb-6">
              Why Traditional Time Tracking <span className="text-red-400">Fails</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Common problems vs. Trakkar's innovative solutions
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {problemSolutionData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <Card className={`h-full border transition-all duration-300 ${
                  item.type === 'problem' 
                    ? 'bg-red-950/20 border-red-800/30 hover:border-red-700/50' 
                    : 'bg-blue-950/20 border-blue-800/30 hover:border-blue-600/50'
                }`}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className={`p-2 rounded-lg ${
                        item.type === 'problem' 
                          ? 'bg-red-900/30' 
                          : 'bg-blue-900/30'
                      }`}>
                        {item.icon}
                      </div>
                      <Badge 
                        variant="secondary" 
                        className={`text-xs ${
                          item.type === 'problem' 
                            ? 'bg-red-800/50 text-red-200 border-red-700/50' 
                            : 'bg-blue-800/50 text-blue-200 border-blue-700/50'
                        }`}
                      >
                        {item.type === 'problem' ? 'Problem' : 'Solution'}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg font-semibold text-white leading-tight">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Feature Highlights with Hover Effects */}
      <section className="py-20 bg-[#111111]">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-semibold text-white mb-6">
              Everything You Need to <span className="text-blue-500">Track & Optimize</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive time tracking features designed for modern teams
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <FeaturesSectionWithHoverEffects />
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-semibold text-white mb-6">
              Start in <span className="text-blue-500">3 Simple Steps</span>
            </h2>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
            viewport={{ once: true }}
          >
            {[
              { 
                step: "01", 
                icon: Users, 
                title: "Create & Invite", 
                desc: "Set up your organization and invite your team members" 
              },
              { 
                step: "02", 
                icon: Activity, 
                title: "Start Tracking", 
                desc: "Begin tracking time with manual or automatic modes" 
              },
              { 
                step: "03", 
                icon: FileBarChart, 
                title: "Get Insights", 
                desc: "Access productivity reports and screenshots" 
              }
            ].map((step, index) => (
              <motion.div 
                key={index} 
                className="text-center space-y-6 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <div className="w-20 h-20 bg-blue-500 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/30">
                    <step.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-white">{step.title}</h3>
                <p className="text-gray-400">{step.desc}</p>
                {index < 2 && (
                  <ArrowRight className="h-6 w-6 text-gray-500 mx-auto mt-8 hidden md:block absolute -right-12 top-8" />
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="bg-blue-500 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-600 transition-colors duration-200 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              Get Started – Free for 30 Days
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section with New PricingCard */}
      <section className="py-20 bg-[#111111]">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-semibold text-white mb-6">
              Simple Pricing for <span className="text-blue-500">Every Team</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <PricingCard
              title="Professional Plan"
              description="Perfect for teams who want to boost productivity and track time efficiently."
              price={70}
              features={[
                {
                  title: "Time Tracking Features",
                  items: [
                    "Automatic screenshot capture",
                    "Manual time logging",
                    "Real-time activity monitoring",
                    "Productivity insights",
                    "Team dashboard",
                    "Project management"
                  ],
                },
                {
                  title: "Team Management",
                  items: [
                    "Unlimited team members",
                    "Role-based permissions",
                    "Custom reports",
                    "Data export options",
                    "24/7 customer support",
                    "Made in India 🇮🇳"
                  ],
                },
              ]}
              buttonText="Start Free Trial"
              onButtonClick={() => console.log("Start Free Trial clicked")}
            />
          </motion.div>

          {/* Free Seats Counter */}
          <div className="mt-12 max-w-md mx-auto">
            <div className="p-6 bg-blue-500/10 rounded-xl border border-blue-500/20">
              <div className="text-center space-y-3">
                <div className="text-lg font-semibold text-white">🎁 Free for first 100 organizations</div>
                <div className="flex items-center gap-2 justify-center">
                  <div className="flex-1 bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full" 
                      style={{ width: `${((100 - freeSeatsLeft) / 100) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div className="text-blue-500 font-bold">{freeSeatsLeft} Free Seats Left</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials with Marquee */}
      <TestimonialsSection
        title="What Teams Say About Trakkar"
        description="Join 2,157+ happy users who trust Trakkar for their time tracking needs"
        testimonials={testimonials}
        className="bg-[#0a0a0a]"
      />

      {/* FAQ Section */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-semibold text-white mb-6">
              Got <span className="text-blue-500">Questions?</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "How does screenshot tracking work?",
                  answer: "Trakkar captures screenshots at customizable intervals (every 3, 5, or 10 minutes) when time tracking is active. Screenshots are securely stored and only visible to authorized team members. You can blur sensitive information and control who sees what."
                },
                {
                  question: "Is my data secure?",
                  answer: "Absolutely. We use enterprise-grade encryption for all data transmission and storage. Screenshots and time data are stored on secure Indian servers with regular backups. We comply with data protection standards and never share your information."
                },
                {
                  question: "What happens after the free trial?",
                  answer: "After your 30-day free trial, you can continue with our ₹70/user per month plan. No credit card required for the trial. You can cancel anytime without any penalties or hidden fees."
                },
                {
                  question: "Can I manage multiple teams?",
                  answer: "Yes! Trakkar supports multiple organizations and teams. You can create different projects, assign team members to specific projects, and manage permissions for each team separately."
                },
                {
                  question: "Do you offer customer support?",
                  answer: "We provide 24/7 customer support via email and chat. Our Indian support team understands local business needs and can help you in Hindi or English. We also offer onboarding assistance for larger teams."
                }
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-gray-700/50 rounded-xl px-6 bg-[#1a1a1a]">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline text-white">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 mb-4">Still have questions?</p>
            <motion.button
              className="border border-gray-600 text-gray-300 px-6 py-2 rounded-md font-semibold hover:bg-gray-700/30 transition-colors duration-200"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] border-t border-gray-700/50 py-16 mb-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo & Tagline */}
            <div className="md:col-span-2 space-y-4">
              <div className="text-2xl font-bold text-blue-500">Trakkar</div>
              <p className="text-gray-400 max-w-md">
                Smarter Time Management for Teams & Freelancers.
              </p>
              <div className="flex items-center gap-2">
                <img src={indiaFlag} alt="Made in India" className="w-6 h-6" />
                <span className="text-sm text-gray-400">Made in India with ❤️</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="hover:text-blue-500 cursor-pointer transition-colors">Features</div>
                <div className="hover:text-blue-500 cursor-pointer transition-colors">Pricing</div>
                <div className="hover:text-blue-500 cursor-pointer transition-colors">Contact</div>
                <div className="hover:text-blue-500 cursor-pointer transition-colors">Login</div>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Contact</h4>
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  +91 8141067657
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  jainik.patel@trakkar.in
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-400">
            Copyright © 2025 Angrio Technologies. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
