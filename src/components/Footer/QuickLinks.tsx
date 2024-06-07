import { ComponentProps } from 'lib/component-props';
import { ComponentRendering } from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';

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

function QuickLinks(props: NavigationProps) {
  console.log('Quick Links', props);
  return (
    <>
      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
        <h6 className="text-uppercase fw-bold mb-4">Quick Links</h6>
        <Link className="text-white" href="/">
          Home
        </Link>{' '}
        <br />
        {props?.fields?.items?.map(
          (item: ItemData) =>
            item?.fields?.OnNavigation?.value && (
              <>
                <Link className="text-white" key={item.id} href={item.url}>
                  {item.displayName} <br />
                </Link>
              </>
            )
        )}
      </div>
    </>
  );
}

export default QuickLinks;
