/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#0072F5",
      neutral: "#889096",
      secondary: "#7828C8",
      sucess: "#17C964",
      warning: "#F5A524",
      error: "#F31260",
      light: "#E6E8EB",
    },
  },
  plugins: [require("flowbite/plugin")],
};
