import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import Home from "./pages/home/Home";
import NoPage from "./pages/NoPage";
import SignUp from "./pages/signup/SignUp";


function App(){
    return (
      <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/*" element={<NoPage />} />
      </Routes>
    </>
    )
}

export default App;