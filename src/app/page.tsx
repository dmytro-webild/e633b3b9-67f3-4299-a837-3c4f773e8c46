"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { AlertCircle, Wrench, Droplet, Zap, Home, AlertTriangle, CheckCircle, Shield } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="medium"
      sizing="large"
      background="none"
      cardStyle="soft-shadow"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          brandName="Plumber's Crack"
          navItems={[
            { name: "Services", id: "services" },
            { name: "About", id: "about" },
            { name: "Testimonials", id: "testimonials" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "contact" }
          ]}
          bottomLeftText="Available 24/7"
          bottomRightText="emergency@plumberscrack.com"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardGallery
          title="Professional Plumbing Solutions You Can Trust"
          description="Fast, reliable plumbing repairs and installation services. Available 24/7 for emergencies. Licensed, insured, and dedicated to solving your plumbing problems."
          tag="Emergency Services"
          tagIcon={AlertCircle}
          tagAnimation="slide-up"
          buttons={[
            { text: "Call Now", href: "tel:+18005551234" },
            { text: "Request Service", href: "#contact" }
          ]}
          buttonAnimation="slide-up"
          background={{ variant: "radial-gradient" }}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=fuk64y",              imageAlt: "professional plumber working sink repair"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=oa4nvb",              imageAlt: "bathroom plumbing installation renovation"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=rx739h",              imageAlt: "kitchen sink repair plumber"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=wjgwvp",              imageAlt: "water heater installation service"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=a0plca",              imageAlt: "drain cleaning professional service"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=m993nu",              imageAlt: "pipe installation plumbing"
            }
          ]}
          mediaAnimation="slide-up"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureHoverPattern
          title="Our Plumbing Services"
          description="Comprehensive solutions for all your residential and commercial plumbing needs."
          tag="Services"
          tagAnimation="slide-up"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          features={[
            {
              icon: Wrench,
              title: "Repair & Maintenance",              description: "Fast response to leaks, burst pipes, and fixture repairs. Regular maintenance to prevent future issues."
            },
            {
              icon: Droplet,
              title: "Water Heater Service",              description: "Installation, repair, and maintenance of traditional and tankless water heaters."
            },
            {
              icon: Zap,
              title: "Drain Cleaning",              description: "Professional drain cleaning using advanced equipment to clear clogs safely and effectively."
            },
            {
              icon: Home,
              title: "Remodeling & Installation",              description: "Complete bathroom and kitchen plumbing installations for renovations and new construction."
            },
            {
              icon: AlertTriangle,
              title: "Emergency Services",              description: "24/7 emergency response for urgent plumbing issues, including weekends and holidays."
            },
            {
              icon: CheckCircle,
              title: "Inspections & Diagnostics",              description: "Thorough plumbing system inspections using camera technology to identify hidden problems."
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TestimonialAboutCard
          tag="About Us"
          tagAnimation="slide-up"
          title="Why Choose Plumber's Crack?"
          description="With over 20 years of experience serving the community, we've built our reputation on reliability, expertise, and customer satisfaction."
          subdescription="Our team of licensed, insured plumbers is committed to providing honest service, upfront pricing, and solutions that last. We treat your home with respect and take pride in every job we complete."
          icon={Shield}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=ocpz71"
          imageAlt="professional plumbing team portrait"
          mediaAnimation="slide-up"
          useInvertedBackground={true}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTen
          title="What Our Customers Say"
          description="Trusted by hundreds of satisfied homeowners and business owners throughout the region."
          textboxLayout="default"
          useInvertedBackground={false}
          testimonials={[
            {
              id: "1",              title: "Fast and Professional",              quote: "Plumber's Crack fixed our emergency leak in less than an hour. The technician was professional, clean, and explained everything. Highly recommend!",              name: "Sarah Mitchell",              role: "Homeowner",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=1hjn7x",              imageAlt: "happy female customer smiling portrait"
            },
            {
              id: "2",              title: "Great Customer Service",              quote: "Replaced our entire bathroom plumbing during a renovation. The team was punctual, skilled, and kept the mess to a minimum. Worth every penny.",              name: "Michael Chen",              role: "Business Owner",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=h510wg",              imageAlt: "professional male business portrait"
            },
            {
              id: "3",              title: "Honest and Reliable",              quote: "Had a water heater issue and they diagnosed the problem correctly. Fixed it without upselling unnecessary work. That's integrity.",              name: "Jennifer Rodriguez",              role: "Homeowner",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=nhrm1p",              imageAlt: "professional woman business portrait"
            },
            {
              id: "4",              title: "Always There When We Need Them",              quote: "Called for a 2 AM emergency pipe burst. They arrived quickly and had it fixed before morning. Best emergency service around.",              name: "David Thompson",              role: "Property Manager",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=zgcu43",              imageAlt: "male customer satisfied portrait"
            },
            {
              id: "5",              title: "Professional and Affordable",              quote: "Great upfront pricing, no hidden fees, and the work quality is outstanding. Our entire block uses them now.",              name: "Emily Watson",              role: "Homeowner",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=jt30aw",              imageAlt: "female professional portrait smile"
            },
            {
              id: "6",              title: "Exceptional Work Quality",              quote: "Installed a new main line. The workmanship is excellent and everything runs perfectly. Will definitely call them again.",              name: "Robert Johnson",              role: "Homeowner",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=kic8mm",              imageAlt: "male professional portrait satisfied"
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardFourteen
          title="Our Track Record"
          tag="By The Numbers"
          tagAnimation="slide-up"
          metrics={[
            { id: "1", value: "20+", description: "Years of Experience" },
            { id: "2", value: "5,000+", description: "Satisfied Customers" },
            { id: "3", value: "98%", description: "Customer Satisfaction" },
            { id: "4", value: "24/7", description: "Emergency Services" }
          ]}
          metricsAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Find answers to common plumbing questions and concerns."
          tag="Help & Support"
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          faqsAnimation="slide-up"
          faqs={[
            {
              id: "1",              title: "How quickly can you respond to emergencies?",              content: "We pride ourselves on rapid response times. Most emergency calls receive service within 30-60 minutes, 24/7. Call our emergency line for immediate assistance."
            },
            {
              id: "2",              title: "What areas do you service?",              content: "We service the entire metropolitan area and surrounding communities within a 25-mile radius. Call us to confirm service availability for your specific location."
            },
            {
              id: "3",              title: "Do you offer financing options?",              content: "Yes, we offer flexible financing options for larger projects. Ask about our payment plans when you schedule your service or receive your estimate."
            },
            {
              id: "4",              title: "Are your technicians licensed and insured?",              content: "Absolutely. All our technicians are fully licensed, insured, and background checked. We stand behind our work with our quality guarantee."
            },
            {
              id: "5",              title: "What warranty do you provide?",              content: "We offer a one-year warranty on parts and labor for most services. Extended warranties are available for select installations."
            },
            {
              id: "6",              title: "How can I prevent plumbing problems?",              content: "Regular maintenance is key. We recommend annual inspections, drain cleaning every 2-3 years, and proper care of fixtures. Ask us about preventive maintenance plans."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCTA
          tag="Get In Touch"
          tagAnimation="slide-up"
          title="Ready to Solve Your Plumbing Issues?"
          description="Contact us today for a free estimate or to schedule emergency service. Our friendly team is ready to help."
          background={{ variant: "gradient-bars" }}
          buttons={[
            { text: "Call Now", href: "tel:+18005551234" },
            { text: "Schedule Service", href: "#schedule" }
          ]}
          buttonAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Plumber's Crack"
          columns={[
            {
              items: [
                { label: "Services", href: "#services" },
                { label: "About Us", href: "#about" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "FAQ", href: "#faq" }
              ]
            },
            {
              items: [
                { label: "Emergency Service", href: "tel:+18005551234" },
                { label: "Schedule Service", href: "#contact" },
                { label: "Request Quote", href: "#contact" }
              ]
            },
            {
              items: [
                { label: "Phone", href: "tel:+18005551234" },
                { label: "Email", href: "mailto:emergency@plumberscrack.com" },
                { label: "Hours", href: "#" }
              ]
            },
            {
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Licensing", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
