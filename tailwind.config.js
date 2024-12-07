/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'custom' : ['Roboto']
      },
      backgroundImage : {
        homeCover: "url('/bg-cover.jpg')",
        offerCover: "url('/offer-cover.jpg')",
        offerCover2: "url('/offer-cover2.jpg')",
        authBg: "url('/auth-bg.jpg')",
        candidate: "url('/bg-candidate.jpg')",
        recruiter: "url('/bg-recruiter.jpg')",
        home: "url('/bg-home.jpeg')",
        heroCover: "url('/hero-cover.jpg')"
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake", "black"],
  },
}