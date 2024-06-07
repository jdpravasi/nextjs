import React from 'react';

type FieldTypesProps = {
  fields: {
    CheckList: { id: string; url: string; name: string; displayName: string; fields: object }[];
    MultiLiist: { id: string; url: string; name: string; displayName: string; fields: object }[];
    MultiLiistWithSearch: {
      id: string;
      url: string;
      name: string;
      displayName: string;
      fields: object;
    }[];
    DropList: { value: string };
    GroupDropList: { value: string };
    TreeLIST: { id: string; url: string; name: string; displayName: string; fields: object }[];
    TreeListEX: { id: string; url: string; name: string; displayName: string; fields: object }[];
  };
};

const Demo = (props: FieldTypesProps) => {
  console.log('Type fields:', props);
  return (
    <>
      <div className="container">
        <strong>CheckList: </strong>
        <ul>
          {props.fields.CheckList.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
        <strong>Multilist: </strong>
        <ul>
          {props.fields.MultiLiist.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
        <strong>MultiListWithSearch: </strong>
        <ul>
          {props.fields.MultiLiistWithSearch.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
        <strong>DropList:</strong>
        <p>{props.fields.DropList.value}</p>
        <strong>GroupedDropList:</strong>
        <p>{props.fields.GroupDropList.value}</p>
        <strong>TreeList: </strong>
        <ul>
          {props.fields.TreeLIST.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
        <strong>TreeListEx: </strong>
        <ul>
          {props.fields.TreeListEX.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default Demo;
