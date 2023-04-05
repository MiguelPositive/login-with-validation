/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx", "./src/*.jsx"],
  theme: {
    extend: {
      backgroundImage: {
        "logo-cica": "url('../src/imgs/cropped-cica.png')",
      },

      screens: {
        "350px": "350px",
        "370px": "370px",
        "400px": "400px",
        "450px": "450px",
        "1367px": "1367px",
      },
    },
  },
  plugins: [],
};
