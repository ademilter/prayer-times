module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}'
    ],
    options: {
      keyframes: true
    }
  },
  darkMode: false,
  theme: {
    extend: {
      colors: {
        imsak: '#0f6c88',
        imsakBg: '#d2f2ff',
        gunes: '#97571b',
        gunesBg: '#ffebc1',
        ogle: '#804126',
        ogleBg: '#ffeda3',
        ikindi: '#8f361a',
        ikindiBg: '#ffd8ba',
        aksam: '#073e6d',
        aksamBg: '#8bccfd',
        yatsi: '#bae6ff',
        yatsiBg: '#2e3b83'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
