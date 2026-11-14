const formatter = new Intl.NumberFormat("es-DO", {
  style: "currency",
  currency: "DOP",
  minimumFractionDigits: 2,
});

export function formatPrice(value: number): string {
  return formatter.format(value);
}
