module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   // para temas dinámicos
   // darkMode: ['class', '[data-theme="dark"]'],
  darkMode: ['[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        // base theme variables (usadas en los componentes)
        primary: 'var(--color-primary)',
        background: 'var(--color-background)',
        text: 'var(--color-text)',
        // etc.
      },
    },
  },
};
