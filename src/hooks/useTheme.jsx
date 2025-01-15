import { useEffect, useState } from "react";

const themeLokostori = () => {
  return localStorage.getItem("theme") || "winter";
};

export function useTheme() {
  const [theme, setTheme] = useState(themeLokostori());

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, localStorage.setItem[("theme", theme)]);
  const changeTheme = () => {
    setTheme((prev) => {
      prev == "winter" ? "dracula" : "winter";
    });
  };
  return { changeTheme, theme };
}
