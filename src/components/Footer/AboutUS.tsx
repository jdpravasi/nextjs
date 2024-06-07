import React from 'react';

interface AboutUSValue {
  value: string;
}

interface Fields {
  AboutUS: AboutUSValue;
}

interface Item {
  displayName: string;
  fields: Fields;
  id: string;
}

interface Props {
  fields: {
    items: Item[];
  };
}

function AboutUS(props: Props) {
  console.log('AboutUS', props);
  return (
    <>
      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
        <h6 className="text-uppercase  fw-bold mb-4">About Us</h6>
        {props.fields.items.map((item: Item) => (
          <p key={item.id}>
            <span>{item.fields.AboutUS.value}</span>
          </p>
        ))}
      </div>
    </>
  );
}

export default AboutUS;
