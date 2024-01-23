import "./ProductInCart.css";
import ProductType from "../../../types/ProductType";
import { BsFillCartDashFill } from "react-icons/bs";

type ProductsProps = {
  product: ProductType;
  itemsInCart: ProductType[];
  setItemsInCart: React.Dispatch<React.SetStateAction<ProductType[]>>;
  setTotalValue: React.Dispatch<React.SetStateAction<number>>;
};

export default function ProductInCart({
  product,
  itemsInCart,
  setItemsInCart,
  setTotalValue,
}: ProductsProps) {
  const { id, title, thumbnail, price } = product;

  function handleRemoveToCart(id: string) {
    const itemRemoved = itemsInCart.find((item) => item.id === id);

    if (itemRemoved && itemRemoved?.quantityChosen > 1) {
      const updatedCart = itemsInCart.map((item) =>
        item.id === id
          ? { ...item, quantityChosen: item.quantityChosen - 1 }
          : item
      );
      setTotalValue((totalValue) => totalValue - price);
      setItemsInCart(updatedCart);
    } else if (itemRemoved && itemRemoved?.quantityChosen === 1) {
      const updatedCart = itemsInCart.filter((item) => item.id !== id);
      setItemsInCart(updatedCart);
      setTotalValue((totalValue) => totalValue - price);
    }
  }

  return (
    <div className="cart-product-container">
     
      <img src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")} alt="img" />

      <div className="details">
        <span className="title">{title}</span>
        <span className="price">R$ {price.toFixed(2)}</span>
      </div>

      <div>
        <button className="remove-cart" onClick={() => handleRemoveToCart(id)}>
          <BsFillCartDashFill />
        </button>
      </div>

      <div className="quantity">{product.quantityChosen}</div>

    </div>
  );
}
