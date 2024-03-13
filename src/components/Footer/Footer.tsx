import "./Footer.css";
import logo from "../../assets/LOGO3.png";
import emailIcon from "../../assets/icons/email.png";
import phoneIcon from "../../assets/icons/phone-call.png";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="content">
        <section>
          <h3>Quienes somos</h3>
          <img className="logo" src={logo} alt="" />
          <p className="quienesSomos">
            Somos una empresa de asesoramiento y consultoría en temas fiscables
            y de contabilidad, con largo recorrido en el sector.
          </p>
        </section>
        <section>
          <h3>Datos de contacto</h3>
          <div className="email">
            <img src={emailIcon} alt="" />
            <p>baori.asesores@gmail.com</p>
          </div>
          <div className="phone">
            <img src={phoneIcon} alt="" />
            <p>609512438</p>
          </div>
        </section>
        <section className="servicios">
          <h3>Servicios</h3>
          <a href="/#asesoria-fiscal" className="firstChild">
            Asesoría Fiscal
          </a>
          <a href="/#asesoria-contable">Asesoría Contable</a>
        </section>
        <section className="especialistasEn">
          <h3>Especialistas en</h3>
          <p className="firstChild especialistas">Pymes</p>
          <p className="especialistas">Autónomos</p>
          <p className="especialistas">Emprendedores</p>
        </section>
      </div>
    </div>
  );
};
