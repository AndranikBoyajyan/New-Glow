import { BrowserRouter, Routes, Route } from "react-router";

import "./App.css";
import LayoutWrapper from "./pages/LayoutWrapper";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutWrapper />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
