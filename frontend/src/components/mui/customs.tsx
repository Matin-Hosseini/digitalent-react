import { styled } from "@mui/material";
import MuiFormControllLabel from "@mui/material/FormControlLabel";
import MuiCheckbox from "@mui/material/Checkbox";
import MuiDrawer from "@mui/material/Drawer";
import MuiIconButton from "@mui/material/IconButton";

export const Drawer = styled(MuiDrawer)({});

export const Checkbox = styled(MuiCheckbox)({
  color: "var(--text-color)",
  transition: "var(--transition)",
  "& .MuiSvgIcon-root": { fontSize: "2.5rem" },
  "&.Mui-checked": {
    color: "var(--purple)",
  },
});

export const FormControlLabel = styled(MuiFormControllLabel)({
  margin: 0,
  "& .MuiFormControlLabel-label": {
    fontFamily: "vasir",
    fontSize: "1.3rem",
  },
});

export const IconButton = styled(MuiIconButton)({
  background: "var(--section-bg)",
  color: "var(--text-color)",
});
