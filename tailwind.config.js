module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        gray:{
          950:'#393939',
          960:'#393939'
          
        }
      }
    },
  },
  variants: {
    extend: {
    
    },
  },
  plugins: [],
}
