"use client";

import { faqItems } from "@/lib/content";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 }
};

export function FAQAccordion() {
  return (
    <motion.div 
      className="faq-list"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
    >
      {faqItems.map((item) => (
        <motion.details 
          key={item.question} 
          className="faq-item"
          variants={itemVariants}
          style={{
            border: "1px solid #27272a",
            borderRadius: "0.8rem",
            background: "#111",
            overflow: "hidden",
            marginBottom: "0.8rem"
          }}
        >
          <summary style={{ padding: "1.2rem", fontWeight: 700, cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span>{item.question}</span>
            <span style={{ color: "#72f136", fontSize: "1.5rem", lineHeight: 1 }}>+</span>
          </summary>
          <p style={{ padding: "0 1.2rem 1.2rem", color: "#a1a1aa", lineHeight: 1.6 }}>{item.answer}</p>
        </motion.details>
      ))}
    </motion.div>
  );
}

