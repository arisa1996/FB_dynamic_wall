module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'login': '-8px 8px 0px #00040029',
        'btn': '-2px 2px 0px #000400',
        'post': '0px 3px 0px #000400'
      },
      lineHeight: {
        '11': '50px'
      }
    },
    colors: {
      brown_x: '#EFECE7',
      red_x: '#F57375',
      yellow: '#EEC32A',
      blue_xs: '#E2EDFA',
      blue_x: '#03438D',
      gray_s: '#A8B0B9',
      gray_xxs: '#808080',
      gray_xs: '#00000029',
      gray_x: '#00040029',
      gray_m: '#9B9893',
      gray_l: '#707070',
      black_x: '#000400',
      white: '#ffffff'
    }
  },
  variants: {
    extend: {
      backgroundColor: ['odd', 'even'],
      borderWidth: ['first', 'last'],
      margin: ['first', 'last']
    }
  },
  plugins: []
}
