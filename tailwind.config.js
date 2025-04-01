/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      rotate: {
        '45': '45deg',
        '-45': '-45deg',
      },
      aspectRatio: {
        "0.7/1": "0.75/ 1",
        "1.3/1": "1.3/ 1",
        "2.3/1": "2.3/ 1"
      },
       backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '56%': '56%',
    }
    },
    screens: {
      sm: "640px",
      md: "768px",
      tablet: "880px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1380px"
    }
    
  },
  plugins: []
};
