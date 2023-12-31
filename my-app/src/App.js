import { useState, useEffect } from "react";
import { Route, Routes, useLocation, HashRouter as Router } from "react-router-dom";
import "./App.css";
import ParentComponent from "./components/ParentComponent.jsx";
import Navbar from "./components/Navbar.jsx";
import HelpPage from "./components/HelpPage.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const [fees, setFees] = useState([
    { maxHours: 0, fee: 0 },
    { maxHours: 1, fee: 2 },
    { maxHours: 2, fee: 4 },
    { maxHours: 6, fee: 8 },
    { maxHours: 8, fee: 10 },
  ]);
  const handleCloseModal = () => {
    const newFees = fees.filter((fee) => fee.maxHours !== "" && fee.fee !== "");
    setFees(newFees);
    setShowModal(false);
  };

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Navbar handleShowModal={handleShowModal} />
      <Routes>
        <Route
          path="/"
          element={
            <ParentComponent
              handleCloseModal={handleCloseModal}
              handleShowModal={handleShowModal}
              showModal={showModal}
              fees={fees}
              setFees={setFees}
            />
          }
        />
        <Route path="/Help" element={<HelpPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;