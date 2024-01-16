import "./Product.css";
import ProductType from "../../../types/ProductType";
import { BsFillCartPlusFill } from "react-icons/bs";

type ProductProps = {
  product: ProductType;
  itemsInCart: ProductType[];
  setItemsInCart: React.Dispatch<React.SetStateAction<ProductType[]>>;
  setTotalValue: React.Dispatch<React.SetStateAction<number>>;
};

export default function Product({
  product,
  itemsInCart,
  setItemsInCart,
  setTotalValue,
}: ProductProps) {
  const { title, thumbnail, price } = product;

/*   useEffect(() => {
    console.log(itemsInCart);
  }, [itemsInCart]);
 */
  function handleAddToCart() {
    const existingItem = itemsInCart.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedCart = itemsInCart.map((item) =>
        item.id === product.id
          ? { ...item, quantityChosen: item.quantityChosen + 1 }
          : item
      );
      setItemsInCart(updatedCart);
    } else {
      setItemsInCart([...itemsInCart, { ...product, quantityChosen: 1 }]);
    }

    setTotalValue((totalValue) => totalValue + price);


  }

  return (
    <div className="product-container">
      
      <img src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")} alt="img" />
      
      <div className="details">
        <span className="price">R$ {price.toFixed(2)}</span>
        <span className="title">{title}</span>
        <span className="title">{product.quantityChosen}</span>
      </div>

      <div>

        <button className="add-cart" onClick={handleAddToCart}>
          <BsFillCartPlusFill />
        </button>

      </div>
      
    </div>
  );
}
