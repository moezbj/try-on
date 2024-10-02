import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TryOn from "./pages/Section";
import ProductDetail from "./pages/DetailProduct";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<ProductDetail />} />
        <Route path="try" element={<TryOn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
