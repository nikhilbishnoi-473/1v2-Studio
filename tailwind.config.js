/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "black_Section": "#141414",
        "bg_Red": "#FF1E2F",
        "text-blue": '#3EBFFF'
      },
      container: {
        padding: {
          DEFAULT: "22px",
          xl: "12px",
          lg: "16px",
          md: "22px",
          sm: "22px",
        },
        center: true,
        screens: {
          lg: "1016px",
          xl: "1164px",
        },
      },
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
        orbitron: ["Orbitron", "sans-serif"]
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
      },
      backgroundImage: {
        header_Bg: `url("./assets/image/webp/hero_Bg.webp")`,
         footer_bg: `url("./assets/image/webp/footer_Bg.webp")`,
        card_footer: `url("./assets/image/webp/footer_Card_Bg.webp")`,
        feature_Project: `url("./assets/image/webp/feature_Bg.webp")`,
        card_Slider: `url("./assets/image/webp/Projects_Slider_One.webp")`,
        impact_Bg: `url("./assets/image/webp/Impact_Bg.webp")`
      },
      boxShadow: {
        "3xl": "0px 2.29px 23.91px 0px #FF55A5"

      },
      fontSize:{
        40: "40px",
        42: "42px",
        38: "38px",
        64: "64px"
      }
    },
  },
  plugins: [],
}
