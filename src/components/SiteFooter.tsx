import Link from "next/link";
import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="site-footer" style={{ background: "linear-gradient(180deg, #050a06 0%, #000 100%)", borderTop: "1px solid #1a2f15", color: "#fff", paddingTop: "4rem" }}>
      <div className="container footer-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1.5fr", gap: "2rem", paddingBottom: "3rem" }}>
        <div>
          <Link href="/" className="brand footer-brand" style={{ marginBottom: "1.5rem", display: "inline-flex", alignItems: "center", gap: "0rem" }}>
            <Image src="/logo.png" alt="NeonExam Logo" width={48} height={48} style={{ borderRadius: "0.35rem" }} />
            <span>
              Neon<span className="brand-accent" style={{ color: "#72f136" }}>Exam</span>
            </span>
          </Link>
          <p className="footer-copy" style={{ color: "#a1a1aa", lineHeight: 1.6, maxWidth: "300px" }}>
            NeonExam is an AI-powered online exam platform that helps you
            create, manage, and conduct exams effortlessly and securely.
          </p>
          <div className="social-row" style={{ marginTop: "1.5rem", display: "flex", gap: "1rem" }}>
            {["f", "x", "in", "ig"].map((soc) => (
              <a 
                key={soc} 
                href="#" 
                aria-label={soc} 
                style={{ 
                  width: "2.5rem", height: "2.5rem", background: "#111", 
                  color: "#72f136", display: "grid", placeItems: "center", 
                  borderRadius: "50%", border: "1px solid #27272a" 
                }}
              >
                {soc}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 style={{ marginBottom: "1.5rem" }}>Useful Links</h4>
          <ul className="footer-list" style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.8rem", color: "#a1a1aa" }}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 style={{ marginBottom: "1.5rem" }}>Policy Links</h4>
          <ul className="footer-list" style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.8rem", color: "#a1a1aa" }}>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Security Policy</a></li>
            <li><a href="#">Cookie Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 style={{ marginBottom: "1.5rem" }}>Contact Info</h4>
          <ul className="footer-list" style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.8rem", color: "#a1a1aa" }}>
            <li>33 Rose Street, Covent Garden, UK</li>
            <li>support@neonexam.com</li>
            <li>+523-0000000</li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom" style={{ borderTop: "1px solid #1a2f15", padding: "1.5rem 0", textAlign: "center", color: "#a1a1aa", fontSize: "0.9rem" }}>
        <p>Copyright © NeonExam 2026. All rights reserved.</p>
      </div>
    </footer>
  );
}

