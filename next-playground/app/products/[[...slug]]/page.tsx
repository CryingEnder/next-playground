import React from "react";

const ProductPage = ({ params: { slug } }: { params: { slug: string[] } }) => {
  return <div>ProductPage {slug}</div>;
};

export default ProductPage;
