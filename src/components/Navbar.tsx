import { Box, Image, Stack } from "@chakra-ui/react";

import HamburguerMenu from "../assets/header_menu_hamburger.png";
import SteamLogo from "../assets/header_logo.png";

export default function Navbar() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      backgroundColor="nav"
      boxShadow="0 0 7px 0 rgb(0 0 0 / 75%)"
      padding="13px 8px"
      height="62px"
    >
      <Box
        position="absolute"
        left={4}
        width="36px"
        height="31px"
        cursor="pointer"
      >
        <Image src={HamburguerMenu}></Image>
      </Box>
      <Image
        src={SteamLogo}
        alt="Steam logo"
        height="36px"
        cursor="pointer"
      ></Image>
    </Stack>
  );
}
