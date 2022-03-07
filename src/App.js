import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./layouts/Header";
import Main from "./layouts/Main";
import Footer from "./layouts/Footer";
import Categories from "./components/content/Categories";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/:categoryId" element={<Main />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
