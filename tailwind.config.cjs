/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx,css}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "#ffffff",
        input: "#f1f5f9",
        ring: "#3b82f6",
        primary: "#2563eb",
        "primary-foreground": "#ffffff",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
