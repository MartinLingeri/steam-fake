import { Box, Button, Stack } from '@chakra-ui/react'

import Btn_arrow_down_padded from '../assets/btn_arrow_down_padded.png'
import ArrowIcon from '../assets/icons_16.png'

export default function GameFeedbackButtons() {
  return (
    <Stack
      direction='row'
      alignItems='center'
      justifyContent='space-between'
      zIndex='100'
      padding='0 16px'
      margin='0 !important'
    >
      <Box display='flex' gap='2px' flexDirection='row' alignItems='center'>
        <Button
          padding='16px'
          height='30px'
          fontSize='15px'
          lineHeight='30px'
          borderRadius='2px'
          color='textBlue'
          background='title.buttonBg'
          fontWeight='400'
          _hover={{
            background: 'lightHover',
            color: 'text',
          }}
        >
          Agregar a la lista de deseados
        </Button>
        <Button
          padding='16px'
          height='30px'
          fontSize='15px'
          lineHeight='30px'
          borderRadius='2px'
          color='textBlue'
          background='title.buttonBg'
          fontWeight='400'
          _hover={{
            background: 'lightHover',
            color: 'text',
          }}
        >
          Seguir
        </Button>
        <Button
          padding='16px'
          height='30px'
          fontSize='15px'
          lineHeight='30px'
          borderRadius='2px'
          color='textBlue'
          background='title.buttonBg'
          fontWeight='400'
          _hover={{
            background: 'lightHover',
            color: 'text',
          }}
        >
          Ignorar
        </Button>
        <Box
          display='flex'
          flexDirection='row'
          alignItems='center'
          justifyContent='center'
          width='20px'
          height='32px'
          borderRadius='2px'
          background='title.buttonBg'
          cursor='pointer'
          _hover={{ backgroundColor: 'primary.600' }}
          _before={{
            content: '""',
            backgroundImage: `url(${Btn_arrow_down_padded})`,
            backgroundRepeat: 'no-repeat',
            width: '20px',
            height: '14px',
          }}
        ></Box>
      </Box>
      <Button
        display='flex'
        flexDirection='row'
        alignItems='center'
        padding='16px'
        height='30px'
        fontSize='15px'
        lineHeight='30px'
        borderRadius='2px'
        color='textBlue'
        background='title.buttonBg'
        fontWeight='400'
        _hover={{
          background: 'lightHover',
          color: 'text',
        }}
      >
        <Box>Ver tu lista</Box>
        <Box
          marginLeft='12px'
          backgroundImage={`url(${ArrowIcon})`}
          width='16px'
          height='16px'
          backgroundPosition='-176px 0px'
        ></Box>
      </Button>
    </Stack>
  )
}