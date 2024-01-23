import ProductType from "../types/ProductType";
import getProducts from "./Api";

interface handleSubmitProps {
  e: React.FormEvent<HTMLFormElement>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  inputChange: string;
  showMore: number;
  lastSearch: string;
  setLastSearch: React.Dispatch<React.SetStateAction<string>>;
  setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
}

export const handleSubmit = async ({
  e,
  setLoading,
  input,
  setInput,
  inputChange,
  showMore,
  lastSearch,
  setLastSearch,
  setProducts,
}: handleSubmitProps) => {
  e.preventDefault();
  const loading = document.getElementById("loading");
  loading?.style.setProperty("display", "flex");
  setLoading(true);
  setInput(inputChange);
  setLastSearch(inputChange);

  await getProducts(input).then((data) => {
    const products = data.slice(0, showMore);
    setProducts(products);
    setLoading(false);
    loading?.style.setProperty("display", "none");
  });
};
