import React, { useState, useEffect } from "react";
import getProducts from "../../api/Api";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";

import "./Header.css";
import ProductType from "../../types/ProductType";

type HeaderProps = {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
  itemsInCart: ProductType[];
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  showCart: boolean;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Header({
  input,
  setInput,
  setProducts,
  itemsInCart,
  setLoading,
  showCart,
  setShowCart,
}: HeaderProps) {
  const [inputChange, setInputChange] = useState<string>("");

  useEffect(() => {
    setInput(inputChange);
  }, [inputChange, setInput]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const loading = document.getElementById("loading");
    loading?.style.setProperty("display", "flex");
    setLoading(true);
    setInput(inputChange);

    await getProducts(input).then((data) => {
      const products = data.slice(0, 24);
      setProducts(products);
      setLoading(false);
      loading?.style.setProperty("display", "none");
    });
  };

  return (
    <header className="header">
      <div className="container">
        <form action="" className="search-bar" onSubmit={handleSubmit}>
          <input
            onChange={(e) => setInputChange(e.target.value)}
            type="search"
            placeholder="Search products"
            required
          />
          <button type="submit">
            <BsSearch />
          </button>
        </form>

        <button className="cart" onClick={() => setShowCart(!showCart)}>
          <AiOutlineShoppingCart size={25} />

          {itemsInCart.length > 0 ? (
            <div>
              {itemsInCart.reduce(
                (total, item) => total + (item.quantityChosen || 0),
                0
              )}
            </div>
          ) : null}
        </button>
      </div>
    </header>
  );
}
