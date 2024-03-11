import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import { Transparency } from "./routes/Transparency";
import Nav from "./components/Nav/Nav";
import { ContactBar } from "./components/ContactBar/ContactBar";

function App() {
  return (
    <BrowserRouter>
      <ContactBar />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transparency" element={<Transparency />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
