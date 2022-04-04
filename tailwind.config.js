module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#e21938",
        dark: "#0c0c0c",
      },
      fontFamily: {
        "nunito-regular": "nunito-regular",
        "nunito-medium": "nunito-medium",
        "nunito-bold": "nunito-bold",
        "nunito-extra-bold": "nunito-extra-bold",
      },
    },
  },
  plugins: [],
  corePlugins: require("tailwind-rn/unsupported-core-plugins"),
};
