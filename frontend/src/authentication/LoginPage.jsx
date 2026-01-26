export default function LoginPage() {
  return (
    <div className="login-container">
      <h2>Sign in</h2>
      <p className="subtitle">Access your service dashboard securely</p>

      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />

      <button>Login</button>

      <div className="links">
        <a href="#">Forgot password?</a>
        <a href="#">Get Started</a>
      </div>
    </div>
  );
}
