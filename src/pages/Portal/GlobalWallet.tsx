import { useEffect, useState } from 'react';

interface WalletShop {
  shopName: string;
  subdomain: string;
  balance: number;
  lifetimeRewards: number;
}

export default function GlobalWallet() {
  const [wallet, setWallet] = useState<WalletShop[]>([]);

  useEffect(() => {
    // 💡 Simulated Network Call to `GET /api/wallet/{MockUserId}`
    // Since we omit the "x-subdomain" header here, the Backend gracefully returns
    // aggregated rows from `TenantUsers` spanning multiple 1-to-many Shop relationships.
    setWallet([
      { shopName: "KopiKopi Outlet", subdomain: "kopikopi", balance: 6, lifetimeRewards: 1 },
      { shopName: "Burger Bros", subdomain: "burgerbros", balance: 2, lifetimeRewards: 0 },
      { shopName: "Artisan Bakery", subdomain: "bakery", balance: 9, lifetimeRewards: 4 }
    ]);
  }, []);

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center', padding: '1rem' }}>
      <h1 style={{ color: 'white', marginBottom: '0.5rem', fontWeight: 800 }}>My Wallet</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>Your universal Odelagi stamps pass.</p>
      
      {wallet.map(w => (
        <div key={w.subdomain} className="card" style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#0f172a' }}>
          <div style={{ textAlign: 'left' }}>
            <h2 style={{ margin: 0, fontSize: '1.25rem', color: '#f8fafc' }}>{w.shopName}</h2>
            <p style={{ fontSize: '0.8rem', color: '#94a3b8', margin: 0 }}>{w.subdomain}.odelagi.com</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary)', lineHeight: 1 }}>{w.balance}</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>stamps</div>
            {w.lifetimeRewards > 0 && (
              <div style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: 600 }}>🌟 {w.lifetimeRewards} Rewards!</div>
            )}
          </div>
        </div>
      ))}

      <div style={{ marginTop: '3rem', padding: '1rem', borderRadius: '8px', border: '1px solid #334155', background: '#1e293b' }}>
        <p style={{ margin: 0, color: '#f8fafc', fontSize: '0.85rem' }}>
          ℹ️ Try selecting a specific shop using the dropdown panel to jump into a shop's isolated portal!
        </p>
      </div>
    </div>
  );
}
