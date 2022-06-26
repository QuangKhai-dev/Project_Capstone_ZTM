import "./categories.styles.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home";
import Navigation from "./routes/navigation/navigation";
import Authentication from "./routes/authentication/authentication";
import Checkout from "./routes/checkout/Checkout";
import Shop from "./routes/shop/shop";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="/" element={<Home />} />
        {/* Chấp nhận mọi thành phần đứng sau shop đều chuyển hướng đến shop  */}
        <Route path="/Shop/*" element={<Shop />} />
        <Route path="/signIn" element={<Authentication />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
