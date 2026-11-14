import type { Product } from "../types";

interface Props {
  products: Product[];
  onEdit: (product: Product) => void;
}

export function ProductTable({ products, onEdit }: Props) {
  if (products.length === 0) {
    return <p className="empty">No hay productos registrados.</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Categoría</th>
          <th>Precio</th>
          <th>Existencia</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {products.map((p) => (
          <tr key={p.id}>
            <td>{p.name}</td>
            <td>{p.category}</td>
            <td>{p.price}</td>
            <td>{p.stock}</td>
            <td className="actions">
              <button onClick={() => onEdit(p)}>Editar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
