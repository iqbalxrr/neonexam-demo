import Link from "next/link";

type CTASectionProps = {
  title: string;
  text: string;
  buttonLabel?: string;
  buttonHref?: string;
};

export function CTASection({
  title,
  text,
  buttonLabel = "Get Started",
  buttonHref = "/register",
}: CTASectionProps) {
  return (
    <section 
      className="cta-band"
      style={{
        background: "linear-gradient(135deg, #84ff52 0%, #4edb2d 100%)",
        position: "relative",
        overflow: "hidden",
        borderRadius: "1.5rem",
        textAlign: "center",
        padding: "4rem 2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: "0 20px 40px rgba(114, 241, 54, 0.2)"
      }}
    >
      {/* Decorative Wave SVGs in the background */}
      <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: "absolute", top: 0, left: 0, opacity: 0.1, zIndex: 0 }}>
        <path d="M0,50 Q25,20 50,50 T100,50 L100,100 L0,100 Z" fill="#000" />
      </svg>
      <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: "absolute", top: 0, left: 0, opacity: 0.1, zIndex: 0 }}>
        <path d="M0,70 Q30,100 60,70 T100,70 L100,100 L0,100 Z" fill="#fff" />
      </svg>

      <div style={{ position: "relative", zIndex: 1, maxWidth: "600px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", color: "#000", fontWeight: 800, marginBottom: "1rem" }}>{title}</h2>
        <p style={{ color: "#111", fontSize: "1.1rem", marginBottom: "2rem" }}>{text}</p>
        <Link 
          href={buttonHref} 
          className="btn btn-dark" 
          style={{ 
            background: "#000", 
            color: "#fff", 
            padding: "1rem 2.5rem", 
            borderRadius: "999px",
            fontSize: "1.1rem" 
          }}
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}

