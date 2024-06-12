import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useParams } from 'next/navigation';
// import Navigation from 'components/Navigation';

type ProductType = {
  id: number;
  productName: string;
  productImage: string;
  productRatings: number;
  productCategory: number;
};

const ProductSlug = () => {
  const router = useRouter();
  const params = useParams();
  console.log('Params:', params);
  debugger;
  const { path } = router.query;
  const id = path ? path[path.length - 1] : null;

  const [data, setData] = useState<ProductType>();
  const [loading, setLoading] = useState(true);
  // const [navigationData, setNavigationData] = useState([]);

  // useEffect(() => {
  //   if (id) {
  //     const FetchProduct = async () => {
  //       try {
  //         const response = await fetch(`https://localhost:7189/Product/GetProductByID/${id}`);
  //         const data = await response.json();
  //         setData(data);
  //         setLoading(false);
  //         console.log('Product Data:', data);
  //       } catch (error) {
  //         console.error('Error Fetching Product:', error);
  //         setLoading(false);
  //       }
  //     };

  //     // const fetchNavigationData = async () => {
  //     //   try {
  //     //     debugger;
  //     //     const layoutServiceUrl = `https://sv103sc.dev.local/sitecore/api/layout/render/jss?item={5288D54B-295E-5FED-9225-D9A08F763234}&sc_apikey={36DDD5C0-2D52-488E-8DA3-48D8CDA16158}&sc_children=true`;
  //     //     const res = await fetch(layoutServiceUrl);
  //     //     const data = await res.json();
  //     //     console.log('Navigation Data:', data);
  //     //     const finalData = data.sitecore.route.placeholders['jss-header'][0].fields.items;
  //     //     console.log('Final data', finalData);
  //     //     setNavigationData(finalData);
  //     //   } catch (error) {
  //     //     console.error('Error fetching navigation data:', error);
  //     //   }
  //     // };

  //     // fetchNavigationData();
  //     FetchProduct();
  //   }
  // }, [id]);

  useEffect(() => {
    if (id) {
      const FetchProduct = async () => {
        try {
          const response = await fetch(`https://localhost:7189/Product/GetProductByID/${id}`);
          const data = await response.json();
          setData(data);
          setLoading(false);
          console.log('Product Data:', data);
        } catch (error) {
          console.error('Error Fetching Product:', error);
          setLoading(false);
        }
      };

      FetchProduct();
    }
  }, [id]);

  return (
    <>
      {/* <Navigation fields={{ items: navigationData }} />{' '} */}
      <div className="container d-flex justify-content-center align-items-center text-center vh-100">
        {loading ? (
          <h1 className="d-flex justify-content-center align-items-center">Loading...</h1>
        ) : (
          <div
            style={{
              backgroundImage: `url(data:image/jpeg;base64,${data?.productImage})`,
              backgroundSize: 'cover',
              height: '300px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              color: 'white',
              textShadow: '2px 2px 4px rgba(0, 0, 0.5, 1)',
              padding: '0 20px',
            }}
            className="rounded-3 shadow-lg"
          >
            <h1>{data?.productName}</h1>
            <p>
              Review: &nbsp;
              {data?.productRatings}
            </p>
            <p>
              Category: &nbsp;
              {data?.productCategory}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductSlug;

// import React from 'react';
// import ProductSlug from 'src/pages/productdetail/[id]';

// const ProductDetail = () => {
//   return (
//     <>
//       <ProductSlug />
//     </>
//   );
// };

// export default ProductDetail;
