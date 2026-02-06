import "../styles/Login.css";

const Login = () => {
  return (
    <div className="app-wrapper">

      <div className="auth-container">

        {/* LEFT – Visual Story */}
        <div className="visual-section">
          <div className="visual-card">

            <div className="scanner-circle">
              <div className="scan-line"></div>
              <div className="receipt-icon">🧾</div>
            </div>

            <h2 className="visual-title">DocuScan</h2>

            <p className="visual-quote">
              “Turn paper receipts into searchable digital records.”
            </p>

            {/* Feature Teasers */}
            <ul className="feature-list">
              <li>✔ Auto-scan receipts</li>
              <li>✔ Extract totals & dates</li>
              <li>✔ Export to CSV / PDF</li>
            </ul>

          </div>
        </div>

        {/* RIGHT – Login */}
        <div className="login-section">
          <h2>Create Account</h2>

          <button className="google-btn primary">
            <img
              src="https://developers.google.com/identity/images/g-logo.png"
              alt="Google"
            />
            Sign up with Google
          </button>

          <div className="divider">Already have an account?</div>

          <button className="google-btn secondary">
            <img
              src="https://developers.google.com/identity/images/g-logo.png"
              alt="Google"
            />
            Sign in with Google
          </button>

          <p className="footer-text">
            🔒 OAuth-secured login • No passwords stored
          </p>
        </div>

      </div>
    </div>
  );
};

export default Login;
