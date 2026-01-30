import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import LoginPage from "./authentication/LoginPage";
import RegisterPage from "./authentication/RegisterPage";
import BrowseServices from "./components/BrowseServices";
import PageNotFound from "./authentication/PageNotFound";
import Contact from "./components/Contact";
import ForgotPassword from "./authentication/ForgotPasswordPage";
import Termsandconditions from "./authentication/Termsandconditions";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/browse-services" element={<BrowseServices />} />

        {/* 404 Route */}
        <Route path="*" element={<PageNotFound />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/terms-and-conditions" element={<Termsandconditions />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
