import { useState } from 'react'
import {
  Box,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useMediaQuery,
} from '@chakra-ui/react'

import { useTranslation } from 'react-i18next'
import { useGlobalStore } from '../store'

import GameBackgroundShadow from '../assets/game_page_background_shadow.png'
import IconGameHighLightVideo from '../assets/ico_game_highlight_video.png'
import ImageSlider from './ImageSlider'

import { reviewType } from './reviewType'

export default function GameInfo() {
  const { t, i18n } = useTranslation()
  const {
    gameBanner,
    gameTitle,
    gameDescription,
    gameDeveloper,
    gamePublisher,
    gameDate,
    gameImages,
    gameCover,
    gameReview,
    gameTags,
  } = useGlobalStore()
  const [selectedImageIndex, setSeletedImageIndex] = useState(0)

  const [isMobile] = useMediaQuery('(max-width: 500px)')

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
      direction={{ base: 'column', md: 'row' }}
      justifyContent='space-between'
      height={{ base: 'auto', md: '445px' }}
      width={{ base: '100%', md: '940px' }}
      position='relative'
      paddingBottom='1px'
      marginBottom={{ base: '16px !important', md: '0 !important' }}
      marginTop={{
        base: '0 !important',
        md: '8px !important',
      }}
      _before={{
        base: {},
        md: {
          content: '""',
          position: 'absolute',
          top: '66px',
          width: '100%',
          height: '100%',
          background: `url(${GameBackgroundShadow})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom',
          zIndex: 0,
        },
      }}
    >
      <Box
        display='flex'
        flexDirection='column'
        alignItems={{ base: 'center', md: 'flex-start' }}
        width='100%'
        zIndex='100'
        gap='6px'
        order={{ base: '2', md: 'unset' }}
      >
        <Image
          src={Object.values(gameImages)[selectedImageIndex].thumbnail}
          width={{ base: '100%', md: '600px' }}
          height={{ base: '215px', md: '337px' }}
          cursor='pointer'
          objectFit='cover'
          paddingInline={{ base: '8px', md: '0' }}
        />
        <Box
          display='flex'
          flexDirection='row'
          alignSelf='flex-start'
          gap='6px'
          width={{ base: '600px', md: 'auto' }}
          padding={{ base: '0 8px', md: '0' }}
        >
          {Object.values(gameImages).map((thumbnail, index) => {
            return (
              thumbnail.thumbnail && (
                <Box
                  key={index}
                  position='relative'
                  display='flex'
                  alignItems='center'
                  justifyContent='center'
                  outline={
                    selectedImageIndex === index ? '2px solid #c6d4df' : ''
                  }
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
                    src={thumbnail.thumbnail}
                    width='115px'
                    height='65px'
                    objectFit='cover'
                  />
                  {thumbnail.isVideo && (
                    <Image
                      src={IconGameHighLightVideo}
                      position='absolute'
                      top='16px'
                      left='42px'
                      width='32px'
                      height='32px'
                    />
                  )}
                </Box>
              )
            )
          })}
        </Box>
        <ImageSlider
          selectNextImage={selectNextImage}
          selectPreviousImage={selectPreviousImage}
          selectedImageIndex={selectedImageIndex}
          imagesLength={Object.keys(gameImages).length}
        />
      </Box>
      <Stack
        zIndex='100'
        width={{ base: '100%', md: '324px' }}
        order={{ base: '1', md: 'unset' }}
        marginTop={{
          base: gameBanner ? '8px !important' : '0 !important',
          md: '8px !important',
        }}
      >
        <Image
          src={gameCover}
          width={{ base: '100%', md: '324px' }}
          height={{ base: '185px', md: '151px' }}
          objectFit='cover'
        ></Image>
        <Box
          padding={{ base: '8px', md: '0' }}
          display='flex'
          flexDirection='column'
        >
          <Heading
            display={{ base: 'block', md: 'none' }}
            fontSize='20px'
            color='white'
            fontFamily='Motiva Sans'
            fontWeight='bold'
            marginBottom='8px'
          >
            {gameTitle}
          </Heading>
          <Text
            overflow='hidden'
            textOverflow='ellipsis'
            color='text'
            paddingBlock={{ base: '16px', md: '0' }}
            paddingRight='16px'
            width={{ base: '100%', md: '324px' }}
            minHeight='36px'
            maxHeight='108px'
            fontSize={{ base: '14px', md: '13px' }}
            lineHeight='18px'
            fontFamily={{ base: 'Motiva Sans', md: 'Arial' }}
            order={{ base: '4', md: 'unset' }}
          >
            {gameDescription}
          </Text>
          <Box
            marginTop='8px !important'
            marginBottom='4px !important'
            order={{ base: '6', md: 'unset' }}
          >
            <Heading
              display={{ base: 'block', md: 'none' }}
              textTransform='uppercase'
              color='textGray'
              fontSize='16px'
              fontWeight='400'
              fontFamily='Motiva Sans'
              marginBottom='5px'
            >
              {t('reviews')}
            </Heading>
            <Box
              display='flex'
              flexDirection={{ base: 'column-reverse', md: 'column' }}
              borderRadius={{ base: '5px', md: '0' }}
              backgroundColor={{ base: '#1B2838', md: 'unset' }}
              padding={{ base: '8px', md: '0' }}
            >
              {gameReview.recent.type != 'none' && (
                <Stack
                  direction={{ base: 'row-reverse', md: 'row' }}
                  alignItems='center'
                  justifyContent={{ base: 'flex-end', md: 'flex-start' }}
                >
                  <Heading
                    textTransform='uppercase'
                    color='textDarkGray'
                    fontSize={{ base: '16px', md: '10px' }}
                    fontWeight='400'
                    textOverflow='ellipsis'
                    lineHeight='16px'
                    fontFamily={{ base: 'Motiva Sans', md: 'Arial' }}
                    minWidth={{ base: 'unset', md: '94px' }}
                  >
                    {isMobile ? t('recentReviewsMobile') : t('recentReviews')}
                  </Heading>
                  <Link>
                    <Heading
                      color={
                        reviewType[
                          gameReview.recent.type as keyof typeof reviewType
                        ].color
                      }
                      fontSize={{ base: '16px', md: '12px' }}
                      fontWeight='400'
                      fontFamily={{ base: 'Motiva Sans', md: 'Arial' }}
                      lineHeight='16px'
                      whiteSpace='nowrap'
                      display='inline-block'
                    >
                      {t(`reviewType.${gameReview.recent.type}`)}
                    </Heading>{' '}
                    <Heading
                      color='textDarkGray'
                      fontSize={{ base: '16px', md: '12px' }}
                      fontWeight='400'
                      fontFamily={{ base: 'Motiva Sans', md: 'Arial' }}
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
              <Stack
                direction={{ base: 'row-reverse', md: 'row' }}
                alignItems='center'
                justifyContent={{ base: 'flex-end', md: 'flex-start' }}
              >
                <Heading
                  textTransform='uppercase'
                  color='textDarkGray'
                  fontSize={{ base: '16px', md: '10px' }}
                  fontWeight='400'
                  fontFamily={{ base: 'Motiva Sans', md: 'Arial' }}
                  textOverflow='ellipsis'
                  lineHeight='16px'
                  minWidth={{ base: 'unset', md: '94px' }}
                >
                  {isMobile ? t('allReviewsMobile') : t('allReviews')}
                </Heading>
                {gameReview.all.type == 'de' ? (
                  <Heading
                    color={
                      reviewType[gameReview.all.type as keyof typeof reviewType]
                        .color
                    }
                    fontSize={{ base: '16px', md: '12px' }}
                    fontWeight='400'
                    fontFamily={{ base: 'Motiva Sans', md: 'Arial' }}
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
                        reviewType[
                          gameReview.all.type as keyof typeof reviewType
                        ].color
                      }
                      fontSize={{ base: '16px', md: '12px' }}
                      fontWeight='400'
                      fontFamily={{ base: 'Motiva Sans', md: 'Arial' }}
                      lineHeight='16px'
                      whiteSpace='nowrap'
                      display='inline-block'
                    >
                      {t(`reviewType.${gameReview.all.type}`)}
                    </Heading>{' '}
                    <Heading
                      color='textDarkGray'
                      fontSize={{ base: '16px', md: '12px' }}
                      fontWeight='400'
                      fontFamily={{ base: 'Motiva Sans', md: 'Arial' }}
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
          </Box>

          <Stack
            direction='row'
            alignItems='center'
            order={{ base: '3', md: 'unset' }}
          >
            <Heading
              textTransform={{ base: 'none', md: 'uppercase' }}
              color={{ base: 'textGray', md: 'textDarkGray' }}
              fontSize={{ base: '16px', md: '10px' }}
              fontWeight='400'
              fontFamily={{ base: 'Motiva Sans', md: 'Arial' }}
              textOverflow='ellipsis'
              marginBlock='4px !important'
              lineHeight='16px'
              whiteSpace='nowrap'
              minWidth={{ base: '110px', md: '94px' }}
            >
              {isMobile ? t('releaseDateMobile') : t('releaseDate')}
            </Heading>
            <Heading
              textTransform={i18n.language == 'en' ? 'capitalize' : 'uppercase'}
              color={{ base: 'textPurchasePrice', md: 'textGray' }}
              fontSize={{ base: '16px', md: '12px' }}
              fontWeight='400'
              fontFamily={{ base: 'Motiva Sans', md: 'Arial' }}
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
          <Box
            marginBlock={{ base: '0 !important', md: '8px !important' }}
            order={{ base: '2', md: 'unset' }}
          >
            <Stack direction='row' alignItems='center' overflow='hidden'>
              <Heading
                textTransform={{ base: 'none', md: 'uppercase' }}
                color={{ base: 'textGray', md: 'textDarkGray' }}
                fontSize={{ base: '16px', md: '10px' }}
                fontWeight='400'
                fontFamily={{ base: 'Motiva Sans', md: 'Arial' }}
                lineHeight='16px'
                minWidth={{ base: '110px', md: '94px' }}
              >
                {isMobile ? t('developerMobile') : t('developer')}
              </Heading>
              <Link
                overflow='hidden'
                whiteSpace='nowrap'
                textOverflow='ellipsis'
                color='primary.100'
                textDecoration='none'
                fontSize={{ base: '16px', md: '12px' }}
                fontFamily={{ base: 'Motiva Sans', md: 'Arial' }}
                _hover={{ color: 'white' }}
              >
                {gameDeveloper}
              </Link>
            </Stack>
            <Stack direction='row' alignItems='center' overflow='hidden'>
              <Heading
                textTransform={{ base: 'none', md: 'uppercase' }}
                color={{ base: 'textGray', md: 'textDarkGray' }}
                fontSize={{ base: '16px', md: '10px' }}
                fontWeight='400'
                fontFamily={{ base: 'Motiva Sans', md: 'Arial' }}
                lineHeight='16px'
                minWidth={{ base: '110px', md: '94px' }}
              >
                {isMobile ? t('publisherMobile') : t('publisher')}
              </Heading>
              <Link
                overflow='hidden'
                whiteSpace='nowrap'
                textOverflow='ellipsis'
                color='primary.100'
                textDecoration='none'
                fontSize={{ base: '16px', md: '12px' }}
                fontFamily={{ base: 'Motiva Sans', md: 'Arial' }}
                _hover={{ color: 'white' }}
              >
                {gamePublisher}
              </Link>
            </Stack>
          </Box>
          <Box
            display='flex'
            flexDirection='column'
            margin='0 !important'
            order={{ base: '5', md: 'unset' }}
          >
            <Heading
              textTransform={{ base: 'uppercase', md: 'none' }}
              color={{ base: 'textGray', md: 'textDarkGray' }}
              fontSize={{ base: '16px', md: '12px' }}
              fontWeight='normal'
              fontFamily={{ base: 'Motiva Sans', md: 'Arial' }}
              lineHeight='19px'
            >
              {isMobile ? t('tagsMobile') : t('tags')}
            </Heading>
            <Box display='flex' margin={{ base: '8px 0 16px 0', md: '0' }}>
              {Array.from(gameTags).map(tag => (
                <Box
                  key={tag}
                  display='inline-block'
                  height={{ base: '26px', md: '19px' }}
                  color='primary.100'
                  borderRadius='2px'
                  background={{ base: '#1B2838', md: 'title.buttonBg' }}
                  fontWeight='400'
                  cursor='pointer'
                  paddingInline='8px'
                  paddingBlock={{ base: '3px', md: '1px' }}
                  marginRight='2px'
                  textAlign='center'
                  fontSize={{ base: '14px', md: '11px' }}
                  fontFamily={{ base: 'Motiva Sans', md: 'Arial' }}
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
                height={{ base: '26px', md: '19px' }}
                fontSize={{ base: '16px', md: '11px' }}
                color='primary.100'
                borderRadius='2px'
                background={{ base: '#1B2838', md: 'title.buttonBg' }}
                fontWeight='400'
                cursor='pointer'
                paddingInline='8px'
                paddingBlock={{ base: '3px', md: '1px' }}
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
        </Box>
      </Stack>
    </Stack>
  )
}
