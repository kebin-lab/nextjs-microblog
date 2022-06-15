import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { SunLight, HalfMoon } from "iconoir-react";

export const ChangeThemeButton = () => {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <>
      <button
        aria-label="DarkModeToggle"
        type="button"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {isMounted && <>{theme === "dark" ? <HalfMoon /> : <SunLight />}</>}
      </button>
    </>
  );
};
