import { useEffect, useState } from "react";
import { ProductCard } from "../components/ProductCard/ProductCard";
import { GridContainer } from "../components/GridContainer/GridContainer";
import { useFetch } from "../hooks/useFetch";

export function Productpage() {
  const {
    data: productData,
    isLoading,
    error,
  } = useFetch(import.meta.env.VITE_PUBLIC_BASE_URL + "/api/Products");

  console.log(productData);

  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    if (productData) {
      setDisplayData(productData);
    }
  }, [productData]);

  const sortArray = (event) => {
    const key = event.target.value;
    if (!key || !displayData) return;

    const clone = [...displayData];
    const sorted = clone.sort((a, b) => {
      if (typeof a[key] === "number") {
        return a[key] - b[key];
      }
      return String(a[key]).localeCompare(String(b[key]));
    });

    setDisplayData(sorted);
  };

  if (isLoading) return <p>Henter produkter...</p>;
  if (error) return <p>Der opstod en fejl ved hentning af produkter.</p>;

  return (
    <>
      <div>
        <h1>Produkter</h1>
        <select onChange={sortArray}>
          <option value="">Sorter efter...</option>
          <option value="price">Pris</option>
          <option value="title">Titel</option>
          <option value="description">Beskrivelse</option>
        </select>
      </div>

      <GridContainer
        styleProps={{
          gridTemplateColumns: "repeat(3, 1fr)",
          width: "80%",
          margin: "auto",
        }}
      >
        {displayData?.map((products) => (
          <ProductCard
            key={products.id}
            id={products.id}
            title={products.title}
            slug={products.slug}
            imageUrl={products.imageUrl}
            price={products.price}
            description={products.description}
          />
        ))}
      </GridContainer>
    </>
  );
}



