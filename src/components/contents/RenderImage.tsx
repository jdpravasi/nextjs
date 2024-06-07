import React from 'react';
import { Image } from '@sitecore-jss/sitecore-jss-nextjs';

interface ImageData {
  value: {
    src: string;
    alt: string;
  };
}

interface Fields {
  Image: ImageData;
}

interface RenderImageProps {
  fields: Fields;
}

// const RenderImage: React.FC<ImageProps> = ({ imageUrl }) => {
const RenderImage = (props: RenderImageProps) => {
  console.log('Image Props', props);
  return (
    <div className="container d-flex align-items-center justify-content-center mt-1">
      <Image field={props.fields.Image} />
    </div>
  );
};

export default RenderImage;
