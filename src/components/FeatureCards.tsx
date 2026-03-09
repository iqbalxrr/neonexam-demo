"use client";

import { features } from "@/lib/content";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function FeatureCards() {
  return (
    <motion.div
      className="feature-stack"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
    >
      {features.map((feature, index) => {
        return (
          <motion.article
            key={feature.accent}
            className="feature-card"
            variants={cardVariants}
            style={{
              marginLeft: `${index * 1.5}rem`,
              marginRight: `${(features.length - 1 - index) * 1.5}rem`,
            }}
          >
            <div
              className="feature-illustration"
              aria-hidden
              style={{ overflow: "hidden", padding: 0, display: "flex", border: "none", background: "transparent" }}
            >
              <Image
                src={`/feature${index + 1}.png`}
                alt={feature.title}
                width={500}
                height={500}
                style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "1rem" }}
              />
            </div>
            <div>
              <h3>
                {feature.title} <span className="text-accent">{feature.accent}</span>
              </h3>
              <p>{feature.description}</p>
              <ul className="tick-list">
                {feature.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </motion.article>
        );
      })}
    </motion.div>
  );
}

