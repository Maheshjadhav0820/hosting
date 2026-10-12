import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Blog from "./pages/blog";
import Todo from "./pages/todo";
import { ToastContainer } from "react-toastify"
import "react-toastify/ReactToastify.css"
function App() {
  return (
    <BrowserRouter>
      <ToastContainer></ToastContainer>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
