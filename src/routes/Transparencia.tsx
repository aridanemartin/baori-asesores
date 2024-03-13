import { Layout } from "../components/Layout/Layout";
import TransparencyImage from "../assets/transparency.jpg";
import PictureSection from "../components/PictureSection/PictureSection";
import { NativeAccordion } from "../components/NativeAccordion/NativeAccordion";

export const Transparencia = () => {
  return (
    <Layout>
      <PictureSection
        pictureSrc={TransparencyImage}
        text={
          <>
            <h2>Portal de Transparencia</h2>
            <NativeAccordion title="Información Normativa">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
                unde, ex rem voluptates autem aliquid veniam quis temporibus!
              </p>
            </NativeAccordion>
            <NativeAccordion title="Información Institucional">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
                unde, ex rem voluptates autem aliquid veniam quis temporibus!
              </p>
            </NativeAccordion>
            <NativeAccordion title="Subvenciones">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
                unde, ex rem voluptates autem aliquid veniam quis temporibus!
              </p>
            </NativeAccordion>
            <NativeAccordion title="Información Económica-financiera">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
                unde, ex rem voluptates autem aliquid veniam quis temporibus!
              </p>
            </NativeAccordion>
          </>
        }
        picturePosition="left"
      />
    </Layout>
  );
};
