module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        floatRandom: 'floatRandom 5s linear infinite', // Faster and smoother floating animation
        slideInLeft: 'slideInLeft 1s ease-in-out',
        slideInRight: 'slideInRight 1s ease-in-out',
        zoomIn: 'zoomIn 0.8s ease-in-out',
        winningEffect: 'winningEffect 1.5s ease-in-out', // New winning animation
        fadeInRight: 'fadeInRight 1.5s ease-out', // Custom animation for the image
        hoverEffect: 'hoverEffect 0.5s ease-in-out', // Custom hover animation
        slideInUp: 'slideInUp 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        floatRandom: {
          '0%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(60px, -80px)' }, // Move further horizontally and vertically
          '50%': { transform: 'translate(-70px, 90px)' },
          '75%': { transform: 'translate(80px, -60px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.5)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        winningEffect: {
          '0%, 100%': { transform: 'scale(1)', opacity: 1 },
          '50%': { transform: 'scale(1.1)', opacity: 1 }, // Slight scale-up effect
        },
        fadeInRight: {
          '0%': { opacity: 0, transform: 'translateX(50px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        hoverEffect: {
          '0%': { transform: 'scale(1) rotate(0deg)' },
          '50%': { transform: 'scale(1.1) rotate(2deg)' },
          '100%': { transform: 'scale(1.05) rotate(-2deg)' },
        },
        slideInUp: {
          '0%': { transform: 'translateY(50px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};