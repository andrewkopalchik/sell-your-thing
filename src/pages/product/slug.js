import React from 'react';
import { useParams } from 'react-router-dom';

export const ProductDetails = () => {
  const { slug } = useParams();

  return (
    <div>
      <h1>ProductDetails for {slug}</h1>
      {/* Add logic to fetch and display details for the product with the given slug */}
    </div>
  );
};

export default ProductDetails;
