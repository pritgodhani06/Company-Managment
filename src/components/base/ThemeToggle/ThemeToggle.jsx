import { useTheme } from "@/providers/theme-provider";
import { Button } from "../buttons/button";
import { Moon01,Sun } from "@untitledui/icons";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("light");
    } else {
      // when theme is "system", switch explicitly to light or dark
      setTheme("light"); // or "dark"
    }
  };
  return (
    <Button onClick={toggleTheme} iconLeading={theme === "dark" ? <Moon01 data-icon /> : <Sun data-icon />} />
  );
}
