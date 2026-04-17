import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

interface TenantContextProps {
  tenantName: string;
  setMockTenant: (name: string) => void;
}

const TenantContext = createContext<TenantContextProps>({
  tenantName: '',
  setMockTenant: () => {}
});

export const useTenantContext = () => useContext(TenantContext);

export function TenantProvider({ children }: { children: ReactNode }) {
  const [tenantName, setTenantName] = useState<string>('');

  useEffect(() => {
    const hostname = window.location.hostname;
    if (hostname !== 'localhost' && hostname !== '127.0.0.1') {
      const parts = hostname.split('.');
      if (parts.length > 2) {
        setTenantName(parts[0]);
      } else if (parts.length > 1 && parts[0] != "www") {
        setTenantName(parts[0]);
      }
    }
  }, []);

  return (
    <TenantContext.Provider value={{ tenantName, setMockTenant: setTenantName }}>
      {children}
    </TenantContext.Provider>
  );
}

export function LocalTenantMockSelector() {
  const { tenantName, setMockTenant } = useTenantContext();
  
  if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
      return null;
  }
  
  return (
    <div style={{
      position: 'fixed', bottom: 10, right: 10, background: '#1e293b', 
      padding: '10px', borderRadius: '8px', zIndex: 9999, border: '1px solid #334155'
    }}>
      <label style={{ fontSize: '12px', display: 'block', marginBottom: '4px', color: 'var(--text-muted)' }}>
        🧪 Local Subdomain Mock
      </label>
      <select 
        value={tenantName} 
        onChange={(e) => setMockTenant(e.target.value)} 
        style={{ padding: '6px', borderRadius: '4px', background: '#0f172a', color: 'white', border: '1px solid #334155' }}
      >
        <option value="">(None) Central Portal</option>
        <option value="kopikopi">KopiKopi Outlet</option>
        <option value="burgerbros">Burger Bros</option>
      </select>
    </div>
  );
}
