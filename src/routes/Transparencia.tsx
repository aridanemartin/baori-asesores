import { Layout } from "../components/Layout/Layout";
import TransparencyImage from "../assets/transparency.jpg";
import PictureSection from "../components/PictureSection/PictureSection";
import { NativeAccordion } from "../components/NativeAccordion/NativeAccordion";
import organigrama from "../assets/organigrama.jpg";
import subvencion from "../assets/subvencion.jpg";
import "../styles/Transparencia.css";

export const Transparencia = () => {
  return (
    <div className="transparencia">
      <Layout>
        <PictureSection
          pictureSrc={TransparencyImage}
          text={
            <>
              <h2>Portal de Transparencia</h2>
              <NativeAccordion title="1. Normativa Aplicable a la Entidad">
                <article>
                  La entidad{" "}
                  <strong>BAORI ASESORES Y CONSULTORES, S. COOP. CAN</strong>{" "}
                  fue constituida en Las Palmas de Gran Canaria el 7 de
                  noviembre de 2023 ante el Notario D. Carlos José Jarabo
                  Rivera, bajo el nº 3.070 de su Protocolo. La sociedad tiene
                  forma jurídica de SOCIEDAD COOPERATIVA, y se rige por lo
                  establecido en la Ley 4/2022, de 31 de octubre, de Sociedades
                  Cooperativas de Canarias, por el Código de Comercio, y otras
                  disposiciones supletorias en materia mercantil y societaria,
                  en materia laboral se rige por lo dispuesto por el Real
                  Decreto Legislativo 2/2015, de 23 de octubre, por el que se
                  aprueba el texto refundido de la Ley del Estatuto de los
                  Trabajadores, así como otras disposiciones legales.
                </article>
              </NativeAccordion>
              <NativeAccordion title="2. Sobre el objeto social y fines de la entidad">
                <article>
                  <p>
                    La entidad{" "}
                    <strong>BAORI ASESORES Y CONSULTORES, S. COOP. CAN</strong>{" "}
                    tiene como objeto social de la Cooperativa proporcionar a
                    sus socios puestos de trabajo, mediante su esfuerzo personal
                    y directo, a tiempo parcial o completo, mediante la
                    producción en común de bienes y servicios destinados a
                    terceros. Las actividades económicas, que, para el
                    cumplimiento de su objeto social, desarrollará esta Sociedad
                    Cooperativa, son:
                  </p>
                  <br />
                  <ul>
                    <li>
                      a) Actividades de consultoría y asesoramiento contable,
                      fiscal, laboral, económico, financiero, jurídico,
                      mercantil y empresarial en general.
                    </li>
                    <li>
                      b) Realización de estudios económicos y empresariales.
                    </li>
                    <li>
                      c) La gestión y administración de empresas y actividades
                      económicas.
                    </li>
                    <li>
                      d) Servicios relacionados con las tecnologías de la
                      información, procesamiento de datos, almacenamiento y
                      tratamiento de información.
                    </li>
                    <li>
                      e) Actividades de formación y enseñanza de formación y
                      perfeccionamiento empresarial. El CNAE-2009 de la
                      actividad principal es el 6920 - Actividades de
                      contabilidad, teneduría de libros, auditoría y asesoría
                      fiscal.
                    </li>
                  </ul>
                </article>
              </NativeAccordion>
              <NativeAccordion title="3. Organigrama de la entidad">
                <img src={organigrama} alt="Organigrama de la entidad" />
              </NativeAccordion>
              <NativeAccordion title="5. Administradores">
                <article>
                  La entidad{" "}
                  <strong>BAORI ASESORES Y CONSULTORES, S. COOP. CAN</strong>{" "}
                  está dirigida por su Administrador único, D. Emilio Bas
                  García, economista por la universidad de Navarra (1996) y
                  cuenta con más de 27 años de experiencia, habiendo
                  desarrollado gran parte de su carrera profesional en el sector
                  financiero, habiendo sido director de oficina de varias
                  entidades financieras, en la actualidad su carrera profesional
                  se desarrolla en el ámbito del asesoramiento empresarial.
                </article>
              </NativeAccordion>
              <NativeAccordion title="6. Procedimientos - Canal interno de información">
                <article>
                  La entidad{" "}
                  <strong>BAORI ASESORES Y CONSULTORES, S. COOP. CAN</strong> no
                  es una entidad sujeta a las obligaciones establecidas por la
                  Ley 2/2023, de 20 de febrero, reguladora de la protección de
                  las personas que informen sobre infracciones normativas y de
                  lucha contra la corrupción.
                </article>
              </NativeAccordion>
              <NativeAccordion title="7. Económico-financiera - Cuentas anuales">
                <article>
                  La entidad{" "}
                  <strong>BAORI ASESORES Y CONSULTORES, S. COOP. CAN</strong>{" "}
                  fue constituida en Las Palmas de Gran Canaria el 7 de
                  noviembre de 2023 ante el Notario D. Carlos José Jarabo
                  Rivera, bajo el nº 3.070 de su Protocolo. Dada la fecha de
                  constitución de la entidad ésta aún no ha aprobado Cuentas
                  Anuales, siendo las primeras que aprobará la Asamblea General
                  las correspondientes al ejercicio 2023, previsiblemente en el
                  mes de junio de 2024.
                </article>
              </NativeAccordion>
              <NativeAccordion title="8. Económico-financiera - Auditoría de cuentas anuales">
                <article>
                  La entidad{" "}
                  <strong>BAORI ASESORES Y CONSULTORES, S. COOP. CAN</strong>{" "}
                  fue constituida en Las Palmas de Gran Canaria el 7 de
                  noviembre de 2023 ante el Notario D. Carlos José Jarabo
                  Rivera, bajo el nº 3.070 de su Protocolo. La sociedad no está
                  obligada a someter sus cuentas a verificación de auditor de
                  conformidad con el artículo 263 del Real Decreto Legislativo
                  1/2010, de 2 de julio, por el que se aprueba el Texto
                  Refundido de la Ley de Sociedades de Capital, por no superar
                  los límites establecidos en la legislación vigente.
                </article>
              </NativeAccordion>
              <NativeAccordion title="9. Contratos formalizados con las administraciones públicas">
                <article>
                  La entidad{" "}
                  <strong>BAORI ASESORES Y CONSULTORES, S. COOP. CAN</strong> no
                  es una entidad obligada a cumplir con lo previsto en la Ley
                  9/2017, de 8 de noviembre, de Contratos del Sector Público,
                  por la que se transponen al ordenamiento jurídico español las
                  Directivas del Parlamento Europeo y del Consejo 2014/23/UE y
                  2014/24/UE, de 26 de febrero de 2014, ni ha participado como
                  entidad privada en ningún procedimiento de licitación de
                  contratos administrativos.
                </article>
              </NativeAccordion>
              <NativeAccordion title="10. Contratos formalizados con las administraciones públicas">
                <article>
                  La entidad{" "}
                  <strong>BAORI ASESORES Y CONSULTORES, S. COOP. CAN</strong> no
                  es una entidad obligada a cumplir con lo previsto en la Ley
                  9/2017, de 8 de noviembre, de Contratos del Sector Público,
                  por la que se transponen al ordenamiento jurídico español las
                  Directivas del Parlamento Europeo y del Consejo 2014/23/UE y
                  2014/24/UE, de 26 de febrero de 2014, ni ha participado como
                  entidad privada en ningún procedimiento de licitación de
                  contratos administrativos, por lo que no existen datos
                  estadísticos sobre el volumen presupuestario de contratos
                  adjudicados a través de cada uno de los procedimientos
                  previstos en la legislación de contratos del sector público.
                </article>
              </NativeAccordion>
              <NativeAccordion title="11. Contratos formalizados con las administraciones públicas - 	Decisiones de desistimiento y renuncia de los contratos">
                <article>
                  La entidad{" "}
                  <strong>BAORI ASESORES Y CONSULTORES, S. COOP. CAN</strong> no
                  es una entidad obligada a cumplir con lo previsto en la Ley
                  9/2017, de 8 de noviembre, de Contratos del Sector Público,
                  por la que se transponen al ordenamiento jurídico español las
                  Directivas del Parlamento Europeo y del Consejo 2014/23/UE y
                  2014/24/UE, de 26 de febrero de 2014, ni ha participado como
                  entidad privada en ningún procedimiento de licitación de
                  contratos administrativos, por lo que no existen
                  modificaciones sobre los contratos formalizados.
                </article>
              </NativeAccordion>
              <NativeAccordion title="12. Relación de contratos resueltos con entidades públicas">
                <article>
                  La entidad{" "}
                  <strong>BAORI ASESORES Y CONSULTORES, S. COOP. CAN</strong> no
                  es una entidad obligada a cumplir con lo previsto en la Ley
                  9/2017, de 8 de noviembre, de Contratos del Sector Público,
                  por la que se transponen al ordenamiento jurídico español las
                  Directivas del Parlamento Europeo y del Consejo 2014/23/UE y
                  2014/24/UE, de 26 de febrero de 2014, ni ha participado como
                  entidad privada en ningún procedimiento de licitación de
                  contratos administrativos, por lo que no existen decisiones de
                  desistimiento y renuncia de los contratos.
                </article>
              </NativeAccordion>
              <NativeAccordion title="13. Información trimestral de contratos menores con entidades públicas">
                <article>
                  La entidad{" "}
                  <strong>BAORI ASESORES Y CONSULTORES, S. COOP. CAN</strong> no
                  es una entidad obligada a cumplir con lo previsto en la Ley
                  9/2017, de 8 de noviembre, de Contratos del Sector Público,
                  por la que se transponen al ordenamiento jurídico español las
                  Directivas del Parlamento Europeo y del Consejo 2014/23/UE y
                  2014/24/UE, de 26 de febrero de 2014, ni ha participado como
                  entidad privada en ningún procedimiento de licitación de
                  contratos administrativos, por lo que no existen contratos
                  menores formalizados.
                </article>
              </NativeAccordion>
              <NativeAccordion title="14. Convenios y encomiendas de gestión - Convenios con entidades públicas">
                <article>
                  La entidad{" "}
                  <strong>BAORI ASESORES Y CONSULTORES, S. COOP. CAN</strong> no
                  es una entidad obligada a cumplir con lo previsto en la Ley
                  9/2017, de 8 de noviembre, de Contratos del Sector Público,
                  por la que se transponen al ordenamiento jurídico español las
                  Directivas del Parlamento Europeo y del Consejo 2014/23/UE y
                  2014/24/UE, de 26 de febrero de 2014, ni ha formalizado como
                  entidad privada ningún convenio con entidades públicas.
                </article>
              </NativeAccordion>
              <NativeAccordion title="15. Convenios y encomiendas de gestión - Convenios con entidades públicas">
                <article>
                  La entidad{" "}
                  <strong>BAORI ASESORES Y CONSULTORES, S. COOP. CAN</strong> no
                  es una entidad obligada a cumplir con lo previsto en la Ley
                  9/2017, de 8 de noviembre, de Contratos del Sector Público,
                  por la que se transponen al ordenamiento jurídico español las
                  Directivas del Parlamento Europeo y del Consejo 2014/23/UE y
                  2014/24/UE, de 26 de febrero de 2014, ni ha formalizado como
                  entidad privada ningún convenio con entidades públicas, y por
                  lo tanto no se han realizado modificaciones realizadas durante
                  su vigencia.
                </article>
              </NativeAccordion>
              <NativeAccordion title="16. Convenios y encomiendas de gestión - Convenios con entidades públicas">
                <img src={subvencion} alt="Organigrama de la entidad" />
              </NativeAccordion>
            </>
          }
          picturePosition="left"
        />
      </Layout>
    </div>
  );
};
