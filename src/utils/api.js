export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "https://react-ecommerce-q79y.onrender.com";

export function apiUrl(path) {
  if (!path) return API_BASE_URL;
  const base = API_BASE_URL.endsWith("/") ? API_BASE_URL.slice(0, -1) : API_BASE_URL;
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}

