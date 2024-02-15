import React from "react";

import { BLOG_TITLE } from "@/constants";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./styles.css";
import RespectMotionPreferences from "@/components/RespectMotionPreferences";
import ThemeProvidedRoot from "./ThemeProvidedRoot";

export const metadata = {
  title: BLOG_TITLE,
  description: "A wonderful blog about JavaScript",
};

function RootLayout({ children }) {
  return (
    <RespectMotionPreferences>
      <ThemeProvidedRoot
        lang="en"
      >
        <body>
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </ThemeProvidedRoot>
    </RespectMotionPreferences>
  );
}

export default RootLayout;
