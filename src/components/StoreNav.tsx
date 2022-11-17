import { Box, Heading, Image, Input, Stack } from '@chakra-ui/react'

import SearchIcon from '../assets/search_icon_btn.png'

export default function StoreNav() {
  const categories = [
    'Tu tienda',
    'Nuevo y destacable',
    'Categorias',
    'Tienda de puntos',
    'Noticias',
    'Laboatorios',
  ]

  return (
    <Stack
      direction='row'
      fontFamily='storeNav.font'
      background='storeNav.bg'
      width='940px'
      height='34px'
      alignItems='center'
      justifyContent='space-between'
      marginTop='32px'
      boxShadow='storeNav.shadow'
    >
      <Stack direction='row' color='text' whiteSpace='nowrap'>
        {categories.map((category, index) => (
          <Box
            key={index}
            cursor='pointer'
            width='100%'
            height='34px'
            display='flex'
            alignItems='center'
            justifyContent='center'
            padding='0 15px'
            margin='0 !important'
            _hover={{ background: 'storeNav.hover' }}
          >
            <Heading
              display='inline-block'
              fontSize='13px'
              fontWeight='600'
              textShadow='0px 2px 3px rgb(0 0 0 / 30%)'
            >
              {category}
            </Heading>
          </Box>
        ))}
      </Stack>
      <Stack
        direction='row'
        alignItems='center'
        position='relative'
        marginRight='4px !important'
      >
        <Input
          background='storeNav.inputBg'
          variant='unstyled'
          borderRadius='2px'
          paddingInline='14px'
          width='202px'
          height='29px'
          fontSize='14px'
          placeholder='buscar'
          _placeholder={{ color: '#0e1c25' }}
          _hover={{ border: '1px solid #54a5d4' }}
        ></Input>
        <Image
          src={SearchIcon}
          position='absolute'
          right='0'
          zIndex='1'
          alt='Search icon'
          width='25px'
          height='25px'
          cursor='pointer'
          _hover={{ filter: 'brightness(1.2)' }}
        ></Image>
      </Stack>
    </Stack>
  )
}
