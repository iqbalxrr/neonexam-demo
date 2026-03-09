import { FeatureCards } from "@/components/FeatureCards";
import { PageBanner } from "@/components/PageBanner";
import { PricingTable } from "@/components/PricingTable";
import { ProcessSteps } from "@/components/ProcessSteps";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteFrame } from "@/components/SiteFrame";

export default function PricingPage() {
  return (
    <SiteFrame>
      <main>
        <PageBanner title="Pricing" current="Pricing" />

        <section className="section">
          <div className="container">
            <SectionHeading
              title="Flexible"
              accent="Pricing for Every User"
              text="Choose a plan that fits your goals. Start free and upgrade any time."
            />
            <PricingTable />
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading
              title="Powerful"
              accent="Core Features"
              text="Built for teams that need speed, quality, and control."
            />
            <FeatureCards />
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading
              title="How to Create AI-powered Exams"
              accent="step by step"
              text="A clear flow from question generation to result distribution."
            />
            <ProcessSteps />
          </div>
        </section>
      </main>
    </SiteFrame>
  );
}

