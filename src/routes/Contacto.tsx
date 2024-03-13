import PictureSection from "../components/PictureSection/PictureSection";
import ComputerImage from "../assets/computer.jpg";
import { Layout } from "../components/Layout/Layout";
import { PageTitle } from "../components/PageTitle/PageTitle";

const Contacto = () => {
  return (
    <>
      <Layout>
        <PageTitle>Contacto</PageTitle>
        <PictureSection
          pictureSrc={ComputerImage}
          text={
            <div className="contactData">
              <section>
                <h2>Baori Asesores - Asesoría Legal y Contable</h2>
                <p>Contacta con Nosotros a través de este teléfono:</p>
                <br />
                <p>609512438</p>
              </section>
              <br />
              <br />
              <section>
                <p>O a través de este email: </p>
                <br />
                <p>baori.asesores@gmail.com</p>
              </section>
            </div>
          }
          picturePosition="left"
          isMap
        />
      </Layout>
    </>
  );
};

export default Contacto;
