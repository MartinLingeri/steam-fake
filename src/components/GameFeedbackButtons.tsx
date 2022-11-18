import { Box, Button, Stack } from '@chakra-ui/react'

import Btn_arrow_down_padded from '../assets/btn_arrow_down_padded.png'

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
      <Stack direction='row' alignItems='center' display='inline-block'>
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
          display='inline-block'
          width='20px'
          height='30px'
          borderRadius='2px'
          background='title.buttonBg'
          cursor='pointer'
          _hover={{
            background: 'lightHover',
          }}
        >
          <Box
            backgroundImage={`url(${Btn_arrow_down_padded})`}
            backgroundRepeat='no-repeat'
            width='100%'
            height='100%'
          ></Box>
        </Box>
      </Stack>
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
        Ver tu lista
      </Button>
    </Stack>
  )
}
