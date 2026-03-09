"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function HomeHero() {
  return (
    <section className="hero" style={{ position: "relative", overflow: "hidden" }}>
      {/* Background glowing effect */}
      <div 
        style={{
          position: "absolute",
          top: "-20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "60vw",
          height: "40vw",
          background: "radial-gradient(circle, rgba(114, 241, 54, 0.15) 0%, rgba(0,0,0,0) 70%)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      
      <div className="container hero-grid" style={{ position: "relative", zIndex: 1, alignItems: "center" }}>
        
        {/* Left Column */}
        <motion.div 
          className="hero-media hero-left" 
          aria-hidden 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ 
            background: "#00b4d8", 
            aspectRatio: "3/4", 
            borderRadius: "1rem",
            position: "relative",
            overflow: "visible",
            backgroundImage: "url('/hero_left_student.webp')", // using artifacts later
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          {/* Floating Icon Top Right */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            style={{
              position: "absolute",
              top: "-20px",
              right: "-20px",
              background: "#111",
              padding: "0.8rem",
              borderRadius: "50%",
              boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
              fontSize: "1.8rem"
            }}
          >
            🚀
          </motion.div>
        </motion.div>

        {/* Center Column */}
        <motion.div 
          className="hero-copy"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}
        >
          <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 1.1, fontWeight: 800 }}>
            Effortless <span className="text-accent">Exam</span><br/>
            <span className="text-accent" style={{ position: "relative" }}>
              Creation
              <svg width="100%" height="12" viewBox="0 0 100 12" preserveAspectRatio="none" style={{ position: "absolute", bottom: "-4px", left: 0 }}>
                <path d="M0,8 Q25,0 50,8 T100,8" fill="none" stroke="#72f136" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span> , Powered by<br/>
            Next-Gen AI
          </h1>
          <p style={{ marginTop: "1.5rem", maxWidth: "480px", marginInline: "auto", fontSize: "1.1rem" }}>
            Build complete assessments quickly with AI-generated questions, secure exam flows, and instant analytics.
          </p>
          <div className="hero-actions" style={{ justifyContent: "center", marginTop: "2rem" }}>
            <Link href="/register" className="btn btn-primary" style={{ padding: "0.8rem 2rem", fontSize: "1.1rem" }}>
              Start for free <span style={{ marginLeft: "0.5rem" }}>→</span>
            </Link>
          </div>
          <div className="rating-row" style={{ justifyContent: "center", marginTop: "1.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "#111", padding: "0.5rem 1rem", borderRadius: "999px", border: "1px solid #27272a" }}>
              <div style={{ display: "flex", position: "relative" }}>
                <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#444", border: "2px solid #111", zIndex: 3 }} />
                <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#555", border: "2px solid #111", marginLeft: "-10px", zIndex: 2 }} />
                <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#666", border: "2px solid #111", marginLeft: "-10px", zIndex: 1 }} />
              </div>
              <span style={{ color: "#FFD700", marginLeft: "0.5rem" }}>★★★★★</span>
              <small style={{ color: "#a1a1aa", marginLeft: "0.5rem" }}>Trusted by 10k+ educators</small>
            </div>
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div 
          className="hero-media hero-right" 
          aria-hidden 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ 
            background: "#ffcc00", 
            aspectRatio: "3/4", 
            borderRadius: "1rem",
            position: "relative",
            overflow: "visible",
            backgroundImage: "url('/hero_right_student.webp')", // using artifacts later
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          {/* Floating Icon Bottom Right */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
            style={{
              position: "absolute",
              bottom: "-20px",
              right: "-10px",
              background: "#111",
              padding: "0.8rem",
              borderRadius: "0.8rem",
              border: "1px solid #333",
              boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
              fontSize: "1.5rem"
            }}
          >
            💻
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

