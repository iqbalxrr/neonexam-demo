"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/content";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link href="/" className="brand" style={{ display: "inline-flex", alignItems: "center", gap: "0rem" }}>
          <Image src="/logo.png" alt="NeonExam Logo" width={48} height={48} style={{ borderRadius: "0.35rem" }} />
          <span>
            Neon<span className="brand-accent">Exam</span>
          </span>
        </Link>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          {open ? "✕" : "☰"}
        </button>

        <nav className={`main-nav ${open ? "open" : ""}`}>
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${active ? "active" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className={`auth-links ${open ? "open" : ""}`}>
          <Link href="/login" className="btn btn-outline">
            Login
          </Link>
          <Link href="/register" className="btn btn-primary">
            Register
          </Link>
        </div>
      </div>
    </header>
  );
}

