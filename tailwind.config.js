/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: "350px", // => @media (min-width: 370px) { ... }

        tablet: "640px", // => @media (min-width: 640px) { ... }

        laptop: "1024px", // => @media (min-width: 1024px) { ... }

        desktop: "1280px", // => @media (min-width: 1280px) { ... }
      },
      backgroundImage: {
        search: "url('../public/bg.png')",
      },
    },
  },
  plugins: [],
};
