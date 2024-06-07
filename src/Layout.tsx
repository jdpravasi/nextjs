import React from 'react';
import Head from 'next/head';
import { Placeholder, LayoutServiceData, Field, HTMLLink } from '@sitecore-jss/sitecore-jss-nextjs';
import config from 'temp/config';
// import Navigation from 'src/Navigation';
import Scripts from 'src/Scripts';
import { Provider } from 'react-redux';
import { store } from './store/store';

// Prefix public assets with a public URL to enable compatibility with Sitecore editors.
// If you're not supporting Sitecore editors, you can remove this.
const publicUrl = config.publicUrl;

interface LayoutProps {
  layoutData: LayoutServiceData;
  headLinks: HTMLLink[];
}

interface RouteFields {
  [key: string]: unknown;
  pageTitle: Field;
}

const Layout = ({ layoutData, headLinks }: LayoutProps): JSX.Element => {
  const { route } = layoutData.sitecore;

  const fields = route?.fields as RouteFields;

  return (
    <>
      <Provider store={store}>
        <Scripts />
        <Head>
          <title>{fields.pageTitle.value.toString() || 'Page'}</title>
          <link rel="icon" href={`${publicUrl}/favicon.ico`} />
          {headLinks.map((headLink) => (
            <link rel={headLink.rel} key={headLink.href} href={headLink.href} />
          ))}
        </Head>

        {/* <Navigation /> */}
        {/* root placeholder for the app, which we add components to using route data */}
        <div>{route && <Placeholder name="jss-header" rendering={route} />}</div>
        <div>{route && <Placeholder name="jss-main" rendering={route} />}</div>
        <div className="footer">
          <div className="row mt-3 bg-black text-white  p-4">
            {route && <Placeholder name="jss-footer" rendering={route} />}
          </div>
        </div>
      </Provider>
    </>
  );
};

export default Layout;
