import "./ShowMoreButton.css";
import ProductType from "../../types/ProductType";
import getProducts from "../../api/Api";

interface ShowMoreButtonProps {
  setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
  setShowMore: React.Dispatch<React.SetStateAction<number>>;
  input: string;
}

export default function ShowMoreButton({
  setProducts,
  setShowMore,
  input,
}: ShowMoreButtonProps) {
  const handleShowMore = () => {
    setShowMore((prev) => {
      const newShowMore = prev + 12;

      getProducts(input).then((data) => {
        const products = data.slice(0, newShowMore);
        setProducts(products);
      });

      return newShowMore;
    });
  };

  return (
    <>
      <button className="showMore-button" onClick={handleShowMore}>Show More</button>
    </>
  );
}
