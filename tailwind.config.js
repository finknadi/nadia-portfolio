// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   darkMode: ["class"],
//   content: [
//     "./pages/**/*.{ts,tsx}",
//     "./components/**/*.{ts,tsx}",
//     "./app/**/*.{ts,tsx}",
//     "./src/**/*.{ts,tsx}",
//   ],
//   theme: {
//     container: {
//       center: true,
//       padding: "2rem",
//       screens: {
//         "2xl": "1400px",
//       },
//     },
//     extend: {
//       fontFamily: {
//         mono: ["JetBrains Mono", "Fira Code", "Consolas", "monospace"],
//         sans: ["Inter", "-apple-system", "system-ui", "sans-serif"],
//       },
//       colors: {
//         primary: {
//           50: "#E6FFF0",
//           100: "#B3FFD9",
//           500: "#00FF41",
//           700: "#00CC33",
//           900: "#008F26",
//           DEFAULT: "#00FF41",
//         },
//         accent: {
//           500: "#FFB800",
//           700: "#FF9500",
//           DEFAULT: "#FFB800",
//         },
//         neutral: {
//           50: "#F5F7FA",
//           100: "#E8EDF2",
//           200: "#C5CDD3",
//           300: "#A2ADB6",
//           400: "#7A8894",
//           500: "#5A6873",
//           600: "#2D3841",
//           700: "#1E272E",
//           800: "#141B20",
//           900: "#0A0E11",
//           950: "#000000",
//         },
//         bg: {
//           page: "#000000",
//           surface: "#0A0E11",
//           elevated: "#141B20",
//         },
//       },
//       spacing: {
//         1: "4px",
//         2: "8px",
//         3: "12px",
//         4: "16px",
//         6: "24px",
//         8: "32px",
//         12: "48px",
//         16: "64px",
//         24: "96px",
//         32: "128px",
//       },
//       borderRadius: {
//         sm: "4px",
//         md: "8px",
//         lg: "12px",
//         xl: "16px",
//         DEFAULT: "8px",
//       },
//       boxShadow: {
//         sm: "0 1px 2px rgba(0, 255, 65, 0.05)",
//         card: "0 4px 16px rgba(0, 0, 0, 0.4)",
//         "card-hover": "0 8px 32px rgba(0, 0, 0, 0.5)",
//         modal: "0 24px 48px rgba(0, 0, 0, 0.7)",
//         glow: "0 0 16px rgba(0, 255, 65, 0.3)",
//       },
//       keyframes: {
//         typewriter: {
//           from: { width: "0" },
//           to: { width: "100%" },
//         },
//         blink: {
//           "0%, 50%": { opacity: "1" },
//           "51%, 100%": { opacity: "0" },
//         },
//         glitch: {
//           "0%": { transform: "translate(0)" },
//           "20%": { transform: "translate(-2px, 2px)" },
//           "40%": { transform: "translate(-2px, -2px)" },
//           "60%": { transform: "translate(2px, 2px)" },
//           "80%": { transform: "translate(2px, -2px)" },
//           "100%": { transform: "translate(0)" },
//         },
//         scanline: {
//           "0%": { transform: "translateY(-100%)" },
//           "100%": { transform: "translateY(100vh)" },
//         },
//       },
//       animation: {
//         typewriter: "typewriter 2s steps(40, end)",
//         blink: "blink 1s infinite",
//         glitch: "glitch 0.3s ease-in-out",
//         scanline: "scanline 8s linear infinite",
//       },
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],

  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],

  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },

    extend: {
      fontFamily: {
        mono: ["JetBrains Mono", "Fira Code", "Consolas", "monospace"],
        sans: ["Inter", "-apple-system", "system-ui", "sans-serif"],
      },

      colors: {
        primary: {
          50: "#FAF2FF",
          100: "#F3E5FF",
          200: "#E6C7FF",
          300: "#D39AFF",
          400: "#C06FFF",
          500: "#B455FF",
          600: "#9D3EEA",
          700: "#8B2FE3",
          800: "#6C1DB8",
          900: "#54118F",
          950: "#33005E",
          DEFAULT: "#B455FF",
        },

        accent: {
          500: "#FFD66B",
          700: "#E0A93E",
          DEFAULT: "#FFD66B",
        },

        success: {
          500: "#42D392",
          700: "#269E69",
          DEFAULT: "#42D392",
        },

        neutral: {
          50: "#F5F2F7",
          100: "#E6E1E9",
          200: "#CFC8D5",
          300: "#AAA4B2",
          400: "#85808E",
          500: "#69636F",
          600: "#46414D",
          700: "#34303A",
          800: "#24212C",
          900: "#1B1921",
          950: "#141318",
        },

        bg: {
          page: "#141318",
          surface: "#1B1921",
          elevated: "#24212C",
        },
      },

      spacing: {
        1: "4px",
        2: "8px",
        3: "12px",
        4: "16px",
        6: "24px",
        8: "32px",
        12: "48px",
        16: "64px",
        24: "96px",
        32: "128px",
      },

      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        DEFAULT: "8px",
      },

      boxShadow: {
        sm: "0 1px 2px rgba(180, 85, 255, 0.08)",
        card: "0 4px 16px rgba(8, 7, 10, 0.4)",
        "card-hover": "0 8px 32px rgba(8, 7, 10, 0.55)",
        modal: "0 24px 48px rgba(8, 7, 10, 0.75)",
        glow: "0 0 18px rgba(180, 85, 255, 0.35)",
      },

      keyframes: {
        typewriter: {
          from: {
            width: "0",
          },
          to: {
            width: "100%",
          },
        },

        blink: {
          "0%, 50%": {
            opacity: "1",
          },
          "51%, 100%": {
            opacity: "0",
          },
        },

        glitch: {
          "0%": {
            transform: "translate(0)",
          },
          "20%": {
            transform: "translate(-2px, 2px)",
          },
          "40%": {
            transform: "translate(-2px, -2px)",
          },
          "60%": {
            transform: "translate(2px, 2px)",
          },
          "80%": {
            transform: "translate(2px, -2px)",
          },
          "100%": {
            transform: "translate(0)",
          },
        },

        scanline: {
          "0%": {
            transform: "translateY(-100%)",
          },
          "100%": {
            transform: "translateY(100vh)",
          },
        },
      },

      animation: {
        typewriter: "typewriter 2s steps(40, end)",
        blink: "blink 1s infinite",
        glitch: "glitch 0.3s ease-in-out",
        scanline: "scanline 8s linear infinite",
      },
    },
  },

  plugins: [],
};
