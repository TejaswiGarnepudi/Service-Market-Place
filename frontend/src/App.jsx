import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Contact from "./components/Contact";
import BrowseServices from "./components/BrowseServices";

import LoginPage from "./authentication/LoginPage";
import RegisterPage from "./authentication/RegisterPage";
import ForgotPassword from "./authentication/ForgotPasswordPage";
import Termsandconditions from "./authentication/Termsandconditions";
import PageNotFound from "./authentication/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/browse-services" element={<BrowseServices />} />

        {/* Auth Pages */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Legal */}
        <Route
          path="/terms-and-conditions"
          element={<Termsandconditions />}
        />

        {/* 404 - Always Last */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
