module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["Poppins", "Helvetica", "Arial", "sans-serif"],
      },
      backgroundImage: {
        'house': "url(../src/images/town.jpeg)",
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
