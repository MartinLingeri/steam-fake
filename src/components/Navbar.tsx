import { Box, Button, Image, Stack } from '@chakra-ui/react'

import HamburguerMenu from '../assets/header_menu_hamburger.png'
import SteamLogo from '../assets/header_logo.png'

export default function Navbar({
  onOpen,
  btnRef,
}: {
  onOpen: () => void
  btnRef: React.RefObject<HTMLButtonElement>
}) {
  return (
    <Stack
      direction='row'
      alignItems='center'
      justifyContent='center'
      backgroundColor='nav'
      boxShadow='0 0 7px 0 rgb(0 0 0 / 75%)'
      padding='13px 8px'
      height='62px'
    >
      <Button
        variant='unstyled'
        position='absolute'
        left={4}
        width='36px'
        height='31px'
        cursor='pointer'
        ref={btnRef}
        onClick={onOpen}
      >
        <Image src={HamburguerMenu}></Image>
      </Button>
      <Image
        src={SteamLogo}
        alt='Steam logo'
        height='36px'
        cursor='pointer'
      ></Image>
    </Stack>
  )
}
