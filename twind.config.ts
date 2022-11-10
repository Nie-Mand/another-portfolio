import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      colors: {
        primary: "#FF1E2E",
        "primary-dark": "#DA000F",
      },
      screens: {
        xs: "480px",
      },
    },
  },
} as Options;
