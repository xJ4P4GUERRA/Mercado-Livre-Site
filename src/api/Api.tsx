const API: string = "https://api.mercadolibre.com/sites/MLB/search";

export default async function getProducts(query: string) {
  const response = await fetch(
    `${API}?q=${query}`
  );
  const data = await response.json();

  return data.results;
}
