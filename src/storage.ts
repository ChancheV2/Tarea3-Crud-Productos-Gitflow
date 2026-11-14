import type { Product } from "./types";

const KEY = "crud-productos";

const seed: Product[] = [
  { id: "1", name: "Teclado mecánico", category: "Periféricos", price: 3500, stock: 12 },
  { id: "2", name: "Monitor 24 pulgadas", category: "Pantallas", price: 9800, stock: 5 },
  { id: "3", name: "Mouse inalámbrico", category: "Periféricos", price: 1250.5, stock: 30 },
];

export function loadProducts(): Product[] {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Product[]) : seed;
  } catch {
    return seed;
  }
}

export function saveProducts(products: Product[]): void {
  localStorage.setItem(KEY, JSON.stringify(products));
}
