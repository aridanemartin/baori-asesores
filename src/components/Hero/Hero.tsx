import { Link } from "react-router-dom";
import "./Hero.css";

export const Hero = () => {
  return (
    <div className="Hero">
      <h1>Asesoría fiscal, laboral y contable en Las Palmas.</h1>
      <button>
        <Link to="/contacto">Contacta con Nosotros</Link>
      </button>
    </div>
  );
};
