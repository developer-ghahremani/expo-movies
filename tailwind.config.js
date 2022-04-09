module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#e21938",
        dark: "#0c0c0c",
        grayDark: "#1b1a1f",
      },
      fontFamily: {
        "nunito-regular": "nunito-regular",
        "nunito-medium": "nunito-medium",
        "nunito-bold": "nunito-bold",
        "nunito-extra-bold": "nunito-extra-bold",
      },
      fontSize: {
        xs: "10px",
        sm: "12px",
        base: "14px",
        md: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "22px",
        "3xl": "24px",
        "4xl": "26px",
      },
    },
  },
  plugins: [],
  corePlugins: require("tailwind-rn/unsupported-core-plugins"),
};
