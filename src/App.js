import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Render from "./views/Render";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-primary text-white fixed top-0 left-0 w-full grid place-items-center min-h-screen">
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route element={<Render />} path="callback" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
// bg-mobile md:bg-altbg
