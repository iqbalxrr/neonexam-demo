import Link from "next/link";
import Image from "next/image";

type AuthShellProps = {
  mode: "login" | "register";
};

export function AuthShell({ mode }: AuthShellProps) {
  const isLogin = mode === "login";

  return (
    <main className="auth-page">
      <section className="auth-form-wrap">
        <div className="auth-form-inner">
          <Link href="/" className="brand auth-brand" style={{ display: "inline-flex", alignItems: "center", gap: "0rem" }}>
            <Image src="/logo.png" alt="NeonExam Logo" width={48} height={48} style={{ borderRadius: "0.35rem" }} />
            <span>
              Neon<span className="brand-accent">Exam</span>
            </span>
          </Link>

          <form className="auth-form">
            {!isLogin ? (
              <label>
                <div>Full Name <span className="req">*</span></div>
                <input type="text" />
              </label>
            ) : null}

            <label>
              <div>{isLogin ? "Username" : "Email Address"} <span className="req">*</span></div>
              <input type={isLogin ? "text" : "email"} />
            </label>

            <label className="pwd-label">
              <div>Password <span className="req">*</span></div>
              <div className="pwd-wrapper">
                <input type="password" />
                <button type="button" className="eye-btn" aria-label="Toggle password visibility">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                </button>
              </div>
            </label>

            {!isLogin ? (
              <label className="pwd-label">
                <div>Confirm Password <span className="req">*</span></div>
                <div className="pwd-wrapper">
                  <input type="password" />
                  <button type="button" className="eye-btn" aria-label="Toggle password visibility">
                     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                  </button>
                </div>
              </label>
            ) : null}

            {isLogin ? (
              <div className="auth-row">
                <label className="check">
                  <input type="checkbox" />
                  Remember Me
                </label>
                <Link href="#" className="forgot-link">Forgot Password?</Link>
              </div>
            ) : null}

            <button type="submit" className="btn btn-submit">
              Submit
            </button>
          </form>

          <div className="auth-divider">
            <span>OR</span>
          </div>

          <div className="social-auth">
            <button type="button" className="social-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              Login with Google
            </button>
            <button type="button" className="social-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              Login with Facebook
            </button>
            <button type="button" className="social-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#0A66C2"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              Login with LinkedIn
            </button>
          </div>

          <p className="auth-switch">
           Don't have an account?{" "}
            <Link href={isLogin ? "/register" : "/login"}>
              {isLogin ? "Register Now!" : "Login Now!"}
            </Link>
          </p>
        </div>
      </section>

      <section className="auth-showcase">
        <div className="showcase-content">
          <h1>AI-Powered Examination System</h1>
          <p>From question generation to exam delivery—automated by AI.</p>
          
          <div className="trust-row">
            <div className="avatars">
              <img src="https://i.pravatar.cc/100?img=1" alt="User" />
              <img src="https://i.pravatar.cc/100?img=2" alt="User" />
              <img src="https://i.pravatar.cc/100?img=3" alt="User" />
              <img src="https://i.pravatar.cc/100?img=4" alt="User" />
              <img src="https://i.pravatar.cc/100?img=5" alt="User" />
            </div>
            <div className="trust-stars-wrap">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FFC107"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                ))}
              </div>
              <span className="trusted-text">Trusted by <strong>58,980+ users</strong></span>
            </div>
          </div>

          <div className="showcase-cards">
            <article className="auth-testimonial">
              <div className="testi-header">
                <img src="https://i.pravatar.cc/100?img=9" alt="Theresa Webb" />
                <div>
                  <strong>Theresa Webb</strong>
                  <span>Product Manager</span>
                </div>
              </div>
              <div className="quote-icon">“</div>
              <p>
                NeonExam simplified our entire online testing system. The AI-driven questions and smooth user interface make exams stress-free.
              </p>
            </article>
            <article className="auth-testimonial secondary-testimonial">
              <div className="testi-header">
                <img src="https://i.pravatar.cc/100?img=11" alt="Leslie Alexander" />
                <div>
                  <strong>Leslie Alexander</strong>
                  <span>Creative Director</span>
                </div>
              </div>
               <div className="quote-icon">“</div>
              <p>
                The AI question generation is impressive and accurate. It helps us create high-quality exams instantly without compromising standards.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
