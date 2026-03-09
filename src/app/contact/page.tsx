"use client";

import { FAQAccordion } from "@/components/FAQAccordion";
import { PageBanner } from "@/components/PageBanner";
import { SiteFrame } from "@/components/SiteFrame";
import { InteractiveMap } from "@/components/InteractiveMap";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <SiteFrame>
      <main>
        <PageBanner title="Contact Us" current="Contact Us" />

        <section className="section" style={{ paddingBottom: "2rem" }}>
          <motion.div 
            className="container card-grid contact-cards"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
          >
            <motion.article 
              className="glass-card"
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              whileHover={{ y: -5, borderColor: "#27272a" }}
              style={{ background: "#0c0c0c", border: "1px solid #1a1a1a", borderRadius: "1rem", padding: "2rem 1.5rem" }}
            >
              <div style={{ width: "3rem", height: "3rem", borderRadius: "0.5rem", border: "1px solid #27272a", display: "grid", placeItems: "center", marginBottom: "1.5rem" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a1a1aa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>Email Us</h3>
              <p style={{ color: "#a1a1aa", fontSize: "0.95rem", marginBottom: "1.5rem", minHeight: "2.8rem" }}>Reach out anytime—our team is ready to assist.</p>
              <a href="mailto:support@viserexam.com" style={{ color: "#72f136", fontSize: "0.9rem", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>support@viserexam.com <span>→</span></a>
            </motion.article>

            <motion.article 
              className="glass-card"
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              whileHover={{ y: -5, borderColor: "#27272a" }}
              style={{ background: "#0c0c0c", border: "1px solid #1a1a1a", borderRadius: "1rem", padding: "2rem 1.5rem" }}
            >
              <div style={{ width: "3rem", height: "3rem", borderRadius: "0.5rem", border: "1px solid #27272a", display: "grid", placeItems: "center", marginBottom: "1.5rem" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a1a1aa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>Call Us</h3>
              <p style={{ color: "#a1a1aa", fontSize: "0.95rem", marginBottom: "1.5rem", minHeight: "2.8rem" }}>Give us a call&mdash;we&apos;re happy to help you anytime.</p>
              <a href="tel:+5230000000" style={{ color: "#72f136", fontSize: "0.9rem", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>+523-0000000 <span>→</span></a>
            </motion.article>

            <motion.article 
              className="glass-card"
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              whileHover={{ y: -5, borderColor: "#27272a" }}
              style={{ background: "#0c0c0c", border: "1px solid #1a1a1a", borderRadius: "1rem", padding: "2rem 1.5rem" }}
            >
              <div style={{ width: "3rem", height: "3rem", borderRadius: "0.5rem", border: "1px solid #27272a", display: "grid", placeItems: "center", marginBottom: "1.5rem" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a1a1aa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>Find Us</h3>
              <p style={{ color: "#a1a1aa", fontSize: "0.95rem", marginBottom: "1.5rem", minHeight: "2.8rem" }}>Find our location and plan your visit.</p>
              <a href="#" style={{ color: "#72f136", fontSize: "0.9rem", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>33 Rose Street, Covent Garden, UK <span>↗</span></a>
            </motion.article>
          </motion.div>
        </section>

        <section className="section">
          <motion.div 
            className="container contact-split"
            style={{ display: "grid", gap: "2rem", gridTemplateColumns: "1fr 1fr" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div 
              className="contact-photo" 
              style={{
                borderRadius: "1rem",
                minHeight: "400px",
                border: "1px solid #27272a",
                backgroundImage: "url('/support_team.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
                maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)"
              }} 
              aria-hidden 
            />
            <form 
              className="glass-card contact-form"
              style={{
                background: "#0c0c0c",
                border: "1px solid #1a1a1a",
                borderRadius: "1rem",
                padding: "2rem",
                display: "grid",
                gap: "1.2rem"
              }}
            >
              <div className="contact-grid" style={{ display: "grid", gap: "1.2rem", gridTemplateColumns: "1fr 1fr" }}>
                <label style={{ display: "grid", gap: "0.5rem", fontSize: "0.85rem", fontWeight: 600 }}>
                  <span>Name <span style={{ color: "red" }}>*</span></span>
                  <input type="text" placeholder="" style={{ background: "#111", border: "1px solid #27272a", borderRadius: "0.5rem", padding: "0.8rem", color: "#fff" }} />
                </label>
                <label style={{ display: "grid", gap: "0.5rem", fontSize: "0.85rem", fontWeight: 600 }}>
                  <span>Email Address <span style={{ color: "red" }}>*</span></span>
                  <input type="email" placeholder="" style={{ background: "#111", border: "1px solid #27272a", borderRadius: "0.5rem", padding: "0.8rem", color: "#fff" }} />
                </label>
              </div>
              <label style={{ display: "grid", gap: "0.5rem", fontSize: "0.85rem", fontWeight: 600 }}>
                <span>Subject <span style={{ color: "red" }}>*</span></span>
                <input type="text" placeholder="" style={{ background: "#111", border: "1px solid #27272a", borderRadius: "0.5rem", padding: "0.8rem", color: "#fff" }} />
              </label>
              <label style={{ display: "grid", gap: "0.5rem", fontSize: "0.85rem", fontWeight: 600 }}>
                <span>Message <span style={{ color: "red" }}>*</span></span>
                <textarea rows={5} placeholder="" style={{ background: "#111", border: "1px solid #27272a", borderRadius: "0.5rem", padding: "0.8rem", color: "#fff", resize: "vertical" }} />
              </label>
              
              {/* Mock reCAPTCHA */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "#fff", padding: "0.5rem 1rem", borderRadius: "3px", border: "1px solid #d3d3d3", width: "fit-content", gap: "2rem", marginTop: "0.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                  <input type="checkbox" style={{ width: "1.2rem", height: "1.2rem" }} />
                  <span style={{ color: "#222", fontSize: "0.85rem" }}>I&apos;m not a robot</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                   {/* Fake Recaptcha Logo */}
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="#4285F4"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
                   <span style={{ fontSize: "0.5rem", color: "#555" }}>reCAPTCHA<br/>Privacy - Terms</span>
                </div>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary"
                style={{ width: "100%", padding: "1rem", borderRadius: "0.5rem", fontSize: "1rem", marginTop: "0.5rem" }}
              >
                Send Messages
              </button>
            </form>
          </motion.div>
        </section>

        <section className="section" style={{ paddingBottom: "2rem" }}>
          <motion.div 
            className="container"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div 
              style={{
                borderRadius: "1rem",
                overflow: "hidden",
                border: "1px solid #1a1a1a",
                height: "350px",
                background: "#0c0c0c",
                position: "relative",
                zIndex: 1,
                boxShadow: "0 20px 40px rgba(0,0,0,0.6)"
              }}
            >
              <InteractiveMap />
            </div>
          </motion.div>
        </section>

        <section className="section" style={{ paddingBottom: "4rem" }}>
          <div className="container faq-2col" style={{ display: "grid", gap: "3rem", gridTemplateColumns: "1fr 1.3fr", alignItems: "start" }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <p className="eyebrow" style={{ display: "inline-block", padding: "0.3rem 0.8rem", border: "1px solid rgba(114, 241, 54, 0.3)", borderRadius: "999px", color: "#72f136", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "1px", marginBottom: "1rem" }}>FAQ</p>
              <h2 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "1rem", lineHeight: 1.2 }}>
                Answers about our AI <br /> Exam Generator
              </h2>
              <p style={{ color: "#a1a1aa", fontSize: "1rem", marginBottom: "2rem", lineHeight: 1.6, maxWidth: "400px" }}>
                Everything you need to know about generating, customizing, and managing exam questions with AI. From automated question creation to assembling full exams &mdash; we&apos;ve made the process effortless.
              </p>
              <a href="#" className="btn btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.8rem 1.5rem", borderRadius: "999px", fontWeight: 700, background: "#72f136", color: "#000", textDecoration: "none" }}>
                Need More Help? <span style={{ background: "#000", color: "#72f136", borderRadius: "50%", width: "1.2rem", height: "1.2rem", display: "inline-grid", placeItems: "center", fontSize: "0.7rem" }}>↗</span>
              </a>
            </motion.div>
            
            <div style={{ background: "#0c0c0c", border: "1px solid #1a1a1a", borderRadius: "1rem", padding: "2rem" }}>
              <FAQAccordion />
            </div>
          </div>
        </section>
      </main>
    </SiteFrame>
  );
}

