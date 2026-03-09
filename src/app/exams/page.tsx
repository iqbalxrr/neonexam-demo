import { ExamExplorer } from "@/components/ExamExplorer";
import { PageBanner } from "@/components/PageBanner";
import { SiteFrame } from "@/components/SiteFrame";

export default function ExamsPage() {
  return (
    <SiteFrame>
      <main>
        <PageBanner title="All Exam" current="All Exam" />
        <section className="section">
          <div className="container">
            <ExamExplorer />
          </div>
        </section>
      </main>
    </SiteFrame>
  );
}

