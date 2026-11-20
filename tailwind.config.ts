import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { colors: { navy: "#172433", gold: "#E6AD43", cream: "#F6F4EF" } } },
  plugins: []
};
export default config;
