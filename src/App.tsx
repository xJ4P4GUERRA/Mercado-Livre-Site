import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ProductType from "./types/ProductType";
import Products from "./components/Products/Products";
import Loading from "./components/Loading/Loading";
import Cart from "./components/Cart/Cart";

function App() {

  const [input, setInput] = useState<string>("");
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [itemsInCart, setItemsInCart] = useState<ProductType[]>([]);
  const [totalValue, setTotalValue] = useState<number>(0.0);
  const [showCart, setShowCart] = useState<boolean>(false);

  return (
    <div className="App">

      <Header
        input={input}
        setInput={setInput}
        setProducts={setProducts}
        itemsInCart={itemsInCart}
        setLoading={setLoading}
        showCart={showCart}
        setShowCart={setShowCart}
      />

      <Products
        products={products}
        itemsInCart={itemsInCart}
        setItemsInCart={setItemsInCart}
        setTotalValue={setTotalValue}
      />

      {showCart && <Cart itemsInCart={itemsInCart} setItemsInCart={setItemsInCart} totalValue={totalValue} setTotalValue={setTotalValue} />}

      <div id="loading" className="loading">{loading && <Loading />} </div>
    
    </div>
  );
}

export default App;
