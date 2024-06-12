import React from 'react';
import Link from 'next/link';

type ImageType = {
  value: {
    src: string;
  };
};

type FieldType = {
  value: string;
};

type ItemType = {
  displayName: string;
  url: string;
  fields: {
    Category: FieldType;
    Content: FieldType;
    HeadLine: FieldType;
    Image: ImageType;
    OnNavigation: FieldType;
    pageTitle: FieldType;
  };
};

type PropsType = {
  fields: {
    items: ItemType[];
  };
};

function NewsList(props: PropsType) {
  console.log('Breaking NewsList:', props);

  // Extract the required fields from props
  const items = props.fields.items;
  return (
    <div className="row d-flex justify-content-center">
      <h3 className="text-center">{items[0].fields.Category.value}</h3>
      {items.map((item, index) => {
        const { HeadLine, Image } = item.fields;
        return (
          <div
            className="col-md-3 card text-primary"
            key={index}
            style={{ border: '1px solid black', margin: '10px' }}
          >
            {item.url && (
              <Link href={item.url}>
                <img
                  src={Image.value.src}
                  alt={HeadLine.value}
                  style={{ width: '100%', objectFit: 'cover' }}
                />
              </Link>
            )}
            <div style={{ padding: '10px' }}>
              <h2>{HeadLine.value}</h2>
              {/* <div dangerouslySetInnerHTML={{ __html: Content.value }} /> */}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default NewsList;
