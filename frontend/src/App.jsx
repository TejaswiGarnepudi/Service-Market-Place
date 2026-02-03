import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

// Landing Pages
import Homepage from "./pages/landingpage/Homepage";
import About from "./pages/landingpage/About";
import Contact from "./pages/landingpage/Contact";
import BrowseServices from "./pages/landingpage/BrowseServices";

// Client Pages
import ClientDashboard from "./pages/clientfiles/ClientDashboard";
import Orders from "./pages/clientfiles/Orders";

// Freelancer Pages
import SellerDashboard from "./pages/freelancerfiles/SellerDashboard";
import CreateSellerProfile from "./pages/freelancerfiles/CreateSellerProfile";

// Common Pages
import UserProfilePage from "./pages/common/UserProfilePage";
import Notifications from "./pages/common/Notifications";

// Auth Pages
import LoginPage from "./authentication/LoginPage";
import RegisterPage from "./authentication/RegisterPage";
import ForgotPassword from "./authentication/ForgotPasswordPage";
import Termsandconditions from "./authentication/Termsandconditions";
import PageNotFound from "./authentication/PageNotFound";

// Layout with Navbar (For Public Pages Only)
const PublicLayout = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* 🌐 Public Pages WITH Navbar */}
        <Route path="/" element={<PublicLayout><Homepage /></PublicLayout>} />
        <Route path="/about" element={<PublicLayout><About /></PublicLayout>} />
        <Route path="/contact" element={<PublicLayout><Contact /></PublicLayout>} />
        <Route path="/browse-services" element={<PublicLayout><BrowseServices /></PublicLayout>} />

        {/* 👤 Client Pages WITHOUT Normal Navbar */}
        <Route path="/dashboard" element={<ClientDashboard />} />
        <Route path="/orders" element={<Orders />} />

        {/* 🧑‍💼 Freelancer Pages WITHOUT Normal Navbar */}
        <Route path="/seller-profile" element={<SellerDashboard />} />
        <Route path="/create-seller-profile" element={<CreateSellerProfile />} />

        {/* 👤 Common */}
        <Route path="/profile" element={<UserProfilePage />} />
        <Route path="/notifications" element={<Notifications />} />

        {/* 🔐 Auth Pages (No Navbar) */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/terms-and-conditions" element={<Termsandconditions />} />

        {/* ❌ 404 */}
        <Route path="*" element={<PageNotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
