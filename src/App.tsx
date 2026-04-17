import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { TenantProvider, LocalTenantMockSelector, useTenantContext } from './context/TenantContext';
import CustomerDashboard from './pages/Customer/CustomerDashboard';
import ScanQr from './pages/Customer/ScanQr';
import ApprovalList from './pages/Staff/ApprovalList';
import './index.css';

// We extract the UI into an internal app so we can use Context hooks safely inside it.
function AppContent() {
  const { tenantName } = useTenantContext();
  
  return (
    <div className="app-container">
      <header className="app-header">
        {/* Dynamic Branding Header */}
        <div className="logo">
          {tenantName ? `${tenantName.toUpperCase()} Loyalty` : 'Odelagi Central'}
        </div>
      </header>

      <main className="app-main">
        <Routes>
          <Route path="/customer" element={<CustomerDashboard />} />
          <Route path="/customer/scan" element={<ScanQr />} />
          <Route path="/staff" element={<ApprovalList />} />
          <Route path="*" element={<Navigate to="/customer" />} />
        </Routes>
      </main>
      
      {/* Dev Only Tooling */}
      <LocalTenantMockSelector />
    </div>
  );
}

function App() {
  return (
    <TenantProvider>
      <Router>
        <AppContent />
      </Router>
    </TenantProvider>
  );
}

export default App;
