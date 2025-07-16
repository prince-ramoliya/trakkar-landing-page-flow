import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
  FileBarChart
} from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";
import indiaFlag from "@/assets/india-flag.jpg";

const Index = () => {
  const [freeSeatsLeft] = useState(21);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border p-4 shadow-card">
        <div className="container mx-auto flex items-center justify-between">
          <span className="text-foreground font-medium">Your team's productivity dashboard – simplified.</span>
          <div className="flex gap-3">
            <Button className="btn-primary">Start Free Trial</Button>
            <Button variant="outline" className="btn-secondary">Book a Demo</Button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-gradient-accent text-foreground border-0 px-4 py-2">
                  <img src={indiaFlag} alt="India" className="w-4 h-4 mr-2" />
                  #MadeInIndia | Free for 1st 100 Orgs
                </Badge>
                
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="highlight-orange">Track</span> Time.{" "}
                  <span className="highlight-orange">Boost</span> Productivity.
                </h1>
                
                <p className="text-xl text-muted-foreground max-w-lg">
                  Smart, affordable time tracking built for freelancers, teams, and agencies in India.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-primary text-lg">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  className="btn-secondary text-lg"
                  onClick={() => scrollToSection('how-it-works')}
                >
                  <PlayCircle className="mr-2 h-5 w-5" />
                  See How It Works
                </Button>
              </div>
            </div>

            {/* Right Column - Dashboard Preview */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-glow border border-border">
                <img 
                  src={heroDashboard} 
                  alt="Trakkar Dashboard Preview" 
                  className="w-full h-auto"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Live Preview
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem → Solution Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Why Traditional Time Tracking <span className="text-destructive">Fails</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Problems */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-destructive mb-8">Common Problems:</h3>
              
              {[
                { icon: XCircle, title: "Manual logs = human errors", desc: "Employees forget to track time accurately" },
                { icon: XCircle, title: "No team activity overview", desc: "Managers can't see real-time productivity" },
                { icon: XCircle, title: "Expensive tools not built for Indian teams", desc: "Foreign solutions cost too much for local businesses" }
              ].map((problem, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-destructive/10 rounded-2xl border border-destructive/20">
                  <problem.icon className="h-6 w-6 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-destructive mb-2">{problem.title}</h4>
                    <p className="text-muted-foreground">{problem.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Solutions */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary mb-8">Trakkar's Solutions:</h3>
              
              {[
                { icon: CheckCircle, title: "Smart auto-tracking with screenshot capture", desc: "Automatic time logging with visual proof of work" },
                { icon: CheckCircle, title: "Real-time team insights", desc: "Live dashboard showing team productivity and activity" },
                { icon: CheckCircle, title: "₹70/user pricing, Made for India", desc: "Affordable pricing designed for Indian market needs" }
              ].map((solution, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-primary/10 rounded-2xl border border-primary/20">
                  <solution.icon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary mb-2">{solution.title}</h4>
                    <p className="text-muted-foreground">{solution.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Everything You Need to <span className="text-gradient">Track & Optimize</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive time tracking features designed for modern teams
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              { icon: Timer, title: "Smart Time Capture", desc: "Automatic time tracking with manual override options", color: "text-brand-orange" },
              { icon: Camera, title: "Screenshot Monitoring", desc: "Visual proof of work with customizable capture intervals", color: "text-brand-blue" },
              { icon: Target, title: "Project & Task Tracking", desc: "Organize work by projects and track individual tasks", color: "text-brand-orange" },
              { icon: Calendar, title: "Leave Management", desc: "Handle time-off requests and attendance tracking", color: "text-brand-blue" },
              { icon: PieChart, title: "Reports & Analytics", desc: "Detailed insights into productivity and time usage", color: "text-brand-orange" },
              { icon: UserCheck, title: "Team & User Control", desc: "Manage permissions and team access levels", color: "text-brand-blue" }
            ].map((feature, index) => (
              <Card key={index} className="feature-card group cursor-pointer">
                <div className="text-center space-y-4">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-accent ${feature.color}`}>
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Start in <span className="highlight-orange">3 Simple Steps</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
              <div key={index} className="text-center space-y-6 relative">
                <div className="relative">
                  <div className="w-20 h-20 bg-primary rounded-3xl flex items-center justify-center mx-auto mb-4 glow-orange">
                    <step.icon className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-2xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
                {index < 2 && (
                  <ArrowRight className="h-6 w-6 text-muted-foreground mx-auto mt-8 hidden md:block absolute -right-12 top-8" />
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="btn-primary text-lg">
              Get Started – Free for 30 Days
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Simple Pricing for <span className="text-gradient">Every Team</span>
            </h2>
          </div>

          <div className="max-w-md mx-auto">
            <Card className="feature-card text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-hero"></div>
              
              <div className="space-y-6 p-8">
                <div>
                  <div className="text-5xl font-bold text-primary mb-2">₹70</div>
                  <div className="text-muted-foreground">per user per month</div>
                </div>

                <div className="space-y-3">
                  {[
                    "All features included",
                    "No hidden charges", 
                    "Cancel anytime",
                    "24/7 support",
                    "Made in India 🇮🇳"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center justify-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="btn-primary w-full text-lg">
                  Start Free Trial
                </Button>
              </div>
            </Card>

            {/* Free Seats Counter */}
            <div className="mt-8 p-6 bg-primary/10 rounded-2xl border border-primary/20">
              <div className="text-center space-y-3">
                <div className="text-lg font-semibold">🎁 Free for first 100 organizations</div>
                <div className="flex items-center gap-2 justify-center">
                  <div className="flex-1 bg-muted rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full" 
                      style={{ width: `${((100 - freeSeatsLeft) / 100) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div className="text-primary font-bold">{freeSeatsLeft} Free Seats Left</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              What Teams Say About <span className="highlight-orange">Trakkar</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Priya Sharma",
                role: "Project Manager",
                company: "TechFlow Solutions",
                feedback: "We switched from TimeDoctor to Trakkar — and never looked back. The Indian pricing makes it perfect for our team.",
                rating: 5
              },
              {
                name: "Rahul Gupta", 
                role: "Freelance Designer",
                company: "RG Creative Studio",
                feedback: "Finally, a time tracker that understands Indian work culture. Screenshot monitoring helps me show clients my progress.",
                rating: 5
              },
              {
                name: "Anjali Patel",
                role: "CEO",
                company: "Digital Marketing Hub",
                feedback: "Trakkar has transformed how we manage our remote team. The insights are incredible for just ₹70 per user!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="feature-card">
                <div className="space-y-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground italic">"{testimonial.feedback}"</p>
                  
                  <div className="border-t border-border pt-4">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Badge className="bg-gradient-accent text-foreground border-0 px-6 py-3 text-lg">
              2,157+ happy users | Built by Angrio Technologies 🇮🇳
            </Badge>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Got <span className="text-gradient">Questions?</span>
            </h2>
          </div>

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
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-2xl px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <Button variant="outline" className="btn-secondary">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-16 mb-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo & Tagline */}
            <div className="md:col-span-2 space-y-4">
              <div className="text-2xl font-bold text-gradient">Trakkar</div>
              <p className="text-muted-foreground max-w-md">
                Smarter Time Management for Teams & Freelancers.
              </p>
              <div className="flex items-center gap-2">
                <img src={indiaFlag} alt="Made in India" className="w-6 h-6" />
                <span className="text-sm text-muted-foreground">Made in India with ❤️</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Features</div>
                <div>Pricing</div>
                <div>Contact</div>
                <div>Login</div>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-3 text-sm text-muted-foreground">
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

          <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
            Copyright © 2025 Angrio Technologies. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
