import { Hero } from "../components/Hero/Hero";
import PictureSection from "../components/PictureSection/PictureSection";
import ComputerImage from "../assets/computer.jpg";
import StockImage from "../assets/stock.jpg";
import { Layout } from "../components/Layout/Layout";

const Home = () => {
  return (
    <>
      <Hero />
      <Layout>
        <PictureSection
          pictureSrc={ComputerImage}
          text={
            <>
              <h2>Asesoría Fiscal</h2>
              <p>
                Con nuestra asesoría fiscal en Barcelona, sabrás en todo momento
                cuales son tus obligaciones fiscales y cual es el perfil más
                conveniente para tu negocio, obteniendo por su parte la
                determinación del menor coste impositivo. Nos encargamos de
                cubrir las necesidades de las personas físicas y jurídicas en
                todo lo relacionado con el cumplimiento de las normas fiscales.
              </p>
              <br />
              <p>
                Estaremos a tu lado para escucharte y asesorarte en materia
                fiscal, contable y laboral. Te mantendremos informado de los
                cambios fiscales que le afecten a tu negocio o empresa.
              </p>
            </>
          }
          picturePosition="left"
        />
        <PictureSection
          pictureSrc={StockImage}
          text={
            <>
              <h2>Asesoría Contable</h2>
              <p>
                Con nuestra asesoría contable en Barcelona, tendrás
                asesoramiento profesional permanente para garantizar que tu
                información contable represente en todo momento la realidad
                financiera de tu negocio o empresa, facilitando con ello la toma
                de decisiones.
              </p>
              <br />
              <p>
                Te mantendremos informado de los cambios contables y fiscales
                que le afecten a tu negocio o empresa. Somos una asesoría
                especialista en autónomos y pymes, pequeñas y medianas empresas.
              </p>
            </>
          }
          picturePosition="right"
        />
      </Layout>
    </>
  );
};

export default Home;
