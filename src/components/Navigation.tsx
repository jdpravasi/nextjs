import Link from 'next/link';
import config from 'temp/config';
import { ComponentProps } from 'lib/component-props';
import { ComponentRendering } from '@sitecore-jss/sitecore-jss-nextjs';

const publicUrl = config.publicUrl;

interface ItemData {
  id: string;
  url: string;
  name: string;
  displayName: string;
  fields: {
    OnNavigation?: {
      value: boolean;
    };
  };
}

type NavigationProps = ComponentProps & {
  fields: {
    items: ItemData[];
    rendering?: ComponentRendering;
    param?: ComponentRendering;
  };
};

const Navigation = (props: NavigationProps) => {
  console.log('Navigation items:', props);
  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 border-bottom bg-black">
      <h5 className="my-0 me-md-auto fw-normal">
        <Link className="text-white" href="/">
          <img src={`${publicUrl}/sc_logo.svg`} alt="Sitecore" />
        </Link>
      </h5>
      <Link className="text-white" href="/">
        Home
      </Link>
      &nbsp; &nbsp;
      {props?.fields?.items?.map(
        (item: ItemData) =>
          item?.fields?.OnNavigation?.value && (
            <Link className="text-white" key={item.id} href={item.url}>
              {item.displayName}&nbsp; &nbsp;
            </Link>
          )
      )}
    </div>
  );
};

export default Navigation;
