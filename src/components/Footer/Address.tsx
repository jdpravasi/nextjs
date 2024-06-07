import React from 'react';

interface AddressValue {
  value: string;
}

interface Fields {
  Address: AddressValue;
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

function Address(props: Props) {
  console.log('Address', props);
  return (
    <>
      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
        <h6 className="text-uppercase  fw-bold mb-4">Address</h6>
        {props.fields.items.map((item: Item) => (
          <>
            <hr />
            <p key={item.id}>
              <span>{item.fields.Address.value}</span>
            </p>
            <hr />
          </>
        ))}
      </div>
    </>
  );
}

export default Address;
