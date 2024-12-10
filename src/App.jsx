import React, { useState } from 'react'

export default function App() {

// task 1

const [counter, setCounter] = useState(0); 
const [showProduct, setShowProduct] = useState(false); 


  const product = {
    name: "iPhone 14",
    price: "$1200",
    description: "A premium smartphone with advanced features.",
  };

  const increase = () => {
    setCounter(counter + 1);
  };

  const handleToggleProduct = () => {
    setShowProduct(!showProduct); // تبديل القيمة بين ترو وفولس
  };

  return (
    <div className="container">
      <h1 className="title">Counter: {counter}</h1>
      <div className="button-container">
        <button onClick={increase} className="button">
          Increase
        </button>
        <button onClick={handleToggleProduct} className="button">
          {showProduct ? "Hide Product" : "Show Product"} {/* تغيير اسم الباتون حسب الحالة الي هي فيها  */}

        </button>
      </div>

      {/* إظهار تفاصيل المنتج إذا كانت الحالة ترو  */}
      {showProduct && (
        <div className="product-container">
          <h2 className="product-title">Product Details</h2>
          <p className="product-text">
            <strong>Name:</strong> {product.name}
          </p>
          <p className="product-text">
            <strong>Price:</strong> {product.price}
          </p>
          <p className="product-text">
            <strong>Description:</strong> {product.description}
          </p>
        </div>
      )}
    </div>
  );
}




  

  

