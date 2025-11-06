import * as extend from './tailwindExtend.json';
import path from 'path';

export default {
  darkMode: "class",
  content: [
    path.resolve(__dirname, "./packages/**/src/**/*.{stories}.{tsx,ts,js}"),
  ],
  theme: {
    extend,
  },
  plugins: [],
};
