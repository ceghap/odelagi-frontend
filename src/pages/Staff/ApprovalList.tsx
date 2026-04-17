import { useState } from 'react';

export default function ApprovalList() {
  const [stamps, setStamps] = useState([
    { id: '1', customer: 'Alice', phone: '+62812345678', requestedAt: 'Just now' },
    { id: '2', customer: 'Bob', phone: '+62898765432', requestedAt: '2 mins ago' }
  ]);

  const approveStamp = (id: string) => {
    setStamps(stamps.filter(s => s.id !== id));
    alert(`Mock: Approved stamp for ${id}`);
  };

  return (
    <div>
      <h1 style={{ marginBottom: '1.5rem', color: '#fuchsia' }}>Staff Portal</h1>
      <h2>Pending Approvals</h2>
      
      {stamps.length === 0 ? (
        <p style={{ color: 'var(--text-muted)' }}>No pending stamps right now.</p>
      ) : (
        stamps.map(stamp => (
          <div className="card" key={stamp.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h3>{stamp.customer}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{stamp.phone}</p>
              <p style={{ fontSize: '0.75rem', marginTop: '0.5rem' }}>{stamp.requestedAt}</p>
            </div>
            
            <button 
              className="btn btn-success" 
              onClick={() => approveStamp(stamp.id)}
            >
              Approve
            </button>
          </div>
        ))
      )}
    </div>
  );
}
