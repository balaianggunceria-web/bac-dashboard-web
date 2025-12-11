import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { get_product } from '../../store/Reducers/productReducer';
import { FaArrowLeft } from 'react-icons/fa';

const ViewProduct = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { product, loading } = useSelector(state => state.product);

  useEffect(() => {
    if (productId) {
      dispatch(get_product(productId));
    }
  }, [dispatch, productId]);

  if (loading) {
    return (
      <div className="p-4 text-center text-lg text-gray-600">Loading...</div>
    );
  }

  if (!product) {
    return (
      <div className="p-4 text-center text-lg text-red-600">
        Product not found.
      </div>
    );
  }

  return (
    <div className="px-4 lg:px-10 py-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-5"> 
        <Link
          to="/seller/dashboard/products"
          className="flex items-center gap-2 bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition"
        >
          <FaArrowLeft />
          <span>Back</span>
        </Link>
        <h1 className="text-xl font-semibold text-gray-800">
          Product Details
        </h1>
      </div>

      {/* Product Detail Card */}
      <div className="bg-indigo-500 rounded-lg shadow p-5 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Gambar */}
        <div className="flex justify-start items-center">
          <img
            src={product.images && product.images[0]}
            alt={product.name}
            className="w-full max-w-sm h-80 object-contain rounded-lg border bg-white"
          />
        </div>

        {/* Detail */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">{product.name}</h2>

          <div className="mb-2">
            <span className="font-semibold text-white">Category :</span>{' '}
            {product.category}
          </div>
          <div className="mb-2">
            <span className="font-semibold text-white">Brand :</span>{' '}
            {product.brand}
          </div>
          <div className="mb-2">
            <span className="font-semibold text-white">Price :</span>{' '}
            Rp.{product.price.toLocaleString('id-ID')}
          </div>
          <div className="mb-2">
            <span className="font-semibold text-white">Discount :</span>{' '}
            {product.discount ? `${product.discount}%` : 'No Discount'}
          </div>
          <div className="mb-2">
            <span className="font-semibold text-white">Stock :</span>{' '}
            {product.stock}
          </div>
          <div className="mt-4">
            <span className="font-semibold text-white">Description :</span>
            <p className="text-black mt-1">{product.description || '-'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
