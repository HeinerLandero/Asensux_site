export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Cabinet Grotesk', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        bgDeep: '#040718',
        bgSurface: '#0c1628',
        bgElevated: '#14203a',
        navy: '#001f3f',
        navyDark: '#001025',
        navyLight: '#0a2e5a',
        electricBlue: '#0074D9',
        electricBlueLight: '#339fff',
        electricBlueMuted: '#1a5a8c',
        antiFlashWhite: '#e8edf5',
        stone: '#8899a0',
        textMuted: '#5a6a75',
        richBlack: '#040718',
      },
      boxShadow: {
        'glow-ambient': '0 0 30px rgba(0, 116, 217, 0.12)',
        'glow-hero': '0 0 60px rgba(0, 116, 217, 0.2)',
        'glow-hover': '0 0 20px rgba(0, 116, 217, 0.35)',
        'glow-card': '0 0 40px rgba(0, 116, 217, 0.1)',
      },
    },
  },
  plugins: [],
};