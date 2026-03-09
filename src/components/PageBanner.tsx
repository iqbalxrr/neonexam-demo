import Link from "next/link";

type PageBannerProps = {
  title: string;
  current: string;
};

export function PageBanner({ title, current }: PageBannerProps) {
  return (
    <section 
      className="page-banner"
      style={{
        position: "relative",
        background: "linear-gradient(180deg, #050a06 0%, #000 100%)",
        padding: "6rem 0 4rem",
        textAlign: "center",
        borderBottom: "1px solid #1a2f15",
        overflow: "hidden"
      }}
    >
      {/* Decorative Wave SVGs in the background */}
      <svg width="100%" height="200" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: "absolute", top: 0, left: 0, opacity: 0.15, zIndex: 0 }}>
        <path d="M0,50 Q25,20 50,50 T100,50 L100,0 L0,0 Z" fill="#72f136" />
      </svg>
      <svg width="100%" height="150" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: "absolute", top: 0, left: 0, opacity: 0.05, zIndex: 0 }}>
        <path d="M0,70 Q30,10 60,70 T100,70 L100,0 L0,0 Z" fill="#72f136" />
      </svg>

      <div className="container" style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", marginBottom: "1.5rem" }}>{title}</h1>
        
        <div 
          className="breadcrumb"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "#111",
            padding: "0.5rem 1rem",
            borderRadius: "999px",
            border: "1px solid #27272a",
            fontSize: "0.9rem"
          }}
        >
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "#72f136", textDecoration: "none" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
            Home
          </Link>
          <span style={{ color: "#555" }}>/</span>
          <span style={{ color: "#fff" }}>{current}</span>
        </div>
      </div>
    </section>
  );
}

