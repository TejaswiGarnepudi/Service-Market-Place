import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Contact from "./components/Contact";
import BrowseServices from "./components/BrowseServices";

import ClientDashboard from "./components/ClientDashboard";
import UserProfilePage from "./components/UserProfilePage";

import LoginPage from "./authentication/LoginPage";
import RegisterPage from "./authentication/RegisterPage";
import ForgotPassword from "./authentication/ForgotPasswordPage";
import Termsandconditions from "./authentication/Termsandconditions";
import PageNotFound from "./authentication/PageNotFound";
import SellerProfile from "./components/SellerPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Pages WITH Normal Navbar */}
        <Route path="/" element={<><Navbar /><Homepage /></>} />
        <Route path="/about" element={<><Navbar /><About /></>} />
        <Route path="/contact" element={<><Navbar /><Contact /></>} />
        <Route path="/browse-services" element={<><Navbar /><BrowseServices /></>} />
        <Route path="/dashboard" element={<><Navbar /><ClientDashboard /></>} />

        <Route path="/seller-profile" element={<SellerProfile />} />
        <Route path="/profile" element={<UserProfilePage />} />


        {/* Auth Pages (No Navbar) */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="/terms-and-conditions" element={<Termsandconditions />} />

        <Route path="*" element={<PageNotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
