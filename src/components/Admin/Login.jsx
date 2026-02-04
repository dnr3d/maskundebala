import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Auth state listener in Admin.jsx will handle redirection
    } catch (err) {
      console.error("Login failed", err);
      setError('Failed to login. Check your email and password.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="title">Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@example.com"
              className="input-field"
              disabled={isLoading}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="input-field"
              disabled={isLoading}
            />
          </div>

          {error && <p className="error">{error}</p>}

          <button type="submit" className="submit-btn" disabled={isLoading}>
            {isLoading ? 'Signing in...' : 'Access Dashboard'}
          </button>
        </form>
      </div>

      <style jsx="true">{`
        .login-container {
          height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f5f5f5;
          color: #000;
        }

        .login-card {
          width: 100%;
          max-width: 400px;
          padding: 40px;
          border: 1px solid #e5e5e5;
          border-radius: 12px;
          background: #ffffff;
          box-shadow: 0 10px 40px rgba(0,0,0,0.05);
        }

        .title {
          text-align: center;
          margin-bottom: 30px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.5rem;
          color: #000;
        }

        .form-group {
          margin-bottom: 20px;
        }

        label {
          display: block;
          margin-bottom: 8px;
          font-size: 0.9rem;
          color: #555;
        }

        .input-field {
          width: 100%;
          padding: 12px;
          background: #f9f9f9;
          border: 1px solid #ddd;
          border-radius: 6px;
          color: #000;
          font-family: inherit;
          transition: 0.3s;
        }

        .input-field:focus {
          outline: none;
          border-color: #000;
          box-shadow: 0 0 0 2px rgba(0,0,0,0.1);
        }

        .submit-btn {
          width: 100%;
          padding: 14px;
          background: #000;
          color: white;
          border: none;
          border-radius: 6px;
          font-weight: bold;
          cursor: pointer;
          transition: 0.3s;
          margin-top: 10px;
        }

        .submit-btn:hover {
          background: #333;
        }

        .error {
          color: #ef4444;
          font-size: 0.9rem;
          text-align: center;
          margin-bottom: 15px;
        }
      `}</style>
    </div>
  );
}
