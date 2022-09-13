import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Project from "./components/Project";
import Post from "./components/Post";
import SinglePost from "./components/SinglePost";
import Navbar from "./components/Navbar";

// React RouterDom routing to each seperate page component
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/post/:slug" element={<SinglePost />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
