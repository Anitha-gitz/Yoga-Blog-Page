import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Pricing from "./Pages/Pricing";
import Classes from './Pages/Classes';
import MyBlog from "./Pages/MyBlog";
import Contact from "./Pages/Contact";
import Day1 from './Pages/Day1';

export default function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About/>}/>
          <Route path="pricing" element={<Pricing />} />
          <Route path="Classes" element={<Classes/>}/>
          <Route path="myblog" element={<MyBlog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/blog/:id" element={<Day1/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
