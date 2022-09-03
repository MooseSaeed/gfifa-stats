const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`,
  ],
  theme: {
    fontFamily: {
      manrope: ["Manrope"],
    },
    extend: {
      colors: {
        neutral: {
          800: "#262626",
          900: "#171717",
        },
      },
    },
  },
  plugins: [],
};
