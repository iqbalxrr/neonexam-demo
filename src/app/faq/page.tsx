import { CategoriesGrid } from "@/components/CategoriesGrid";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FeatureCards } from "@/components/FeatureCards";
import { PageBanner } from "@/components/PageBanner";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteFrame } from "@/components/SiteFrame";

export default function FaqPage() {
  return (
    <SiteFrame>
      <main>
        <PageBanner title="FAQ" current="FAQ" />

        <section className="section">
          <div className="container faq-2col">
            <div>
              <p className="eyebrow">FAQ</p>
              <SectionHeading
                title="Answers about our AI"
                accent="Exam Generator"
                text="Everything you need to know about question generation, customization, and exam publishing."
              />
              <a href="#" className="btn btn-primary">
                Need More Help?
              </a>
            </div>
            <FAQAccordion />
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading
              title="AI-Powered Exam"
              accent="Categories"
              text="Pick a category and launch AI-generated exams quickly."
            />
            <CategoriesGrid />
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading
              title="Powerful"
              accent="Core Features"
              text="All essential tools to build, run, and publish exams in one place."
            />
            <FeatureCards />
          </div>
        </section>

        <section className="section">
          <div className="container">
            <CTASection
              title="Create Exams with AI Question Generation"
              text="Start with your topic and let the system structure full exam content."
            />
          </div>
        </section>
      </main>
    </SiteFrame>
  );
}

