import Box from "../../ContainerBox";

import NavMenu from "./NavMenu";
import NavOptions from "./NavOptions";

export default function NavBar() {
  return (
    <Box className="h-20">
      <nav className="relative flex items-center justify-between h-full px-6">
        <NavMenu />
        <NavOptions />
      </nav>
    </Box>
  );
}
