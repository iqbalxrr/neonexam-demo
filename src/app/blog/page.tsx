import { BlogGrid } from "@/components/BlogGrid";
import { CTASection } from "@/components/CTASection";
import { PageBanner } from "@/components/PageBanner";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteFrame } from "@/components/SiteFrame";

export default function BlogPage() {
  return (
    <SiteFrame>
      <main>
        <PageBanner title="Blogs" current="Blogs" />

        <section className="section">
          <div className="container">
            <BlogGrid />
          </div>
        </section>

        <section className="section">
          <div className="container">
            <CTASection
              title="Create Exams with AI Question Generation"
              text="Build complete exams, customize difficulty, and save hours of manual work."
            />
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading
              title="Need help choosing the right setup?"
              text="Contact us and we will guide your exam workflow."
            />
          </div>
        </section>
      </main>
    </SiteFrame>
  );
}

