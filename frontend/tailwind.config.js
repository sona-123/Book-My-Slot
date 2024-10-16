module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      colors: {
        booking: '#e0f7fa',
        checkedIn: '#c8e6c9',
        coaching: '#bbdefb',
        blocked: '#e0e0e0',
        pending: '#ffcdd2',
      },
    },
  }
};
