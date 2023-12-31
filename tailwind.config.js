module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    colors: {
      transparent: "transparent",
      green: "#047857",
      current: "currentColor",
      white: "#ffffff",
      offwhite: "#F5F5F5",
      black: "#1D1D1F",
      skyblue: "#69CCE1",
      blue: "#4678BD",
      darkgray: "#585858",
      darkblue: "#0F2454",
      tahiti: {
        100: "#cffafe",
        200: "#a5f3fc",
        300: "#67e8f9",
        400: "#22d3ee",
        500: "#06b6d4",
        600: "#0891b2",
        700: "#0e7490",
        800: "#155e75",
        900: "#164e63",
      },
    },
    extend: {
      backgroundImage: {
        "hero-bg": 'url("/assets/img/blog-2.jpg")',
      },
    },
  },
  plugins: [],
};
