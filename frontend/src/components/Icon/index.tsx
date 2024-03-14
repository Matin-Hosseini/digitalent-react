import IconButton from "@mui/material/IconButton";
import { ReactElement } from "react";
import "./index.css";

export default function Icon({ children, size }: { children: ReactElement }) {
  return (
    <IconButton className="IconButton">
      {children}
    </IconButton>
  );
}
