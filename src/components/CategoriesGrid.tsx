"use client";

import { categories } from "@/lib/content";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item: import("framer-motion").Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300 } }
};

export function CategoriesGrid() {
  return (
    <motion.div 
      className="card-grid categories-grid"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      {categories.map((category) => (
        <motion.article 
          key={category.name} 
          variants={item}
          whileHover={{ y: -5, borderBottomColor: "#72f136" }}
          style={{
            background: "#111111",
            borderRadius: "1rem",
            padding: "1.5rem",
            border: "1px solid #27272a",
            borderBottom: "3px solid transparent",
            transition: "border-bottom-color 0.3s ease",
            textAlign: "center",
            boxShadow: "0 4px 20px rgba(0,0,0,0.5)"
          }}
        >
          <div style={{
            margin: "0 auto 1rem",
            width: "3.5rem",
            height: "3.5rem",
            borderRadius: "0.8rem",
            display: "grid",
            placeItems: "center",
            background: "rgba(114, 241, 54, 0.1)",
            fontSize: "1.8rem"
          }} aria-hidden>
            {category.icon}
          </div>
          <h3 style={{ fontSize: "1.1rem", marginBottom: "0.5rem", fontWeight: 700 }}>{category.name}</h3>
          <p style={{ color: "#72f136", fontSize: "0.9rem", fontWeight: 600 }}>{category.status}</p>
        </motion.article>
      ))}
    </motion.div>
  );
}

