import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home";
import Collection from "./Pages/Collection";
import Choose from "./Pages/Choose";
import About from "./Pages/About";
import Roadmap from "./Pages/Roadmap";
import Blog from "./Pages/Blog";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Collection" element={<Collection />} />
          <Route path="Choose" element={<Choose />} />
          <Route path="About" element={<About />} />
          <Route path="Roadmap" element={<Roadmap />} />
          <Route path="Blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
