import { useState } from 'react'
import { Box, Button, Heading, Image, Stack, Text } from '@chakra-ui/react'

import GameBackgroundShadow from '../assets/game_page_background_shadow.png'
import ImageSlider from './ImageSlider'

export default function GameInfo() {
  const [selectedImageIndex, setSeletedImageIndex] = useState(0)

  const highlightImage = [
    'https://picsum.photos/600/337',
    'https://picsum.photos/600/337',
    'https://picsum.photos/600/337',
  ]

  function selectNextImage() {
    if (selectedImageIndex === highlightImage.length - 1) {
      setSeletedImageIndex(0)
    } else {
      setSeletedImageIndex(selectedImageIndex + 1)
    }
  }

  function selectPreviousImage() {
    if (selectedImageIndex === 0) {
      setSeletedImageIndex(highlightImage.length - 1)
    } else {
      setSeletedImageIndex(selectedImageIndex - 1)
    }
  }

  return (
    <Stack
      direction='row'
      justifyContent='space-between'
      height='445px'
      position='relative'
      paddingBottom='1px'
      _before={{
        content: '""',
        position: 'absolute',
        top: '66px',
        width: '100%',
        height: '100%',
        background: `url(${GameBackgroundShadow})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom',
        zIndex: 0,
      }}
    >
      <Stack zIndex='100'>
        <Image
          src={highlightImage[selectedImageIndex]}
          width='600px'
          height='337px'
          cursor='pointer'
          transition='all 0.3s ease-in-out'
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
                      width: '25%',
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
        <ImageSlider
          selectNextImage={selectNextImage}
          selectPreviousImage={selectPreviousImage}
          selectedImageIndex={selectedImageIndex}
          imagesLength={highlightImage.length}
        />
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
        <Box marginTop='8px !important' marginBottom='4px !important'>
          <Heading
            textTransform='uppercase'
            color='textDarkGray'
            fontSize='10px'
            fontWeight='400'
            textOverflow='ellipsis'
            lineHeight='16px'
            fontFamily='Arial'
          >
            reseñas recientes:
          </Heading>
          <Heading
            textTransform='uppercase'
            color='textDarkGray'
            fontSize='10px'
            fontWeight='400'
            fontFamily='Arial'
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
          fontFamily='Arial'
          textOverflow='ellipsis'
          marginBlock='4px !important'
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
            fontFamily='Arial'
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
            fontFamily='Arial'
            textOverflow='ellipsis'
            lineHeight='16px'
          >
            editor:
          </Heading>
        </Box>
        <Heading
          color='textDarkGray'
          fontSize='12px'
          fontWeight='normla'
          fontFamily='Arial'
          lineHeight='19px'
        >
          Etiquetas populares para este producto:
        </Heading>
      </Stack>
    </Stack>
  )
}
