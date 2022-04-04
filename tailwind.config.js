module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#e21938",
        dark: "#0c0c0c",
      },
    },
  },
  plugins: [],
  corePlugins: require("tailwind-rn/unsupported-core-plugins"),
};
