"use client";

import { ThemeContext } from "@/components/ThemeProvider";
import { DARK_TOKENS, LIGHT_TOKENS } from "@/constants";
import { Spline_Sans_Mono, Work_Sans } from "next/font/google";
import React from "react";

const mainFont = Work_Sans({
  subsets: ["latin"],
  display: "fallback",
  weight: "variable",
  variable: "--font-family",
});
const monoFont = Spline_Sans_Mono({
  subsets: ["latin"],
  display: "fallback",
  weight: "variable",
  variable: "--font-family-mono",
});

function ThemedRoot(props) {
  const { currentTheme } = React.useContext(ThemeContext);

  return (
      <html
        data-color-theme={currentTheme}
        style={currentTheme === "light" ? LIGHT_TOKENS : DARK_TOKENS}
        className={`${mainFont.variable} ${monoFont.variable}`}
        lang="en"
        {...props}
      />
  );
}

export default ThemedRoot;
