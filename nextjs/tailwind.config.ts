import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    container: {
      center: true,
      screens: {
        "2xl": "75rem",
      },
      padding: {
        DEFAULT: "6px",
        "2xl": "10px",
      },
    },

    extend: {
      width: {
        "70px": "70px",
        "480px": "480px",
      },
      spacing: {
        "13px": "13px",
        "66px": "66px",
        "590px": "590px",
        "432px": "432px",
        "488px": "488px",
        unset: "unset",
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
      },
      zIndex: {
        "1": "1",
        "999": "999",
      },
      lineHeight: {
        "1.08em": "1.08em",
        "1.2em": "1.2em",
        "1.8em": "1.8em",
        "2em": "2em",
      },
      fontSize: {
        "40px": "40px",
        "96px": "96px",
        "66px": "66px",
      },
      letterSpacing: {
        tightest: "-0.03em",
      },
      backgroundPosition: {
        "center-right": "center right",
      },
    },
    backgroundImage: {
      "hero-pattern": "url('/images/man-qx-bg.png')",
    },
  },
  plugins: [],
} satisfies Config;
