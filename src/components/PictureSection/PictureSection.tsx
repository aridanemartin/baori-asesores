import { ReactNode } from "react";
import "./PictureSection.css";

type PicturePosition = "left" | "right";

interface PictureSectionProps {
  pictureSrc: string;
  picturePosition: PicturePosition;
  text: ReactNode;
}

const PictureSection = ({
  pictureSrc: pictureUrl,
  picturePosition,
  text,
}: PictureSectionProps) => {
  return (
    <div className={`picture-section ${picturePosition}`}>
      <div className="picture-wrapper">
        <img className="picture" src={pictureUrl} alt="Picture" />
      </div>
      <div className="text">{text}</div>
    </div>
  );
};

export default PictureSection;
