import { Box, Button, Heading, Image, Stack, Text } from '@chakra-ui/react'

import IconPlatformWindows from '../assets/icon_platform_win.png'
import IconPlatformMac from '../assets/icon_platform_mac.png'
import IconPlatformLinux from '../assets/icon_platform_linux.png'

export default function PurchaseGame() {
  return (
    <Box
      background='linear-gradient( -60deg, rgba(226,244,255,0.3) 5%,rgba(84, 107, 115, 0.3) 95%)'
      borderRadius='4px'
      padding='16px'
      width='616px'
      height='72px'
      zIndex='100'
      position='relative'
    >
      <Stack direction='row' justifyContent='space-between'>
        <Heading
          fontFamily='Motiva Sans'
          fontWeight='normal'
          fontSize='21px'
          color='white'
        >
          Comprar EVE Online
        </Heading>
        <Box
          display='flex'
          flexDirection='row'
          alignItems='center'
          justifyContent='center'
        >
          <Image src={IconPlatformWindows} />
          <Image src={IconPlatformMac} />
          <Image src={IconPlatformLinux} />
        </Box>
      </Stack>
      <Box
        display='flex'
        flexDirection='row'
        alignItems='center'
        height='36px'
        backgroundColor='black'
        borderRadius='2px'
        position='absolute'
        right='16px'
        bottom='-16px'
      >
        <Text
          fontSize='13px'
          fontFamily='Motiva Sans'
          color='textPurchasePrice'
          paddingInline='12px'
          whiteSpace='nowrap'
        >
          ARS$ 4999,99
        </Text>
        <Button
          fontSize='15px'
          fontFamily='Motiva Sans'
          fontWeight='normal'
          background='linear-gradient( to right, #75b022 5%, #588a1b 95%)'
          textShadow='1px 1px 0px rgb(0 0 0 / 30%)'
          borderRadius='2px'
          marginRight='3px'
          color='textPurchaseButton'
          height='30px'
          _hover={{ filter: 'brightness(1.2)' }}
        >
          Añadir al carro
        </Button>
      </Box>
    </Box>
  )
}
