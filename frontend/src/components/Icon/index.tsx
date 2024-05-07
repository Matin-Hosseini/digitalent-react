import { styled } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { ReactElement } from "react";

const CustomIcon = styled(IconButton)({
  background: "var(--section-bg)",
  // "&:hover": {
  //   background: "green",
  // },
});

export default function Icon({
  children,
  size,
  ...props
}: {
  children: ReactElement;
  size?: string | number;
}) {
  return (
    <CustomIcon className="IconButton" {...props}>
      {children}
    </CustomIcon>
  );
}
