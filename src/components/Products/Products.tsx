import "./Products.css";
import ProductType from "../../types/ProductType";
import Product from "./Product/Product";

type ProductsProps = {
  searched: boolean;
  products: ProductType[];
  itemsInCart: ProductType[];
  setItemsInCart: React.Dispatch<React.SetStateAction<ProductType[]>>;
  setTotalValue: React.Dispatch<React.SetStateAction<number>>;
};

export default function Products({
  searched,
  products,
  itemsInCart,
  setItemsInCart,
  setTotalValue,
}: ProductsProps) {
  const container = document.getElementById("products-container");
  if (products.length > 0 && container) container.style.display = "grid";
  else if (container) container.style.display = "none";

  return (
    <div className="products-background">
      <div id="products-container" className="products-container">
        {products.length > 0
          ? products.map((product) => (
              <Product
                key={product.id}
                product={product}
                itemsInCart={itemsInCart}
                setItemsInCart={setItemsInCart}
                setTotalValue={setTotalValue}
              />
            ))
          : ""}
      </div>

      {products.length === 0 && searched ? (
        <div className="empty-products">
          <span>Nenhum produto encontrado...</span>
        </div>
      ) : (
        ""
      )}

      {products.length === 0 && !searched ? (
        <div className="empty-products">
          <span>Procure por um produto!</span>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
