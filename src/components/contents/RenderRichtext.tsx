import React from 'react';
import { RichText } from '@sitecore-jss/sitecore-jss-react';

interface TextData {
  value: string;
}

interface Fields {
  Text: TextData;
}

interface RenderRichTextProps {
  fields: Fields;
}

const RenderRichText: React.FC<RenderRichTextProps> = (props) => {
  console.log('RenderRichText props:', props);

  return (
    <div className="container mt-5">
      <RichText field={props.fields.Text} />
    </div>
  );
};

export default RenderRichText;
