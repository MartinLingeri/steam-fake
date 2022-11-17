import { useState } from 'react'
import { Box, Heading, Image, Stack, Text } from '@chakra-ui/react'

import GameBackgroundShadow from '../assets/game_page_background_shadow.png'

export default function GameInfo() {
  const [selectedImageIndex, setSeletedImageIndex] = useState(0)

  const highlightImage = [
    'https://picsum.photos/115/65',
    'https://picsum.photos/115/65',
    'https://picsum.photos/115/65',
  ]

  return (
    <Stack
      direction='row'
      justifyContent='space-between'
      height='445px'
      background={`url(${GameBackgroundShadow})`}
      backgroundPosition='bottom'
      paddingBottom='1px'
      backgroundRepeat='no-repeat'
    >
      <Stack>
        <Image
          src={highlightImage[selectedImageIndex]}
          width='600px'
          height='337px'
          cursor='pointer'
        ></Image>
        <Stack direction='row'>
          {highlightImage.map((thumbnail, index) => (
            <Box
              key={index}
              position='relative'
              display='flex'
              alignItems='center'
              justifyContent='center'
              outline={selectedImageIndex === index ? '2px solid #c6d4df' : ''}
              _before={
                selectedImageIndex === index
                  ? {
                      content: '""',
                      position: 'absolute',
                      clipPath: 'polygon(50% 50%, 0% 100%, 100% 100%)',
                      top: '-26px',
                      width: '30%',
                      height: '40%',
                      background: '#c6d4df',
                    }
                  : {}
              }
              cursor='pointer'
              onClick={() => setSeletedImageIndex(index)}
            >
              <Image src={thumbnail} width='115px' height='65px' />
            </Box>
          ))}
        </Stack>
      </Stack>
      <Stack>
        <Image
          src='https://picsum.photos/324/151'
          width='324px'
          height='151px'
        ></Image>
        <Text
          color='text'
          paddingRight='16px'
          width='324px'
          fontSize='13px'
          lineHeight='18px'
        >
          EVE Online es un juego donde la historia la escriben los jugadores, en
          un universo de una belleza, profundidad y oportunidades sin parangón.
          Únete con tu nave y embárcate en una aventura de industria,
          exploración y conquista mientras grabas tu nombre en la historia de
          New Eden.
        </Text>
        <Box marginBlock='8px !important'>
          <Heading
            textTransform='uppercase'
            color='textDarkGray'
            fontSize='10px'
            fontWeight='400'
            textOverflow='ellipsis'
            lineHeight='16px'
          >
            reseñas recientes:
          </Heading>
          <Heading
            textTransform='uppercase'
            color='textDarkGray'
            fontSize='10px'
            fontWeight='400'
            textOverflow='ellipsis'
            lineHeight='16px'
          >
            reseñas generales:
          </Heading>
        </Box>
        <Heading
          textTransform='uppercase'
          color='textDarkGray'
          fontSize='10px'
          fontWeight='400'
          textOverflow='ellipsis'
          marginBlock='8px !important'
          lineHeight='16px'
        >
          fechas de lanzamiento:
        </Heading>
        <Box marginBlock='8px !important'>
          <Heading
            textTransform='uppercase'
            color='textDarkGray'
            fontSize='10px'
            fontWeight='400'
            textOverflow='ellipsis'
            lineHeight='16px'
          >
            desarrollador:
          </Heading>
          <Heading
            textTransform='uppercase'
            color='textDarkGray'
            fontSize='10px'
            fontWeight='400'
            textOverflow='ellipsis'
            lineHeight='16px'
          >
            editor:
          </Heading>
        </Box>
        <Heading
          textTransform='uppercase'
          color='textDarkGray'
          fontSize='10px'
          fontWeight='400'
          textOverflow='ellipsis'
          lineHeight='16px'
        >
          etiquetas populares para este producto:
        </Heading>
      </Stack>
    </Stack>
  )
}
