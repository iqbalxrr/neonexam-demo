"use client";

import { processSteps } from "@/lib/content";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariant: import("framer-motion").Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 200 } }
};

export function ProcessSteps() {
  return (
    <motion.div 
      className="steps-grid"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      style={{ display: "grid grid-cols-2 md:grid-cols-4", gap: "1.5rem", position: "relative" }}
    >
      {/* Decorative dashed connecting line behind steps (desktop only, assuming desktop mostly) */}
      <div style={{ position: "absolute", top: "2rem", left: "10%", right: "10%", height: "2px", borderTop: "2px dashed #333", zIndex: 0 }} />

      {processSteps.map((step, index) => (
        <motion.article 
          key={step.title} 
          variants={itemVariant}
          whileHover={{ y: -5 }}
          style={{
            position: "relative",
            zIndex: 1,
            background: "#0a0a0a",
            border: "1px solid #27272a",
            borderRadius: "1rem",
            padding: "1.5rem",
            boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
          }}
        >
          <div style={{
            width: "3rem",
            height: "3rem",
            borderRadius: "50%",
            background: "#111",
            border: "2px solid #72f136",
            color: "#72f136",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.2rem",
            fontWeight: "bold",
            marginBottom: "1rem",
            marginInline: "auto",
            boxShadow: "0 0 15px rgba(114, 241, 54, 0.4)"
          }}>
            {index + 1}
          </div>
          <h3 style={{ fontSize: "1.1rem", marginBottom: "0.5rem", textAlign: "center" }}>{step.title}</h3>
          <p style={{ color: "#a1a1aa", fontSize: "0.9rem", textAlign: "center", marginBottom: "1rem" }}>{step.text}</p>
          <div style={{ textAlign: "center" }}>
            <a href="#" style={{ color: "#72f136", fontSize: "0.9rem", fontWeight: 700, textDecoration: "none" }}>{step.action} →</a>
          </div>
        </motion.article>
      ))}
    </motion.div>
  );
}

