"use client";

import { useMemo, useState } from "react";
import { examItems } from "@/lib/content";

export function ExamExplorer() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) {
      return examItems;
    }

    return examItems.filter((item) =>
      `${item.title} ${item.subject} ${item.level}`.toLowerCase().includes(term),
    );
  }, [query]);

  return (
    <section className="exam-explorer">
      <label htmlFor="exam-search" className="sr-only">
        Search Exam
      </label>
      <div className="search-row">
        <input
          id="exam-search"
          type="search"
          placeholder="Search Exam"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>

      {filtered.length === 0 ? (
        <div className="no-data">
          <p className="no-data-icon" aria-hidden>
            ☐
          </p>
          <h3>No Exam Found</h3>
          <p>Try another keyword.</p>
        </div>
      ) : (
        <div className="card-grid exam-grid">
          {filtered.map((exam) => (
            <article key={exam.title} className="glass-card exam-card">
              <h3>{exam.title}</h3>
              <p>{exam.subject}</p>
              <div className="exam-meta">
                <span>{exam.level}</span>
                <span>{exam.duration}</span>
              </div>
              <button type="button" className="btn btn-primary">
                Start Exam
              </button>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

