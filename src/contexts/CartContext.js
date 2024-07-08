"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

const Context = createContext();

const products = [
  {
    id: 1,
    name: "Organic Tomatoes",
    href: "#",
    color: "Red",
    price: 3.99,
    quantity: 1,
    imageSrc:
      "https://www.shutterstock.com/shutterstock/photos/2469916107/display_1500/stock-photo-red-tomato-with-half-and-fresh-juice-2469916107.jpg",
    imageAlt:
      "Fresh organic tomatoes on a wooden table.",
  },
  {
    id: 2,
    name: "Avocado",
    href: "#",
    color: "Green",
    price: 2.49,
    quantity: 1,
    imageSrc:
      "https://www.shutterstock.com/shutterstock/photos/2121217286/display_1500/stock-photo-isolated-avocado-whole-avocado-fruit-and-cut-with-half-isolated-on-white-background-2121217286.jpg",
    imageAlt:
      "Ripe avocado on a cutting board.",
  },
  {
    id: 3,
    name: "Organic Spinach",
    href: "#",
    color: "Green",
    price: 1.99,
    quantity: 1,
    imageSrc:
      "https://www.shutterstock.com/shutterstock/photos/1676210251/display_1500/stock-photo-pile-of-fresh-green-baby-spinach-leaves-isolated-on-white-background-close-up-1676210251.jpg",
    imageAlt:
      "Fresh organic spinach leaves on a white background.",
  }
]


export const CartContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState(products);
  const [totalPrice, setTotalPrice] = useState(products.reduce((n, { price, quantity }) => n + (price * quantity), 0));
  const [totalQuantities, setTotalQuantities] = useState(products.reduce((n, { quantity }) => n + quantity, 0));
  const [qty, setQty] = useState(1);

  let foundProduct;
  let index;

  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find((item) => item.id === product.id);

    if (!checkProductInCart) {
      setTotalPrice(
        (prevTotalPrice) => prevTotalPrice + product.price * quantity
      );
      setTotalQuantities(
        (prevTotalQuantities) => prevTotalQuantities + quantity
      );
      setCartItems((prevItems) => [...prevItems, { ...product }].sort((a, b) => a.id - b.id));
    }
    toast.success(`${product.title}`);
  };

  const onRemove = (product) => {
    foundProduct = cartItems.find((item) => item.id === product.id);
    const newCartItems = cartItems.filter((item) => item.id !== product.id).sort((a, b) => a.id - b.id);

    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - (foundProduct.price * foundProduct.quantity)
    );
    setTotalQuantities(
      (prevTotalQuantities) => prevTotalQuantities - 1
    );
    setCartItems(newCartItems);
  };

  const toggleCartItemQuanitity = (id, value) => {
    foundProduct = cartItems.find((item) => item.id === id);
    index = cartItems.findIndex((product) => product.id === id);
    const newCartItems = cartItems.filter((item) => item.id !== id);
    console.log(cartItems.map(item => item.quantity))


    if (value === "inc") {
      setCartItems([
        ...newCartItems,
        { ...foundProduct, quantity: foundProduct.quantity + 1 },
      ].sort((a, b) => a.id - b.id));
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
    } else if (value === "dec") {
      if (foundProduct.quantity > 1) {
        setCartItems([
          ...newCartItems,
          { ...foundProduct, quantity: foundProduct.quantity - 1 },
        ].sort((a, b) => a.id - b.id));
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
      } else {
        setCartItems(newCartItems.sort((a, b) => a.id - b.id))
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
      }
    }
  };

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;

      return prevQty - 1;
    });
  };

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        toggleCartItemQuanitity,
        onRemove,
        setCartItems,
        setTotalPrice,
        setTotalQuantities,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useCartContext = () => useContext(Context);
