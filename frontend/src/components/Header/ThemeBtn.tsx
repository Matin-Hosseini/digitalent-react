import IconButton from "@mui/material/IconButton";
import { BsMoon, BsSun } from "react-icons/bs";

import { useThemeContext } from "../../contexts/theme";

export default function ThemeBtn() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <IconButton className="IconButton" onClick={toggleTheme}>
      {theme === "light" ? (
        <BsMoon className="text-color" />
      ) : (
        <BsSun className="text-color" />
      )}
    </IconButton>
  );
}
