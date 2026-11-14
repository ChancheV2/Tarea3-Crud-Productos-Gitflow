import { useEffect, useState } from "react";
import { ProductForm } from "./components/ProductForm";
import { ProductTable } from "./components/ProductTable";
import { loadProducts, saveProducts } from "./storage";
import type { Product, ProductInput } from "./types";

function App() {
  const [products, setProducts] = useState<Product[]>(loadProducts);
  const [editing, setEditing] = useState<Product | null>(null);

  useEffect(() => {
    saveProducts(products);
  }, [products]);

  function handleSubmit(data: ProductInput) {
    if (editing) {
      setProducts(products.map((p) => (p.id === editing.id ? { ...data, id: editing.id } : p)));
      setEditing(null);
    } else {
      setProducts([...products, { ...data, id: crypto.randomUUID() }]);
    }
  }

  return (
    <main>
      <h1>Inventario de productos</h1>
      <ProductForm
        key={editing?.id ?? "new"}
        editing={editing} onSubmit={handleSubmit} onCancel={() => setEditing(null)}
      />
      <ProductTable products={products} onEdit={setEditing} />
    </main>
  );
}

export default App;
