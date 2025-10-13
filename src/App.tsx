import { BrowserRouter, Routes, Route } from "react-router";

import "./App.css";
import LayoutWrapper from "./pages/LayoutWrapper";
import Home from "./pages/Home";
import About from "./pages/About";
import AllTreatments from "./pages/AllTreatments";
import SingleTreatment from "./pages/SingleTreatment";
import ErrorPage from "./pages/Error404";
import Blog from "./pages/Blog";
import SinglePost from "./pages/SinglePost";
import Specials from "./pages/Specials";

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
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<SinglePost />} />
          <Route path="specials" element={<Specials />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
        <Route path="pageNotFound" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
