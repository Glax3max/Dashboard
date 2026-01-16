/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif"
        ],
        display: [
          "var(--font-manrope)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif"
        ]
      },
      colors: {
        surface: {
          DEFAULT: "#ffffff",
          muted: "#f3f4f6"
        },
        qyuro: {
          900: "#0f172a",
          800: "#111428",
          700: "#1f2544",
          500: "#4f46e5"
        }
      },
      boxShadow: {
        card: "0 18px 40px rgba(15, 23, 42, 0.08)",
        soft: "0 8px 24px rgba(15, 23, 42, 0.08)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" }
        },
        shimmer: {
          "0%": { opacity: "0.6" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0.6" }
        },
        line: {
          "0%": { transform: "translateY(6px)" },
          "50%": { transform: "translateY(-4px)" },
          "100%": { transform: "translateY(6px)" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
        line: "line 8s ease-in-out infinite"
      }
    }
  },
  plugins: []
};
