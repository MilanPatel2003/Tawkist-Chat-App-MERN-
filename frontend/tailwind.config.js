// tailwind.config.js

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        default: {
          primary: "oklch(0.81 0.19 211.11)",
          secondary: "#a0aec0",
          accent: "#00b3f0",
          neutral: "#f5f5f5",
          "base-100": "#ffffff",
          info: "#3b82f6",
          success: "#34d399",
          warning: "#f59e0b",
          error: "#f87171",
        },
      },
      {
        yourname: {
          primary: "oklch(0.76 0.09 236.83)",
          secondary: "#a0aec0",
          accent: "rgb(67 103 154)",
          neutral: "#f5f5f5",
          "base-100": "#ffffff",
          info: "#3b82f6",
          success: "#34d399",
          warning: "#f59e0b",
          error: "#f87171",
        },
      },
      {
        jujutsukaisen: {
          primary: "oklch(0.52 0.23 30.05)",
          secondary: "#a0aec0",
          accent: "oklch(0 0 0 / 0.42)",
          neutral: "#f5f5f5",
          "base-100": "#ffffff",
          info: "#3b82f6",
          success: "#34d399",
          warning: "#f59e0b",
          error: "#f87171",
        },
      },
      {
        avengers: {
          primary: "#000000",
          secondary: "#a0aec0",
          accent: "oklch(0 0 0)",
          neutral: "#f5f5f5",
          "base-100": "#ffffff",
          info: "#3b82f6",
          success: "#34d399",
          warning: "#f59e0b",
          error: "#f87171",
        },
      },
      {
        waifu: {
          primary: "#ec4899",
          secondary: "#a0aec0",
          accent: "oklch(0.74 0.19 344.41 / 0.5)",
          neutral: "#f5f5f5",
          "base-100": "#ffffff",
          info: "#3b82f6",
          success: "#34d399",
          warning: "#f59e0b",
          error: "#f87171",
        },
      },
    ],
  },
};
