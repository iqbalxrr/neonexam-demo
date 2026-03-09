"use client";

import { testimonials } from "@/lib/content";

export function TestimonialGrid() {
  const marqueeItems = [...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials]; // Duplicate enough times to ensure seamless infinite scroll on wide screens

  return (
    <div className="testimonial-marquee-wrapper">
      <div className="testimonial-marquee">
        {marqueeItems.map((item, idx) => {
          const isEven = idx % 2 !== 0; // Alternating logic: Even index (0,2.. but map is 0-indexed so let's use idx % 2 === 1 for "even visual card" in css terms)
          const avatarUrl = `https://i.pravatar.cc/100?img=${(idx % 60) + 1}`; // Randomize avatars a bit

          return (
            <article 
              key={`${item.author}-${idx}`} 
              className={`tm-card ${isEven ? 'tm-even' : 'tm-odd'}`}
            >
              {!isEven ? (
                // Odd style: Quote -> Text -> Author at bottom
                <>
                  <p className="tm-quote-mark">“</p>
                  <p className="tm-quote-text">{item.quote}</p>
                  <div className="tm-author-row">
                    <img src={avatarUrl} alt={item.author} width={36} height={36} />
                    <div>
                      <strong>{item.author}</strong>
                      <span>{item.role}</span>
                    </div>
                  </div>
                </>
              ) : (
                 // Even style: Author at top -> Quote -> Text
                 <>
                  <div className="tm-author-row">
                    <img src={avatarUrl} alt={item.author} width={36} height={36} />
                    <div>
                      <strong>{item.author}</strong>
                      <span>{item.role}</span>
                    </div>
                  </div>
                  <p className="tm-quote-mark">“</p>
                  <p className="tm-quote-text">{item.quote}</p>
                </>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}

