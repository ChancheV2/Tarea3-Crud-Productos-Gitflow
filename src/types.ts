export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
}

export type ProductInput = Omit<Product, "id">;
