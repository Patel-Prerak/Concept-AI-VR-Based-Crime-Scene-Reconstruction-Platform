import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import CaseDetails from './pages/CaseDetails';
import ReportView from './pages/ReportView';
import TechnologyPage from './pages/TechnologyPage';
import ContactPage from './pages/ContactPage';
import WorkflowPage from './pages/WorkflowPage';
import { LegalPage, TrainingPage, AdminPage } from './pages/StaticPages';
import ScrollToTop from './components/ScrollToTop';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/technology" element={<TechnologyPage />} />
                <Route path="/workflow" element={<WorkflowPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/cases/:id" element={<CaseDetails />} />
                <Route path="/reports" element={<ReportView />} />

                {/* Additional Pages */}
                <Route path="/training" element={<TrainingPage />} />
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/compliance" element={<LegalPage />} />
                <Route path="/evidence" element={<CaseDetails />} />

                {/* Fallback routes */}
                <Route path="/cases" element={<Navigate to="/dashboard" replace />} />
                <Route path="/vrlab" element={<CaseDetails />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Router>
    );
}

export default App;
