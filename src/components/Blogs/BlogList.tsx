import Link from 'next/link';
import { useI18n } from 'next-localization';

import React from 'react';
// import { Image } from '@sitecore-jss/sitecore-jss-nextjs';

interface ImageData {
  alt: string;
  height: string;
  src: string;
  width: string;
}

interface FieldData {
  Description: { value: string };
  Heading: { value: string };
  Image: { value: ImageData };
  pageTitle: { value: string };
}

interface ItemData {
  id: string;
  url: string;
  name: string;
  displayName: string;
  fields: FieldData;
}

interface BlogListProps {
  fields: {
    items: ItemData[];
  };
}

const BlogList = ({ fields }: BlogListProps) => {
  const { t } = useI18n();

  console.log('BlogList fields:', fields);

  return (
    <div>
      <p className="text-center h1">{t('BlogKey')}</p>
      <div className="row d-flex align-items-center justify-content-center">
        {fields?.items?.map((item) => (
          <div key={item.id} className="card" style={{ width: '18rem', margin: '1rem' }}>
            <img
              src={item.fields.Image.value.src}
              alt={item.fields.Image.value.alt || ''}
              className="card-img-top mt-2"
              width={'100'}
            />
            {/*  this will also work */}
            {/* <Image fie  ld={item.fields.Image} className="card-img-top" /> */}
            <div className="card-body">
              <h5 className="card-title">{item.fields.Heading.value}</h5>
              <p className="card-text">{item.fields.Description.value}</p>
              <Link href={item.url} className="btn btn-outline-success align-self-center">
                Go to blog
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
