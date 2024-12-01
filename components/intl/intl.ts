export const rupiah = Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  minimumFractionDigits: 0,
});

export const tanggal = Intl.DateTimeFormat("id-ID", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});
