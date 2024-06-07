import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from 'src/store/store';
import { setProducts, setCategories } from 'src/store/productSlice';
import '../style.module.css';
import Loader from 'components/Loader';

export type ProductType = {
  id: number;
  productName: string;
  productImage: string;
  productRatings: number;
  productCategory: number;
};

type FieldType = {
  value: string;
};

type FieldsType = {
  Greetings: FieldType;
  Heading: FieldType;
  Subheading: FieldType;
};

type Propstype = {
  fields: FieldsType;
};

export type CategoryType = {
  Category: string;
};

const Products = (props: Propstype) => {
  // const [categories, setCategories] = useState<CategoryType[]>([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.products.products);
  const categories = useSelector((state: RootState) => state.products.categories);

  useEffect(() => {
    const fetchProducts = async () => {
      if (products.length === 0) {
        try {
          const response = await fetch('https://localhost:7189/Product/GetProducts');
          const data = await response.json();
          dispatch(setProducts(data));
          setLoading(false);
        } catch (error) {
          console.error('Error Fetching Products:', error);
          setLoading(false);
        }
      } else {
        console.log('Data fetched from store');
        setLoading(false);
      }
    };
    const fetchCategories = async () => {
      if (categories?.length === 0) {
        try {
          const response = await fetch('https://localhost:7189/Product/GetCategory');
          const data = await response.json();
          dispatch(setCategories(data));
          console.log('Categories:', data);
        } catch (error) {
          console.error('Error Fetching Categories:', error);
        }
      }
    };

    fetchCategories();
    fetchProducts();
  }, [categories?.length, dispatch, products.length]);

  const handleOnChangeCategory = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const searchQuery = event.target.value;
    if (searchQuery === 'Select Category') {
      try {
        const response = await fetch('https://localhost:7189/Product/GetProducts');
        const data = await response.json();
        dispatch(setProducts(data));
      } catch (error) {
        console.error('Error Fetching Products:', error);
      }
    } else {
      try {
        const response = await fetch(
          `https://localhost:7189/Product/SearchProducts?searchQuery=${searchQuery}`
        );
        const data = await response.json();
        dispatch(setProducts(data));
      } catch (error) {
        console.error('Error Fetching Products:', error);
      }
    }
  };

  const handleSearchChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = event.target.value;
    if (searchQuery === '') {
      try {
        const response = await fetch('https://localhost:7189/Product/GetProducts');
        const data = await response.json();
        dispatch(setProducts(data));
      } catch (error) {
        console.error('Error Fetching Products:', error);
      }
    }
    if (searchQuery.length > 4) {
      try {
        const response = await fetch(
          `https://localhost:7189/Product/SearchProducts?searchQuery=${searchQuery}`
        );
        const data = await response.json();
        dispatch(setProducts(data));
      } catch (error) {
        console.error('Error Fetching Products:', error);
      }
    }
  };

  if (loading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  return (
    <div className="container my-2">
      <div className="row">
        <div className="col-6">
          <h1 className="display-2">{props.fields.Heading.value}</h1>
          <p className="lead">{props.fields.Subheading.value}</p>
        </div>
        <div className="col-6 d-flex justify-content-center align-items-center ">
          <p className="lead">{props.fields.Greetings.value}</p>
        </div>
        <hr className="my-4" />
      </div>
      <div className="row">
        <div className="row">
          <div className="col-6 my-2">
            <input
              className="form-control text-dark-emphasis"
              type="text"
              placeholder="Search..."
              onChange={handleSearchChange}
            />
          </div>
          <div className="col-6 my-2">
            <select className="form-select" onChange={handleOnChangeCategory}>
              <option selected>Select Category</option>
              {categories?.map((Category) => (
                <option key={Category.toString()} value={Category.toString()}>
                  {Category.toString()}
                </option>
              ))}
            </select>
          </div>
        </div>
        {products.map((product) => (
          <div key={product.id} className="col-md-3">
            <div className="card">
              <img
                src={`data:image/jpeg;base64,${product.productImage}`}
                alt={product.productName || ''}
                className="card-img-top"
              />
              <div className="card-body text-center">
                <h3 className="card-title text-body-tertiary">{product.productName}</h3>
                <p className="card-text text-body-secondary">
                  <strong> Category:</strong> {product.productCategory}
                </p>
                <p className="card-text text-body-secondary">
                  <strong> Review:</strong> {product.productRatings}
                </p>
                {product.id && (
                  <Link
                    className="btn btn-primary text-white"
                    href={{
                      pathname: '/Products/ProductDetail/',
                      query: { id: product.id },
                    }}
                    as={`/Products/ProductDetail/${product.id}`}
                  >
                    Details
                  </Link>
                  // <Link href={`/productdetail/${product.id}`}>Details</Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
