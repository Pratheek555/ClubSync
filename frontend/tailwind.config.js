/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const flattenColorPalette = require("tailwindcss/lib/util/flattenColorPalette").default;


export default {
  content: [ 
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
     "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
     './node_modules/@acternity/ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },
    },
  },
  plugins: [nextui(),addVariablesForColors ],
}

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";

// Utility function to combine class names
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}