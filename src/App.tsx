import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import { Transparencia } from "./routes/Transparencia";
import Nav from "./components/Nav/Nav";
import { ContactBar } from "./components/ContactBar/ContactBar";
import Contacto from "./routes/Contacto";

function App() {
  return (
    <BrowserRouter>
      <ContactBar />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transparencia" element={<Transparencia />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
