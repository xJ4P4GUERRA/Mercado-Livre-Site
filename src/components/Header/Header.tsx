import "./Header.css";
import React, { useState, useEffect } from "react";

import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";

import ProductType from "../../types/ProductType";

import { handleSubmit } from "../../api/Submit";

interface HeaderProps {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  lastSearch: string;
  setLastSearch: React.Dispatch<React.SetStateAction<string>>;
  setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
  showMore: number;
  itemsInCart: ProductType[];
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  showCart: boolean;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({
  input,
  setInput,
  lastSearch,
  setLastSearch,
  setProducts,
  showMore,
  itemsInCart,
  setLoading,
  showCart,
  setShowCart,
}: HeaderProps) {
  const [inputChange, setInputChange] = useState<string>("");

  useEffect(() => {
    setInput(inputChange);
  }, [inputChange]);

  return (
    <header className="header">
      <div className="container">

        <form
          className="search-bar"
          onSubmit={(e) =>
            handleSubmit({
              e,
              setLoading,
              input,
              setInput,
              inputChange,
              showMore,
              lastSearch,
              setLastSearch,
              setProducts,
            })
          }
        >
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
