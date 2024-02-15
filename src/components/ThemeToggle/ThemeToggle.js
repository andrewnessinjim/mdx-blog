"use client";

import React from "react";

import { Sun, Moon } from "react-feather";
import VisuallyHidden from "../VisuallyHidden";
import { ThemeContext } from "../ThemeProvider";
import { StWrapper } from "./ThemeToggle.styled";

function ThemeToggle() {
  const { isDarkTheme, toggleTheme } = React.useContext(ThemeContext);
  return (
    <StWrapper onClick={toggleTheme}>
      {isDarkTheme() ? <Moon size="1.5rem" /> : <Sun size="1.5rem" />}
      <VisuallyHidden>Toggle dark / light mode</VisuallyHidden>
    </StWrapper>
  );
}

export default ThemeToggle;
