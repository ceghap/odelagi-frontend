import { Link } from 'react-router-dom';

export default function CustomerDashboard() {
  return (
    <div>
      <h1 style={{ marginBottom: '1.5rem' }}>Your Loyalty Cards</h1>
      
      <div className="card">
        <h3>Kopikopi Branch A</h3>
        <p style={{ color: 'var(--text-muted)' }}>You have 3 / 10 stamps</p>
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
          {Array(3).fill('⭐').map((s, i) => <span key={i}>{s}</span>)}
          {Array(7).fill('⚪').map((s, i) => <span key={i}>{s}</span>)}
        </div>
      </div>

      <div style={{ marginTop: '3rem', textAlign: 'center' }}>
        <Link to="/customer/scan" className="btn" style={{ width: '100%', display: 'block', boxSizing: 'border-box' }}>
          Scan QR for points
        </Link>
      </div>
    </div>
  );
}
