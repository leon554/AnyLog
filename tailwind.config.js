/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        panel: {
          1: "hsl(0, 0%, 8%)",
          2: "hsl(0, 0%, 10%)",
          3: "hsl(0, 0%, 12%)",
          progress: "hsl(0, 0%, 13%)",
        },
        background: "#0f0f0f",
        button: {
          DEFAULT: "hsl(144, 100%, 39%)",
          text: "oklch(26.9% 0 0)",
        },

        title: "hsl(0, 0%, 95%)",

        subtext: {
          1: "hsl(0, 0%, 70%)",
          2: "hsl(0, 0%, 55%)",
          3: "hsl(0, 0%, 45%)",
        },

        border: {
          DEFAULT: "hsl(0, 0%, 17%)",
          secondary: "hsl(0, 0%, 17%)",
        },

        highlight: {
          DEFAULT: "hsl(144, 100%, 39%)",
          secondary: "hsl(84, 100%, 41%)",
          dark: "hsl(144, 100%, 6%)",
        },

        chart: {
          axis: "hsl(0, 0%, 10%)",
          axisSecondary: "hsl(0, 0%, 15%)",
          1: "hsl(144, 100%, 39%)",
          2: "hsl(84, 100%, 41%)",
          3: "oklch(0.769 0.188 70.08)",
          4: "oklch(0.627 0.265 303.9)",
          5: "oklch(0.645 0.246 16.439)",
        },

        tooltip: {
          background: "hsl(0, 0%, 10%)",
        },

        texture: "#646464",
      },

      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      },
    },
  },
  plugins: [],
};
