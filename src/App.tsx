import { useEffect, useState } from "react";
import { ProductForm } from "./components/ProductForm";
import { ProductTable } from "./components/ProductTable";
import { loadProducts, saveProducts } from "./storage";
import type { Product, ProductInput } from "./types";

function App() {
  const [products, setProducts] = useState<Product[]>(loadProducts);

  useEffect(() => {
    saveProducts(products);
  }, [products]);

  function handleSubmit(data: ProductInput) {
    setProducts([...products, { ...data, id: crypto.randomUUID() }]);
  }

  return (
    <main>
      <h1>Inventario de productos</h1>
      <ProductForm onSubmit={handleSubmit} />
      <ProductTable products={products} />
    </main>
  );
}

export default App;
