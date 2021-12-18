import React from "react";

type ProductCountType = {
  count: number;
};

const ProductCout: React.FC<ProductCountType> = (props) => {
  const { count } = props;
  return <span>{count}</span>;
};
export default ProductCout;
