import { BrowserRouter, Routes, Route } from "react-router";

import "./App.css";
import LayoutWrapper from "./pages/LayoutWrapper";
import Home from "./pages/Home";
import About from "./pages/About";
import AllTreatments from "./pages/AllTreatments";
import SingleTreatment from "./pages/SingleTreatment";
import ErrorPage from "./pages/Error404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutWrapper />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="all-treatments" element={<AllTreatments />} />
          <Route path="/:name" element={<SingleTreatment />} />
          <Route path="about/:name" element={<SingleTreatment />} />
          <Route path="all-treatments/:name" element={<SingleTreatment />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
        <Route path="pageNotFound" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
