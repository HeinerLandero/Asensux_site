export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // New official colors
        navy: '#001f3f',
        navyLight: '#0a2e5a',
        navyDark: '#001025',
        electricBlue: '#0074D9',
        electricBlueLight: '#339fff',
        antiFlashWhite: '#f1f7f6',
        stone: '#707D7D',
        background: '#001025',
        foreground: '#f1f7f6',
        // Keep old names working (mapped to new values)
        richBlack: '#001025',
        darkGreen: '#001f3f',
        bangladeshGreen: '#001f3f',
        mountainMeadow: '#0a2e5a',
        caribbeanGreen: '#0074D9',
      },
    },
  },
  plugins: [],
};