import ParentComponent from "./components/ParentComponent.jsx";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import HelpPage from "./components/HelpPage.jsx";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route  path="/" element={<ParentComponent />}/>
        <Route  path="/Help" element={<HelpPage />}/>     
      </Routes>
    </>
    
  );
}

export default App;
