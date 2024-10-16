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
        "0.1px": "0.1px",
        "2%": "2%",
        "8%": "8%",
        "12%": "12%",
        "16%": "16%",
        "40vmax": "40vmax",
        "13px": "13px",
        "18px": "18px",
        "66px": "66px",
        "72px": "72px",
        "300px": "300px",
        "400px": "400px",
        "590px": "590px",
        "432px": "432px",
        "488px": "488px",
        "612px": "612px",
        unset: "unset"
      },
      borderWidth: {
        "0.1px": "0.1px",
        "0.5px": "0.2px"
      },
      colors: {
        "dark-slate-gray": "#1E5758",
        "blue-sapphire": "#166C72",
        "slate-gray": "#256061",
        "maximum-blue-green": "#33CCCC",
        crayola: "#30393F",
        waterspout: "#A5FFED",
        cultured: "#F4F4F4",
        "pastel-green": "#66D76E",
        eucalyptus: "#43E6AF",
        "charleston-green": "#242b2f",
        "violets-blue": "#885EFE",
        "msu-green": "#1B3E3F",
        "celadon-green": "#28928F",
        "hex-black": "#0A1B14",
        "indigo-black": "#2B433E",
        "rich-blue": "#1A90D9",
        "persian-blue": "#006AA2",
        "facian-blue": "#355088",
        "celtic-blue": "#3061C8",
        "vivid-blue": "#00C9FF",
        "azure-blue": "#0097FF",
        "pale-silver": "#CFC6C0",
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
        "1.4em": "1.4em",
        "1.8em": "1.8em",
        "2em": "2em",
        "3em": "3em"
      },
      fontSize: {
        "22px": "22px",
        "26px": "26px",
        "40px": "40px",
        "56px": "56px",
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
      },
      blur: {
        "75px": "75px"
      },
      boxShadow: {
        "3xl": "20px 4px 20px 16px rgb(48 57 63)",
        "5xl": "-20px -1px 20px 16px rgb(48 57 63)",
        card: "0 2px 4px rgba(149,146,157,.15)",
        "card-hover": "0 5px 14px rgba(149,146,157,.15)"
      },
      "blog-pattern": "url('./images/blog-detail.png')"
    },
    backgroundImage: {
      "hero-pattern": "url('/images/man-qx-bg.png')"
    }
  },
  plugins: [require("tailwindcss-animate")]
} satisfies Config;
