import { Hero } from "../components/Hero/Hero";
import PictureSection from "../components/PictureSection/PictureSection";
import ComputerImage from "../assets/computer.jpg";
import { Layout } from "../components/Layout/Layout";

const Contacto = () => {
  return (
    <>
      <Hero />
      <Layout>
        <PictureSection
          pictureSrc={ComputerImage}
          text={
            <>
              <h2>Baori Asesores</h2>
              <p>Contacta con Nosotros a través de este teléfono:</p>
              <br />
              <p>609512438</p>
              <h2>Asesoría Fiscal</h2>
              <p>O a través de este email: </p>
              <br />
              <p>baori.asesores@gmail.com</p>
            </>
          }
          picturePosition="left"
        />
      </Layout>
    </>
  );
};

export default Contacto;
