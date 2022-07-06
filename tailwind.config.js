module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
   
    extend: {
      fontFamily: {
        'kanit': ['Kanit', 'sans-serif']
      },
      colors: {
        "criativo-green": "#61D3B9",
        "criativo-black": "#151515",
      }
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      }
    }
  },
  plugins: [],
}
