import Dashboard from "./pages/dashboard/Dashboard"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n';
import Footer from './components/footer/Footer';
import CalibrationDataUpload from './pages/calibrationDataUpload/CalibrationDataUpload';
import Reports from './pages/reports/Reports';
import Header from './components/header/Header';
import './App.scss'
 
function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <div className="app-container">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/calibration" element={<CalibrationDataUpload />} />
              <Route path="/reports" element={<Reports />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </I18nextProvider>
  );
}
 
export default App;