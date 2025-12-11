import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get_discount_products } from '../../store/Reducers/productReducer';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DiscountProducts = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(get_discount_products());
  }, [dispatch]);

  if (loading) return <div className="p-5 text-center">Loading...</div>;

  return (
    <div className="px-5 py-6">
      <h1 className="text-xl font-semibold text-gray-800 mb-4">Discount Products</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product._id} className="bg-indigo-500 rounded-lg p-4 shadow-md text-white">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full max-w-sm h-80 object-contain rounded-lg border bg-white"
              />
              <h2 className="text-lg font-bold mb-1">{product.name}</h2>
              <p className="text-sm">Brand: {product.brand}</p>
              <p className="text-sm">Discount: {product.discount}%</p>
              <p className="text-sm">Price: Rp.{product.price.toLocaleString('id-ID')}</p>
              <div className="mt-3">
                <Link
                  to={`/seller/dashboard/view-product/${product._id}`}
                  className="bg-green-500 px-3 py-1 rounded hover:bg-green-600 inline-flex items-center gap-2"
                >
                  <FaEye /> View
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-200">No discount products found.</p>
        )}
      </div>
    </div>
  );
};

export default DiscountProducts;
