import "./App.css";
import { useState } from "react";

import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import ShowMoreButton from "./components/ShowMoreButton/ShowMoreButton";
import Loading from "./components/Loading/Loading";
import Cart from "./components/Cart/Cart";

import ProductType from "./types/ProductType";

function App() {
  const [input, setInput] = useState<string>("");
  const [lastSearch, setLastSearch] = useState<string>("");
  const [searched, setSearched] = useState<boolean>(false);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [showMore, setShowMore] = useState<number>(24);
  const [loading, setLoading] = useState<boolean>(true);
  const [itemsInCart, setItemsInCart] = useState<ProductType[]>([]);
  const [totalValue, setTotalValue] = useState<number>(0.0);
  const [showCart, setShowCart] = useState<boolean>(false);

  return (
    <div className="App">
      <Header
        input={input}
        setInput={setInput}
        lastSearch={lastSearch}
        setLastSearch={setLastSearch}
        setSearched={setSearched}
        setProducts={setProducts}
        showMore={showMore}
        itemsInCart={itemsInCart}
        setLoading={setLoading}
        showCart={showCart}
        setShowCart={setShowCart}
      />

      <Products
        searched={searched}
        products={products}
        itemsInCart={itemsInCart}
        setItemsInCart={setItemsInCart}
        setTotalValue={setTotalValue}
      />

      {showCart && (
        <Cart
          itemsInCart={itemsInCart}
          setItemsInCart={setItemsInCart}
          totalValue={totalValue}
          setTotalValue={setTotalValue}
        />
      )}

      {products.length > 0 && (
        <ShowMoreButton
          setProducts={setProducts}
          setShowMore={setShowMore}
          input={input}
        />
      )}

      <div id="loading" className="loading">
        {loading && <Loading />}{" "}
      </div>
    </div>
  );
}

export default App;
