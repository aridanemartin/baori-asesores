import "./ContactBar.css";

import emailIcon from "../../assets/icons/email.png";
import phoneIcon from "../../assets/icons/phone-call.png";

export const ContactBar = () => {
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
