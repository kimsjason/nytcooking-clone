import "../styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Weeknight from "./Weeknight";
import GroceryList from "./GroceryList";
import RecipeBox from "./RecipeBox";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route to="/" element={Home} />
          <Route to="/weeknight" element={Weeknight} />
          <Route to="/grocery-list" element={GroceryList} />
          <Route to="/recipe-box" element={RecipeBox} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
