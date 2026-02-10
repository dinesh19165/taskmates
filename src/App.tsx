import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import AdminLayout from './layouts/AdminLayout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import WhyChooseUs from './pages/WhyChooseUs'
import Contact from './pages/Contact'
import AdminLogin from './pages/admin/Login'
import Dashboard from './pages/admin/Dashboard'
import ManageServices from './pages/admin/ManageServices'
import ViewInquiries from './pages/admin/ViewInquiries'
import ProtectedRoute from './components/ProtectedRoute'
import ScrollToTop from './components/ScrollToTop'
import NotFound from './pages/NotFound'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
    return (
        <Router>
            <ScrollToTop />
            <WhatsAppButton />
            <Routes>
                {/* Public Routes */}
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="services" element={<Services />} />
                    <Route path="why-choose-us" element={<WhyChooseUs />} />
                    <Route path="contact" element={<Contact />} />
                </Route>

                {/* Admin Login */}
                <Route path="/admin/login" element={<AdminLogin />} />

                {/* Protected Admin Routes */}
                <Route path="/admin" element={<ProtectedRoute />}>
                    <Route element={<AdminLayout />}>
                        <Route index element={<Navigate to="/admin/dashboard" replace />} />
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="services" element={<ManageServices />} />
                        <Route path="inquiries" element={<ViewInquiries />} />
                    </Route>
                </Route>

                {/* 404 Route */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    )
}

export default App
