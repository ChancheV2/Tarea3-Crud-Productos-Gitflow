import { useState } from "react";
import type { FormEvent } from "react";
import type { ProductInput } from "../types";

interface Props {
  onSubmit: (data: ProductInput) => void;
}

const empty = { name: "", category: "", price: "", stock: "" };

export function ProductForm({ onSubmit }: Props) {
  const [form, setForm] = useState(empty);
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const price = Number(form.price);
    const stock = Number(form.stock);

    if (!form.name.trim() || !form.category.trim()) {
      setError("El nombre y la categoría son obligatorios.");
      return;
    }
    if (form.price === "" || Number.isNaN(price) || price < 0) {
      setError("El precio debe ser un número mayor o igual a 0.");
      return;
    }
    if (form.stock === "" || !Number.isInteger(stock) || stock < 0) {
      setError("La existencia debe ser un número entero mayor o igual a 0.");
      return;
    }

    onSubmit({ name: form.name.trim(), category: form.category.trim(), price, stock });
    setForm(empty);
    setError("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Nuevo producto</h2>
      <label>
        Nombre
        <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
      </label>
      <label>
        Categoría
        <input
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        />
      </label>
      <label>
        Precio
        <input
          type="number"
          step="0.01"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />
      </label>
      <label>
        Existencia
        <input
          type="number"
          value={form.stock}
          onChange={(e) => setForm({ ...form, stock: e.target.value })}
        />
      </label>
      {error && <p className="error">{error}</p>}
      <div className="actions">
        <button type="submit">Agregar</button>
      </div>
    </form>
  );
}
