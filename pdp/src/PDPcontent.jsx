import React, { useState, useEffect, useRef  } from "react";
import { useParams } from "react-router-dom";

import { getProductsById, currency } from "../../home/src/products";
import placeAddToCart from "addtocart/placeAddToCart";

const PDPcontent = () => {
  const {id} = useParams()
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      getProductsById(id).then(setProduct);
    } else {
      setProduct(null);
    }
  }, [id]);

  const addToCart = useRef(null);

  useEffect(() => {
    if (addToCart.current) {
      placeAddToCart(addToCart.current, product.id);
    }
  }, [product]);

  if (!product) return null;
  return (
    <div className="grid grid-cols-2 gap-5">
      <div className="">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="flex-row">
        <div className="flex mt-10">
          <h1 className="font-bold text-3xl flex-grow">{product.name}</h1>
          <div className="font-bold text-3xl flex-end">
            {currency.format(product.price)}
          </div>
        </div>
        <div ref={addToCart}></div>

        <div className="mt-10">{product.description}</div>
        <div className="mt-10">{product.longDescription}</div>
      </div>
    </div>
  );
};

export default PDPcontent;
