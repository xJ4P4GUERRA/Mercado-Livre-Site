import ProductType from "../../types/ProductType";
import "./Cart.css";
import ProductInCart from "./ProductInCart/ProductInCart";

type CartProps = {
  itemsInCart: ProductType[];
  setItemsInCart: React.Dispatch<React.SetStateAction<ProductType[]>>;
  totalValue: number;
  setTotalValue: React.Dispatch<React.SetStateAction<number>>;
};

export default function ({
  itemsInCart,
  setItemsInCart,
  totalValue,
  setTotalValue,
}: CartProps) {
  return (
    <div className="cart-container">
      <div className="cart-items">

        {itemsInCart.map((product) => (
          <ProductInCart
            key={product.id + " " + product.quantityChosen}
            product={product}
            itemsInCart={itemsInCart}
            setItemsInCart={setItemsInCart}
            setTotalValue={setTotalValue}
          />
        ))}

        {itemsInCart.length === 0 && (
          <div className="empty-cart">
            <span>Seu carrinho de compras está vazio...</span>
          </div>
        )}

      </div>

      <div className="totalValue-container">
        <span className="totalValue">R$ {totalValue.toFixed(2)}</span>
      </div>
      
    </div>
  );
}
