import { Link } from 'react-router-dom';

export default function ScanQr() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Scan a Shop QR</h1>
      
      <div className="card" style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#000', marginTop: '2rem' }}>
        <p style={{ color: 'var(--text-muted)' }}>[Camera Feed Interface here]</p>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
          Simulating a successful scan:
        </p>
        <button className="btn" onClick={() => alert("Simulated API request sent to /api/stamps/request")}>
          Simulate Scan Read (QR_12345)
        </button>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <Link to="/customer" style={{ color: 'var(--primary)' }}>Back to Dashboard</Link>
      </div>
    </div>
  );
}
