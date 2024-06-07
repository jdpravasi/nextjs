import React from 'react';
import Link from 'next/link';

interface QuickLinkValue {
  value: string;
}

interface Fields {
  QuickLink: QuickLinkValue;
}

interface Item {
  displayName: string;
  fields: Fields;
  id: string;
  name: string;
  url: string;
}

interface Props {
  componentFactory: (componentName: string, exportName: string) => void;
  fields: {
    items: Item[];
  };
}

function SocialLinks(props: Props) {
  console.log('Social Link', props);
  return (
    <>
      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
        <h6 className="text-uppercase  fw-bold mb-4">Social Links</h6>
        {props.fields.items.map((item: Item) => (
          <p key={item.id}>
            <Link
              className="text-white"
              href={item.fields.QuickLink.value}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.displayName}
            </Link>
          </p>
        ))}
      </div>
    </>
  );
}

export default SocialLinks;
