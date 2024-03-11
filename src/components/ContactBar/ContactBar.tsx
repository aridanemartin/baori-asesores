import "./ContactBar.css";

import emailIcon from "../../assets/icons/email.png";
import phoneIcon from "../../assets/icons/phone-call.png";
import logo from "../../assets/LOGO3.png";
import { useWindowSize } from "../../hooks/useWindowSize";

export const ContactBar = () => {
  const { width } = useWindowSize();
  const shouldShowMobileMenu = width && width < 1100;

  if (shouldShowMobileMenu) {
    return (
      <div className="contactBar">
        <section className="logo">
          <img src={logo} alt="" />
        </section>
      </div>
    );
  }

  return (
    <div className="contactBar">
      <section className="email">
        <img src={emailIcon} alt="" />
        <p>baori.asesores@gmail.com</p>
      </section>
      <section className="phone">
        <img src={phoneIcon} alt="" />
        <p>609512438</p>
      </section>
    </div>
  );
};
