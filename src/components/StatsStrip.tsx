"use client";

import { stats } from "@/lib/content";
import { motion, Variants } from "framer-motion";
import CountUp from "react-countup";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

function AnimatedNumber({ value }: { value: string }) {
  const numStr = value.replace(/[^0-9.]/g, '');
  const number = parseFloat(numStr);
  const suffix = value.replace(/[0-9.,]/g, '');
  
  if (isNaN(number)) return <>{value}</>;

  return (
    <CountUp 
      start={0} 
      end={number} 
      duration={2.5} 
      separator="," 
      suffix={suffix} 
      enableScrollSpy
      scrollSpyOnce
    />
  );
}

export function StatsStrip() {
  return (
    <motion.div 
      className="stats-strip"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      {stats.map((item) => {
        return (
          <motion.article key={item.label} variants={itemVariants}>
            <h3><AnimatedNumber value={item.value} /></h3>
            <p>{item.label}</p>
          </motion.article>
        );
      })}
    </motion.div>
  );
}

