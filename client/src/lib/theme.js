// Theme store — one owner of the light/dark decision.
// Persists to localStorage, falls back to system preference.
// index.html pre-paints the class to avoid a flash; this module keeps it true.

const KEY = "rb-theme";
const listeners = new Set();

const systemTheme = () =>
  window.matchMedia?.("(prefers-color-scheme: light)").matches ? "light" : "dark";

export const getTheme = () => {
  const stored = localStorage.getItem(KEY);
  if (stored === "light" || stored === "dark") return stored;
  return systemTheme();
};

export const setTheme = (theme) => {
  localStorage.setItem(KEY, theme);
  document.documentElement.classList.toggle("dark", theme === "dark");
  listeners.forEach((fn) => fn(theme));
};

export const toggleTheme = () => setTheme(getTheme() === "dark" ? "light" : "dark");

export const subscribeTheme = (fn) => {
  listeners.add(fn);
  return () => listeners.delete(fn);
};
