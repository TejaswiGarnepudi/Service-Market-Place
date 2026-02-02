import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./pages/landingpage/Homepage";
import About from "./pages/landingpage/About";
import Contact from "./pages/landingpage/Contact";
import BrowseServices from "./pages/landingpage/BrowseServices";

import ClientDashboard from "./pages/clientfiles/ClientDashboard";
import UserProfilePage from "./pages/common/UserProfilePage";

import LoginPage from "./authentication/LoginPage";
import RegisterPage from "./authentication/RegisterPage";
import ForgotPassword from "./authentication/ForgotPasswordPage";
import Termsandconditions from "./authentication/Termsandconditions";
import PageNotFound from "./authentication/PageNotFound";
import SellerDashboard from "./pages/freelancerfiles/SellerDashboard";
import CreateSellerProfile from "./pages/freelancerfiles/CreateSellerProfile";

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

        <Route path="/seller-profile" element={<SellerDashboard />} />
        <Route path="/create-seller-profile" element={<CreateSellerProfile />} />
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
