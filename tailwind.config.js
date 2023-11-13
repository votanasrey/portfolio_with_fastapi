/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  corePlugins: {
    layers: ["base", "components", "utilities"],
  },
  theme: {
    extend: {
      screens: {
        desktop: "1130px",
      },

      colors: {
        "primary-color": "#87CEEB",
        "light-green": "rgba(0, 0, 139, 0.5)",
        "dark-blue": "#87CEEB",
        "light-gray": "#AEAEAE",
      },
    },
  },
  plugins: [],
};
