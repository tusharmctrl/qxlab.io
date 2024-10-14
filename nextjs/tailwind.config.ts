import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.tsx"],
  theme: {
    container: {
      center: true,
      screens: {
        "2xl": "75rem"
      },
      padding: {
        DEFAULT: "6px",
        "2xl": "10px"
      }
    },
    extend: {
      width: {
        "70px": "70px",
        "480px": "480px"
      },
      spacing: {
        "13px": "13px",
        "66px": "66px",
        "590px": "590px",
        "432px": "432px",
        "488px": "488px",
        unset: "unset"
      },
      colors: {
        "dark-slate-gray": "#1E5758",
        "slate-gray": "#256061",
        "maximum-blue-green": "#33CCCC",
        crayola: "#30393F",
        waterspout: "#A5FFED",
        cultured: "#F4F4F4",
        "pastel-green": "#66D76E",
        eucalyptus: "#43E6AF",
        "charleston-green": "#242b2f",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))"
        }
      },
      zIndex: {
        "1": "1",
        "999": "999"
      },
      lineHeight: {
        "1.08em": "1.08em",
        "1.2em": "1.2em",
        "1.8em": "1.8em",
        "2em": "2em"
      },
      fontSize: {
        "40px": "40px",
        "96px": "96px",
        "66px": "66px"
      },
      letterSpacing: {
        tightest: "-0.03em"
      },
      backgroundPosition: {
        "center-right": "center right"
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      }
    },
    backgroundImage: {
      "hero-pattern": "url('/images/man-qx-bg.png')"
    }
  },
  plugins: [require("tailwindcss-animate")]
} satisfies Config;
