import { useState } from "react";
import { ProductTable } from "./components/ProductTable";
import { loadProducts } from "./storage";
import type { Product } from "./types";

function App() {
  const [products] = useState<Product[]>(loadProducts);

  return (
    <main>
      <h1>Inventario de productos</h1>
      <ProductTable products={products} />
    </main>
  );
}

export default App;
