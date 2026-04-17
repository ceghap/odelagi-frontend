import { useState, useEffect } from 'react';
import * as signalR from '@microsoft/signalr';
import { useTenantContext } from '../../context/TenantContext';

interface PendingStamp {
  id: string;
  customer: string;
  phone: string;
  requestedAt: string;
}

export default function ApprovalList() {
  const { tenantName } = useTenantContext();
  const [stamps, setStamps] = useState<PendingStamp[]>([]);

  useEffect(() => {
    // 🚀 Establish SignalR WebSocket Connection
    // Assuming backend runs on 5164 or 5000. For MVP, we point to localhost:5000.
    const connection = new signalR.HubConnectionBuilder()
      .withUrl("http://localhost:5000/hubs/staff", {
        // We pass the tenantName so the C# Hub places us in the correct Subdomain isolated Group
        headers: { "x-subdomain": tenantName }
      })
      .withAutomaticReconnect()
      .build();

    connection.start()
      .then(() => console.log('SignalR Connected to Staff Portal'))
      .catch((err: unknown) => console.error('SignalR Connection Error: ', err));

    connection.on("StampRequested", (data: any) => {
      console.log("New Realtime Stamp!", data);

      const newStamp: PendingStamp = {
        id: data.stampId,
        customer: data.customerName,
        phone: data.customerPhone || 'Unknown',
        requestedAt: new Date(data.requestedAt).toLocaleTimeString()
      };

      setStamps(prev => [...prev, newStamp]);
    });

    return () => {
      connection.stop();
    };
  }, [tenantName]);

  const approveStamp = (id: string) => {
    setStamps(stamps.filter(s => s.id !== id));
    alert(`Mock: Approved stamp for ${id}. (API call to /api/stamps/${id}/approve)`);
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
