import IconButton from "@mui/material/IconButton";
import { BsMoon, BsSun } from "react-icons/bs";

import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme";

export default function ThemeBtn() {
  const { theme, toggleTheme } = useContext(ThemeContext);

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
