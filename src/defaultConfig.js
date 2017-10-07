export default {
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
  colors: {
    'black': '#000000',
    'grey-900': '#212b35',
    'grey-800': '#404e5c',
    'grey-700': '#647382',
    'grey-600': '#919eab',
    'grey-500': '#c5ced6',
    'grey-400': '#dfe3e8',
    'grey-300': '#f0f2f5',
    'grey-200': '#f7f9fa',
    'white': '#ffffff',
    'red-dark': '#d43633',
    'red': '#f25451',
    'red-light': '#fa8785',
    'red-lightest': '#fff1f0',
    'orange-dark': '#f29500',
    'orange': '#ffb82b',
    'orange-light': '#ffd685',
    'orange-lightest': '#fff8eb',
    'yellow-dark': '#ffc400',
    'yellow': '#ffe14a',
    'yellow-light': '#ffea83',
    'yellow-lightest': '#fffbe5',
    'green-dark': '#34ae4c',
    'green': '#57d06f',
    'green-light': '#b1f3be',
    'green-lightest': '#eefff1',
    'teal-dark': '#249e9a',
    'teal': '#4dc0b5',
    'teal-light': '#9eebe4',
    'teal-lightest': '#eefffd',
    'blue-dark': '#3687c8',
    'blue': '#4aa2ea',
    'blue-light': '#acdaff',
    'blue-lightest': '#f1f9ff',
    'indigo-dark': '#4957a5',
    'indigo': '#6574cd',
    'indigo-light': '#bcc5fb',
    'indigo-lightest': '#f4f5ff',
    'purple-dark': '#714cb4',
    'purple': '#976ae6',
    'purple-light': '#ceb3ff',
    'purple-lightest': '#f7f3ff',
    'pink-dark': '#d84f7d',
    'pink': '#f66d9b',
    'pink-light': '#ffa5c3',
    'pink-lightest': '#fdf2f5',
  },
  text: {
    fonts: {
      'sans': '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue',
      'serif': 'Constantia, "Lucida Bright", Lucidabright, "Lucida Serif", Lucida, "DejaVu Serif", "Bitstream Vera Serif", "Liberation Serif", Georgia, serif',
      'mono': 'Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace',
    },
    sizes: {
      'base': '1rem', // 16px
      'xs': '.75rem', // 12px
      'sm': '.875rem', // 14px
      'md': '1rem', // 16px
      'lg': '1.125rem', // 18px
      'xl': '1.25rem', // 20px
      '2xl': '1.75rem', // 28px
      '3xl': '2.375rem', // 38px
      '4xl': '2.875rem', // 46px
    },
    weights: {
      'hairline': 200,
      'thin': 300,
      'regular': 400,
      'medium': 600,
      'bold': 700,
    },
    leading: {
      'none': 1,
      'tight': 1.25,
      'normal': 1.5,
      'loose': 2,
    },
    tracking: {
      'tight': '-0.05em',
      'normal': '0',
      'wide': '0.1em',
    },
    colors: [
      {
        'light': 'white',
        'light-soft': 'rgba(255,255,255,.6)',
        'light-softer': 'rgba(255,255,255,.45)',
        'light-softest': 'rgba(255,255,255,.35)',
        'dark': 'grey-900',
        'dark-soft': 'grey-700',
        'dark-softer': 'grey-600',
        'dark-softest': 'grey-500',
      },
      'red-dark',
      'red',
      'red-light',
      'red-lightest',
      'orange-dark',
      'orange',
      'orange-light',
      'orange-lightest',
      'yellow-dark',
      'yellow',
      'yellow-light',
      'yellow-lightest',
      'green-dark',
      'green',
      'green-light',
      'green-lightest',
      'teal-dark',
      'teal',
      'teal-light',
      'teal-lightest',
      'blue-dark',
      'blue',
      'blue-light',
      'blue-lightest',
      'indigo-dark',
      'indigo',
      'indigo-light',
      'indigo-lightest',
      'purple-dark',
      'purple',
      'purple-light',
      'purple-lightest',
      'pink-dark',
      'pink',
      'pink-light',
      'pink-lightest',
    ]
  },
  backgrounds: {
    colors: [
      {
        'light': 'white',
        'light-soft': 'grey-200',
        'light-softer': 'grey-300',
        'light-softest': 'grey-400',
        'dark': 'grey-900',
        'dark-soft': 'grey-800',
        'dark-softer': 'grey-700',
        'dark-softest': 'grey-600',
      },
      'red-dark',
      'red',
      'red-light',
      'red-lightest',
      'orange-dark',
      'orange',
      'orange-light',
      'orange-lightest',
      'yellow-dark',
      'yellow',
      'yellow-light',
      'yellow-lightest',
      'green-dark',
      'green',
      'green-light',
      'green-lightest',
      'teal-dark',
      'teal',
      'teal-light',
      'teal-lightest',
      'blue-dark',
      'blue',
      'blue-light',
      'blue-lightest',
      'indigo-dark',
      'indigo',
      'indigo-light',
      'indigo-lightest',
      'purple-dark',
      'purple',
      'purple-light',
      'purple-lightest',
      'pink-dark',
      'pink',
      'pink-light',
      'pink-lightest',
    ]
  },
  borders: {
    defaults: {
      width: '1px',
      color: 'grey-500',
    },
    widths: {
      '0': '0',
      '2': '2px',
      '4': '4px',
      '8': '8px',
    },
    rounded: {
      default: '.25rem',
      modifiers: {
        sm: '.125rem',
        lg: '.5rem',
        pill: '9999px',
      }
    },
    colors: [
      {
        'light': 'white',
        'light-soft': 'grey-200',
        'light-softer': 'grey-300',
        'dark': 'grey-600',
        'dark-soft': 'grey-500',
        'dark-softer': 'grey-400',
        'light-overlay': 'hsla(0,0%,0%,.2)',
        'light-overlay-soft': 'hsla(0,0%,0%,.1)',
        'light-overlay-softer': 'hsla(0,0%,0%,.05)',
        'dark-overlay': 'hsla(0,0%,100%,1)',
        'dark-overlay-soft': 'hsla(0,0%,100%,.6)',
        'dark-overlay-softer': 'hsla(0,0%,100%,.35)',
      },
      'red-dark',
      'red',
      'red-light',
      'red-lightest',
      'orange-dark',
      'orange',
      'orange-light',
      'orange-lightest',
      'yellow-dark',
      'yellow',
      'yellow-light',
      'yellow-lightest',
      'green-dark',
      'green',
      'green-light',
      'green-lightest',
      'teal-dark',
      'teal',
      'teal-light',
      'teal-lightest',
      'blue-dark',
      'blue',
      'blue-light',
      'blue-lightest',
      'indigo-dark',
      'indigo',
      'indigo-light',
      'indigo-lightest',
      'purple-dark',
      'purple',
      'purple-light',
      'purple-lightest',
      'pink-dark',
      'pink',
      'pink-light',
      'pink-lightest',
    ]
  },
  sizing: {
    width: {
      'auto': 'auto',
      'px': '1px',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '24': '6rem',
      '32': '8rem',
      '48': '12rem',
      '64': '16rem',
      '1/2': '50%',
      '1/3': '33.33333%',
      '2/3': '66.66667%',
      '1/4': '25%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.66667%',
      '5/6': '83.33333%',
      'full': '100%',
      'screen': '100vw'
    },
    height: {
      'auto': 'auto',
      'px': '1px',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '24': '6rem',
      '32': '8rem',
      '48': '12rem',
      '64': '16rem',
      'full': '100%',
      'screen': '100vh'
    },
    minHeight: {
      '0': '0',
      'full': '100%',
      'screen': '100vh'
    },
    maxHeight: {
      'full': '100%',
      'screen': '100vh'
    },
    minWidth: {
      '0': '0',
      'full': '100%',
    },
    maxWidth: {
      'xs': '20rem',
      'sm': '30rem',
      'md': '40rem',
      'lg': '50rem',
      'xl': '60rem',
      '2xl': '70rem',
      '3xl': '80rem',
      '4xl': '90rem',
      '5xl': '100rem',
      'full': '100%',
    },
  },
  spacing: {
    padding: {
      'px': '1px',
      '0': '0',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '6': '1.5rem',
      '8': '2rem',
    },
    margin: {
      'px': '1px',
      '0': '0',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '6': '1.5rem',
      '8': '2rem',
    },
    negativeMargin: {
      'px': '1px',
      '0': '0',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '6': '1.5rem',
      '8': '2rem',
    },
  },
  shadows: {
    '1': '0 1px 3px rgba(0,0,0,.08), 0 1px 2px rgba(0,0,0,.15)',
    '2': '0 3px 6px rgba(0,0,0,.12), 0 3px 6px rgba(0,0,0,.13)',
    '3': '0 10px 20px rgba(0,0,0,.13), 0 6px 6px rgba(0,0,0,.13)',
    '4': '0 14px 28px rgba(0,0,0,.16), 0 10px 10px rgba(0,0,0,.11)',
    '5': '0 19px 38px rgba(0,0,0,.18), 0 15px 12px rgba(0,0,0,.11)',
  },
  zIndex: {
    '0': 0,
    '10': 10,
    '20': 20,
    '30': 30,
    '40': 40,
    '50': 50,
    'auto': 'auto',
  },
  opacity: {
    '0': '0',
    '25': '.25',
    '50': '.5',
    '75': '.75',
    '100': '1',
  }
}