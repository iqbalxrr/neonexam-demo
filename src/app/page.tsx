import { BlogGrid } from "@/components/BlogGrid";
import { CategoriesGrid } from "@/components/CategoriesGrid";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FeatureCards } from "@/components/FeatureCards";
import { HomeHero } from "@/components/HomeHero";
import { PricingTable } from "@/components/PricingTable";
import { ProcessSteps } from "@/components/ProcessSteps";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteFrame } from "@/components/SiteFrame";
import { StatsStrip } from "@/components/StatsStrip";
import { TestimonialGrid } from "@/components/TestimonialGrid";

export default function Home() {
  return (
    <SiteFrame>
      <main>
        <HomeHero />

        <section className="section">
          <div className="container">
            <SectionHeading
              title="AI-Powered Exam"
              accent="Categories"
              text="Find the right exam category and start practicing with intelligent question generation."
            />
            <CategoriesGrid />
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading
              title="How to Create AI-powered Exams"
              accent="step by step"
              text="A simple and intelligent exam process designed to deliver fast, accurate, and secure assessments."
            />
            <ProcessSteps />
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading
              title="Powerful"
              accent="Core Features"
              text="Discover AI tools built to streamline exam creation, solution generation, and publishing."
            />
            <FeatureCards />
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading
              title="Empowering"
              accent="Educators with AI"
              text="Trusted by institutions and teams worldwide for high-volume assessments."
            />
            <StatsStrip />
          </div>
        </section>

        <section className="section overflow-hidden">
          <div className="container">
            <SectionHeading
              title="What Our"
              accent="Users Are Saying"
              text="Real feedback from coordinators, teachers, and operations teams."
            />
          </div>
          <TestimonialGrid />
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading
              title="Flexible"
              accent="Pricing for Every User"
              text="Choose a plan that fits your goals. Start free and upgrade anytime."
            />
            <PricingTable />
          </div>
        </section>

        <section className="section">
          <div className="container faq-2col">
            <div>
              <p className="eyebrow">FAQ</p>
              <SectionHeading
                title="Answers about our AI"
                accent="Exam Generator"
                text="Everything you need to know about generating, customizing, and managing exam questions."
              />
            </div>
            <FAQAccordion />
          </div>
        </section>

        <section className="section">
          <div className="container">
            <CTASection
              title="Create Exams with AI Question Generation"
              text="Instantly generate high-quality exam questions for any subject or level."
            />
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading
              title="Latest"
              accent="Announcement"
              text="Updates and guides from the NeonExam team."
            />
            <BlogGrid />
          </div>
        </section>
      </main>
    </SiteFrame>
  );
}
