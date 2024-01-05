/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        mainbg: "url(./assets/images/mainbg2.png)",
        altbg: "url(./assets/images/altbg.png)",
        mobile: "url(./assets/images/mobile.png)",
      },
    },
  },
  plugins: [],
};
