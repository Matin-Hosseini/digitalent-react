import Box from "../../ContainerBox";

// import NavLink from "./NavLink";

import "./index.css";
import NavMenu from "./NavMenu";
import NavOptions from "./NavOptions";

export default function NavBar() {
  return (
    <Box className="h-20" padding={0}>
      <nav className="relative flex items-center justify-between h-full px-6">
        <NavMenu />
        <NavOptions />
      </nav>
    </Box>
  );
}
