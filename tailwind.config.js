import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        pulseGlow: "pulseGlow 1.5s infinite",
        borderGlow: "borderGlow 2s linear infinite",
      },
      keyframes: {
        borderGlow: {
          "0%": { borderColor: "#60a5fa", boxShadow: "0 0 5px #60a5fa" },
          "50%": { borderColor: "#3b82f6", boxShadow: "0 0 15px #3b82f6" },
          "100%": { borderColor: "#60a5fa", boxShadow: "0 0 5px #60a5fa" },
        },
        borderGlow: {
          "0%": { borderColor: "#facc15", boxShadow: "0 0 5px #facc15" }, // #facc15 — yellow-500
          "50%": { borderColor: "#eab308", boxShadow: "0 0 15px #eab308" }, // #eab308 — yellow-600
          "100%": { borderColor: "#facc15", boxShadow: "0 0 5px #facc15" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 10px #60a5fa, 0 0 20px #60a5fa" },
          "50%": { boxShadow: "0 0 20px #3b82f6, 0 0 40px #3b82f6" },
        },
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["winter", "dracula"],
  },
};
