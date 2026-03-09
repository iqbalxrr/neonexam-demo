"use client";

import { blogPosts } from "@/lib/content";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const demoImages = [
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
  "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80"
];

export function BlogGrid() {
  return (
    <motion.div 
      className="card-grid blog-grid"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      {blogPosts.map((post, index) => (
        <motion.article 
          key={`${post.title}-${post.date}`} 
          className="glass-card blog-card"
          variants={itemVariants}
          whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.8)" }}
          style={{
            background: "#0a0a0a",
            border: "1px solid #27272a",
            borderRadius: "1rem",
            overflow: "hidden",
            padding: 0,
            display: "flex",
            flexDirection: "column"
          }}
        >
          <div 
            className="blog-media" 
            style={{ position: "relative", margin: 0, minHeight: "200px", width: "100%" }} 
            aria-hidden 
          >
            <Image 
              src={demoImages[index % demoImages.length]}
              alt={post.title}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
            <p className="blog-date" style={{ color: "#72f136", fontSize: "0.85rem", marginBottom: "0.5rem" }}>{post.date}</p>
            <h3 style={{ fontSize: "1.2rem", marginBottom: "0.8rem", lineHeight: 1.4 }}>{post.title}</h3>
            <p style={{ color: "#a1a1aa", flex: 1, marginBottom: "1.5rem" }}>{post.excerpt}</p>
            <Link 
              href="#" 
              style={{ color: "#72f136", fontWeight: 700, textDecoration: "none", alignSelf: "flex-start", marginTop: "auto" }}
            >
              Read More →
            </Link>
          </div>
        </motion.article>
      ))}
    </motion.div>
  );
}

