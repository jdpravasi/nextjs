import React from 'react';

interface ImageValue {
  src: string;
  alt: string;
}

interface FieldValue {
  value: string | ImageValue;
}

interface Fields {
  Heading: FieldValue;
  Description: FieldValue;
  Image: FieldValue;
}

interface BlogDetailsProps {
  fields: Fields;
}

const BlogDetails = (props: BlogDetailsProps) => {
  console.log('BlogDetails props:', props);
  return (
    <div style={{ backgroundColor: 'skyblue' }}>
      <div className="row align-items-center p-2">
        <div className="col-md-6 text-center">
          <h1 className="display-5">{props.fields.Heading.value.toString()}</h1>
          <p className="lead">{props.fields.Description.value.toString()}</p>
        </div>
        <div className="col-md-6 ">
          <img
            src={(props.fields.Image.value as ImageValue).src}
            alt={(props.fields.Image.value as ImageValue).alt}
            className="img-fluid rounded-start-circle"
            style={{ width: '400px' }}
          />
        </div>
      </div>
    </div>
  );
};
export default BlogDetails;
