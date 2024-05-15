import { Box, Modal } from "@mui/material";
import ThreeDotsLoading from "./ThreeDots";
import Logo from "../Logo";
import { useThemeContext } from "../../contexts/theme";

export default function GloablLoading() {
  const { theme } = useThemeContext();

  return (
    <Modal
      open={true}
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box
        sx={{
          background: "var(--section-bg)",
          padding: "2rem 8rem",
          borderRadius: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Logo />
        <ThreeDotsLoading background={theme === "dark" ? "white" : "black"} />
      </Box>
    </Modal>
  );
}
