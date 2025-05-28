import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import CreateCoverLetter from "./components/CreateCoverLetter";
import FeaturesPage from "./components/Features";
import Footer from "./components/Footer";
import Home from "./components/Home";
import HowItWorksPage from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import PricingPage from "./components/Pricing";
import SmoothScroll from "./components/SmoothScroll";

function App({ children }) {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <BrowserRouter>
          <ToastContainer />
          <Navbar />
          <main className="flex-1">
            <Suspense>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<CreateCoverLetter />} />
                <Route path="/footer" element={<Footer />} />
                <Route path="/how-it-works" element={<HowItWorksPage />} />
                <Route path="/features" element={<FeaturesPage />} />
                <Route path="/pricing" element={<PricingPage />} />
              </Routes>
            </Suspense>
            {children}
          </main>
          <Footer />
          <SmoothScroll />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
