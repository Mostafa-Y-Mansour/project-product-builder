import { FC } from "react";

interface IProps {
  imageUrl: string;
  alt: string;
  className: string;
}

const Image: FC<IProps> = ({ imageUrl, alt, className }) => {
  return <img src={imageUrl} alt={alt} className={className} />;
};

export default Image;
