"use client";

import { useState } from "react";
import { pricingPlans } from "@/lib/content";
import { motion } from "framer-motion";

export function PricingTable() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  return (
    <>
      <div className="billing-toggle" role="group" aria-label="Billing period">
        <button
          type="button"
          onClick={() => setBilling("monthly")}
          className={billing === "monthly" ? "active" : ""}
        >
          Monthly
        </button>
        <button
          type="button"
          onClick={() => setBilling("yearly")}
          className={billing === "yearly" ? "active" : ""}
        >
          Annual
        </button>
      </div>

      <motion.div 
        className="card-grid pricing-grid"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.15 } }
        }}
      >
        {pricingPlans.map((plan) => {
          const amount = billing === "monthly" ? plan.monthly : plan.yearly;
          const period = billing === "monthly" ? "/month" : "/year";
          const isPro = plan.name === "Pro";

          return (
            <motion.article 
              className="glass-card pricing-card" 
              key={plan.name}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              whileHover={{ y: -10 }}
              style={{
                border: isPro ? "2px solid #72f136" : "1px solid #27272a",
                boxShadow: isPro ? "0 0 20px rgba(114, 241, 54, 0.2)" : "none",
                transform: isPro ? "scale(1.05)" : "scale(1)",
                zIndex: isPro ? 10 : 1,
                position: "relative",
                background: isPro ? "linear-gradient(180deg, #111e14 0%, #0a0f0d 100%)" : "#111111"
              }}
            >
              <h3 style={{ color: isPro ? "#72f136" : "#fff", marginBottom: "0.5rem" }}>{plan.name}</h3>
              <p className="price-row" style={{ marginTop: "1rem", marginBottom: "1rem" }}>
                <span style={{ fontSize: "2.5rem", fontWeight: 800 }}>${amount.toFixed(2)}</span> <small>{period}</small>
              </p>
              <p style={{ minHeight: "3rem", marginBottom: "1.5rem" }}>{plan.description}</p>
              <ul className="tick-list" style={{ minHeight: "12rem" }}>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <button 
                type="button" 
                className={isPro ? "btn btn-primary" : "btn btn-outline"}
                style={{ width: "100%", padding: "0.8rem", borderRadius: "999px", fontSize: "1rem" }}
              >
                {isPro ? "Get Started" : "Subscribe"}
              </button>
            </motion.article>
          );
        })}
      </motion.div>
    </>
  );
}

