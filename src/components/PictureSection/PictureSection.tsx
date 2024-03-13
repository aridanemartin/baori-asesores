import { ReactNode } from "react";
import "./PictureSection.css";

type PicturePosition = "left" | "right";

interface PictureSectionProps {
  pictureSrc: string;
  picturePosition: PicturePosition;
  text: ReactNode;
  isMap?: boolean;
}

const PictureSection = ({
  pictureSrc: pictureUrl,
  picturePosition,
  text,
  isMap,
}: PictureSectionProps) => {
  return (
    <div className={`picture-section ${picturePosition}`}>
      <div className="picture-wrapper">
        {isMap ? (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d427.3458268320401!2d-15.44548466687414!3d28.11773854347325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc409506f88bd7b3%3A0x693bad58bf9578eb!2sJuan%20Carlos%20I%2C%209!5e0!3m2!1sen!2ses!4v1710262722661!5m2!1sen!2ses"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        ) : (
          <img className="picture" src={pictureUrl} alt="Picture" />
        )}
      </div>
      <div className="text">{text}</div>
    </div>
  );
};

export default PictureSection;
