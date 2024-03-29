import { styled } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { ReactElement } from "react";


const CustomIcon = styled(IconButton)({
  // background: "red",
  // "&:hover": {
  //   background: "green",
  // },
});

export default function Icon({ children, size, props }: { children: ReactElement }) {
  return <CustomIcon className="IconButton" {...props}>{children}</CustomIcon>;
}
