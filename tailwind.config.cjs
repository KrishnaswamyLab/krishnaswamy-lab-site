const { space } = require('svelte/internal')
const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    maxWidth: {
      '1/2': '50%',
      '1/4': '25%',
      '1/3': '33%',
      '1/6': '16%',
      '1/8': '12%',
      '96': '24rem',
    },
    maxHeight: {
      '1/2': '50%',
      '1/4': '25%',
      '1/3': '33%',
      '1/6': '16%',
      '1/8': '12%',
      '96': '24rem',
      '100': '25rem',
      '104': '26rem',
      '108': '27rem',
      '112': '28rem',
      '116': '29rem',
      '118': '29.5rem',
      '120': '30rem',
      '124': '31rem',
      '128': '32rem',
    },
    purples: { // purple
      "primary": "#ddd6fe",          
      "secondary": "#a5b4fc",                
      "accent": "#8b5cf6",                
      "neutral": "#9ca3af",                
      "base-100": "#f3f4f6",                
      "info": "#67e8f9",                
      "success": "#6ee7b7",                
      "warning": "#fde047",                
      "error": "#F87272",
    },
    extend: {
      spacing: {        
        '62': '15.5rem',
        '80': '20rem',
        '84': '21rem',
        '88': '22rem',
        '92': '23rem',
        '96': '24rem',
        '100': '25rem',
        '104': '26rem',
        '108': '27rem',
        '112': '28rem',
        '116': '29rem',
        '118': '29.5rem',
        '120': '30rem',
        '124': '31rem',
        '128': '32rem',
      },
      fontFamily: {
        'sans': [...defaultTheme.fontFamily.sans],
        'serif': ['Quicksand', ...defaultTheme.fontFamily.sans],
        'mono': ['SpaceMono', ...defaultTheme.fontFamily.sans],
        'quicksand': ['Quicksand'],
        'bellota': ['Bellota'],
        'bellotatext': ['BellotaText'],
        'spacemono': ['SpaceMono'],
        'inconsolata': ['Inconsolata'],
      },
      fontSize: {
        'xs': ['0.6rem', '0.8rem'],
        '2xs': ['0.4rem', '0.6rem']
      },
      screen: {
        'xs': '512px',
        '2xs': '400px',
        '2xl': '1536px',
        '3xl': '1600px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/line-clamp'),
    require("daisyui"),
  ],
}
