import { useState } from 'react'
import { Box, Heading, Image, Link, Stack, Text } from '@chakra-ui/react'

import { useTranslation } from 'react-i18next'
import { useGlobalStore } from '../store'

import GameBackgroundShadow from '../assets/game_page_background_shadow.png'
import IconGameHighLightVide from '../assets/ico_game_highlight_video.png'
import ImageSlider from './ImageSlider'

import { reviewType } from './reviewType'

export default function GameInfo() {
  const { t, i18n } = useTranslation()
  const {
    gameDescription,
    gameDeveloper,
    gamePublisher,
    gameDate,
    gameImages,
    gameReview,
  } = useGlobalStore()
  const [selectedImageIndex, setSeletedImageIndex] = useState(0)
  const [tags, setTags] = useState(['Action', 'Adventure', 'RPG', 'Sci-Fi'])

  function selectNextImage() {
    if (selectedImageIndex === Object.keys(gameImages).length - 1) {
      setSeletedImageIndex(0)
    } else {
      setSeletedImageIndex(selectedImageIndex + 1)
    }
  }

  function selectPreviousImage() {
    if (selectedImageIndex === 0) {
      setSeletedImageIndex(Object.keys(gameImages).length - 1)
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
      <Box display='flex' flexDirection='column' zIndex='100' gap='6px'>
        <Image
          src={Object.values(gameImages)[selectedImageIndex]}
          width='600px'
          height='337px'
          cursor='pointer'
          transition='all 0.3s ease-in-out'
          objectFit='cover'
        ></Image>
        <Box display='flex' flexDirection='row' gap='6px'>
          {Object.values(gameImages).map((thumbnail, index) => (
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
              <Image
                src={thumbnail}
                width='115px'
                height='65px'
                objectFit='cover'
              />
            </Box>
          ))}
        </Box>
        <ImageSlider
          selectNextImage={selectNextImage}
          selectPreviousImage={selectPreviousImage}
          selectedImageIndex={selectedImageIndex}
          imagesLength={Object.keys(gameImages).length}
        />
      </Box>
      <Stack zIndex='100' width='324px'>
        <Image
          src='https://picsum.photos/324/151'
          width='324px'
          height='151px'
        ></Image>
        <Text
          overflow='hidden'
          textOverflow='ellipsis'
          color='text'
          paddingRight='16px'
          width='324px'
          minHeight='36px'
          maxHeight='108px'
          fontSize='13px'
          lineHeight='18px'
        >
          {gameDescription}
        </Text>
        <Box marginTop='8px !important' marginBottom='4px !important'>
          {gameReview.recent.type != 'none' && (
            <Stack direction='row' alignItems='center'>
              <Heading
                textTransform='uppercase'
                color='textDarkGray'
                fontSize='10px'
                fontWeight='400'
                textOverflow='ellipsis'
                lineHeight='16px'
                fontFamily='Arial'
                minWidth='94px'
              >
                {t('recentReviews')}:
              </Heading>
              <Link>
                <Heading
                  color={
                    reviewType[
                      gameReview.recent.type as keyof typeof reviewType
                    ].color
                  }
                  fontSize='12px'
                  fontWeight='400'
                  fontFamily='Arial'
                  lineHeight='16px'
                  whiteSpace='nowrap'
                  display='inline-block'
                >
                  {t(`reviewType.${gameReview.recent.type}`)}
                </Heading>{' '}
                <Heading
                  color='textDarkGray'
                  fontSize='12px'
                  fontWeight='400'
                  fontFamily='Arial'
                  lineHeight='16px'
                  whiteSpace='nowrap'
                  display='inline-block'
                >
                  (
                  {Intl.NumberFormat(i18n.language).format(
                    gameReview.recent.count,
                  )}
                  )
                </Heading>
              </Link>
            </Stack>
          )}
          <Stack direction='row' alignItems='center'>
            <Heading
              textTransform='uppercase'
              color='textDarkGray'
              fontSize='10px'
              fontWeight='400'
              fontFamily='Arial'
              textOverflow='ellipsis'
              lineHeight='16px'
              minWidth='94px'
            >
              {t('allReviews')}:
            </Heading>
            {gameReview.all.type == 'de' ? (
              <Heading
                color={
                  reviewType[gameReview.all.type as keyof typeof reviewType]
                    .color
                }
                fontSize='12px'
                fontWeight='400'
                fontFamily='Arial'
                lineHeight='16px'
                whiteSpace='nowrap'
                display='inline-block'
                cursor='pointer'
              >
                {t('reviewType.de')}
              </Heading>
            ) : (
              <Link>
                <Heading
                  color={
                    reviewType[gameReview.all.type as keyof typeof reviewType]
                      .color
                  }
                  fontSize='12px'
                  fontWeight='400'
                  fontFamily='Arial'
                  lineHeight='16px'
                  whiteSpace='nowrap'
                  display='inline-block'
                >
                  {t(`reviewType.${gameReview.all.type}`)}
                </Heading>{' '}
                <Heading
                  color='textDarkGray'
                  fontSize='12px'
                  fontWeight='400'
                  fontFamily='Arial'
                  lineHeight='16px'
                  whiteSpace='nowrap'
                  display='inline-block'
                >
                  (
                  {Intl.NumberFormat(i18n.language).format(
                    gameReview.all.count,
                  )}
                  )
                </Heading>
              </Link>
            )}
          </Stack>
        </Box>
        <Stack direction='row' alignItems='center'>
          <Heading
            textTransform='uppercase'
            color='textDarkGray'
            fontSize='10px'
            fontWeight='400'
            fontFamily='Arial'
            textOverflow='ellipsis'
            marginBlock='4px !important'
            lineHeight='16px'
            whiteSpace='nowrap'
            minWidth='94px'
          >
            {t('releaseDate')}:
          </Heading>
          <Heading
            textTransform={i18n.language == 'en' ? 'capitalize' : 'uppercase'}
            color='textGray'
            fontSize='12px'
            fontWeight='400'
            fontFamily='Arial'
            lineHeight='16px'
            whiteSpace='nowrap'
          >
            {gameDate == ''}
            {gameDate == ''
              ? 'TBA'
              : gameDate.toLocaleString(i18n.language, {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
          </Heading>
        </Stack>
        <Box marginBlock='8px !important'>
          <Stack direction='row' alignItems='center' overflow='hidden'>
            <Heading
              textTransform='uppercase'
              color='textDarkGray'
              fontSize='10px'
              fontWeight='400'
              fontFamily='Arial'
              lineHeight='16px'
              minWidth='94px'
            >
              {t('developer')}:
            </Heading>
            <Link
              overflow='hidden'
              whiteSpace='nowrap'
              textOverflow='ellipsis'
              color='primary.100'
              textDecoration='none'
              fontSize='12px'
              _hover={{ color: 'white' }}
            >
              {gameDeveloper}
            </Link>
          </Stack>
          <Stack direction='row' alignItems='center' overflow='hidden'>
            <Heading
              textTransform='uppercase'
              color='textDarkGray'
              fontSize='10px'
              fontWeight='400'
              fontFamily='Arial'
              lineHeight='16px'
              minWidth='94px'
            >
              {t('publisher')}:
            </Heading>
            <Link
              overflow='hidden'
              whiteSpace='nowrap'
              textOverflow='ellipsis'
              color='primary.100'
              textDecoration='none'
              fontSize='12px'
              _hover={{ color: 'white' }}
            >
              {gamePublisher}
            </Link>
          </Stack>
        </Box>
        <Box display='flex' flexDirection='column' margin='0 !important'>
          <Heading
            color='textDarkGray'
            fontSize='12px'
            fontWeight='normal'
            fontFamily='Arial'
            lineHeight='19px'
          >
            {t('tags')}:
          </Heading>
          <Box display='flex'>
            {tags.map((tag, index) => (
              <Box
                key={index}
                display='inline-block'
                height='19px'
                fontSize='11px'
                color='primary.100'
                borderRadius='2px'
                background='title.buttonBg'
                fontWeight='400'
                cursor='pointer'
                paddingInline='8px'
                paddingBlock='1px'
                marginRight='2px'
                textAlign='center'
                _hover={{
                  background: 'lightHover',
                  color: 'text',
                }}
              >
                {tag}
              </Box>
            ))}
            <Box
              display='inline-block'
              height='19px'
              fontSize='11px'
              color='primary.100'
              borderRadius='2px'
              background='title.buttonBg'
              fontWeight='400'
              cursor='pointer'
              paddingInline='8px'
              paddingBlock='1px'
              marginRight='2px'
              textAlign='center'
              _hover={{
                background: 'lightHover',
                color: 'text',
              }}
            >
              {' + '}
            </Box>
          </Box>
        </Box>
      </Stack>
    </Stack>
  )
}
