module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '640px',  // Set the custom breakpoint for 'sm'
      },
    },
    colors: {
      black: '#000000',
      white: '#ffffff',
      pink: '#ff90e8',
      grey: '#F4F4F0',
      red: '#D52941',
      gold: '#ffc900',
      blue: '#23a094'
    },
    fontFamily: {
      sans: ['Mabry Pro', 'sans-serif'], // Ensure this matches the font-family defined in your CSS
    },

  },
  plugins: [],
}
