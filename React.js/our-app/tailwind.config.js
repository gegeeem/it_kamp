/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    // colors: {
    //   plava: "#4287f5",
    // },
    customForms: (theme) => ({
      default: {
        checkbox: {
          icon: '<svg fill="#1a202c" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" ><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/></svg>',
          "&:hover": {
            icon: '<svg fill="#4a5568" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" ><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/></svg>',
          },
        },
      },
    }),
  },
  plugins: [require("@tailwindcss/forms")],
};
