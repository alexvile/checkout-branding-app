import { Image } from "@shopify/polaris";
import noImage from "../assets/noImage.jpeg";

export const ImagePreview = ({ url, title }) => {
  return (
    <div>
      {title && <p>{title}</p>}
      {url ? (
        <Image source={url} width={100} />
      ) : (
        <Image source={noImage} width={100} />
      )}
    </div>
  );
};
