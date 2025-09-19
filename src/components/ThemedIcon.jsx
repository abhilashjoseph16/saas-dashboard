import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ThemedIcon({ lightSrc, darkSrc, alt, ...props }) {
  const { theme } = useContext(ThemeContext);
  const src = theme === "light" ? lightSrc : darkSrc;
  return <img src={src} alt={alt} {...props} />;

}

export default ThemedIcon
