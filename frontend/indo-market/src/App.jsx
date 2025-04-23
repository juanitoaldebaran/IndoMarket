import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Products from "./pages/Products/Products";
import SignIn from "./pages/SignIn/SignIn";



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/getProducts" element={<Products />} />
        <Route path="/signin" element={<SignIn />}/>
      </Routes>
    </Router>
  );
}

export default App;
