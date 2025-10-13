import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // ... আপনার টেমপ্লেট পাথ
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-brand-primary)",
      },
    },
  },
};

export default config;
