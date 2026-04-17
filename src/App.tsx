import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CustomerDashboard from './pages/Customer/CustomerDashboard';
import ScanQr from './pages/Customer/ScanQr';
import ApprovalList from './pages/Staff/ApprovalList';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <div className="logo">Odelagi</div>
        </header>

        <main className="app-main">
          <Routes>
            <Route path="/customer" element={<CustomerDashboard />} />
            <Route path="/customer/scan" element={<ScanQr />} />

            <Route path="/staff" element={<ApprovalList />} />

            <Route path="*" element={<Navigate to="/customer" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
