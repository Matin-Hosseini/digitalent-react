import { IconButton as MUIIconButton, IconButtonProps } from "@mui/material";

interface CustomIconButtonProps extends IconButtonProps {
  
}
export default function IconButton({
  children,
  ...props
}: CustomIconButtonProps) {
  return (
    <MUIIconButton
      sx={{ background: "var(--section-bg)", color: "var(--text-color)" }}
      {...props}
    >
      {children}
    </MUIIconButton>
  );
}
