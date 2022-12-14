import { Box, Button, Stack } from '@chakra-ui/react'

import { useTranslation } from 'react-i18next'

import Btn_arrow_down_padded from '../assets/btn_arrow_down_padded.png'
import ArrowIcon from '../assets/icons_16.png'
import ReportIcon from '../assets/icon_report.svg'
import ShareIcon from '../assets/icon_share_android.svg'

export default function GameFeedbackButtons() {
  const { t } = useTranslation()
  return (
    <Stack
      direction={{ base: 'column', md: 'row' }}
      alignItems='center'
      justifyContent='space-between'
      width='100%'
      zIndex='100'
      padding={{ base: '0 8px', md: '0 16px' }}
      margin='0 !important'
    >
      <Box
        display='flex'
        gap='2px'
        flexDirection={{ base: 'column', md: 'row' }}
        alignItems='center'
        width='100%'
      >
        <Button
          padding='16px 24px'
          width={{ base: '100%', md: 'auto' }}
          height='30px'
          fontSize='15px'
          lineHeight='30px'
          borderRadius='2px'
          color='textBlue'
          background='title.buttonBg'
          fontWeight='400'
          fontFamily={{ base: 'Motiva Sans', md: 'Arial' }}
          _hover={{
            background: 'lightHover',
            color: 'text',
          }}
        >
          {t('feedback.addToWishlist')}
        </Button>
        <Box width='100%' display='flex' alignItems='center' gap='2px'>
          <Box
            flex='1'
            display={{ base: 'inline-flex', md: 'none' }}
            flexDirection='row'
            alignItems='center'
            justifyContent='center'
            padding='16px 14px'
            height='32px'
            borderRadius='2px'
            background='title.buttonBg'
            cursor='pointer'
            _hover={{ backgroundColor: 'primary.600' }}
            _before={{
              content: '""',
              backgroundImage: `url(${ShareIcon})`,
              backgroundRepeat: 'no-repeat',
              width: '20px',
              height: '14px',
            }}
          ></Box>
          <Box
            flex='1'
            display={{ base: 'inline-flex', md: 'none' }}
            flexDirection='row'
            alignItems='center'
            justifyContent='center'
            padding='16px 14px'
            height='32px'
            borderRadius='2px'
            background='title.buttonBg'
            cursor='pointer'
            _hover={{ backgroundColor: 'primary.600' }}
            _before={{
              content: '""',
              backgroundImage: `url(${ReportIcon})`,
              backgroundRepeat: 'no-repeat',
              width: '20px',
              height: '14px',
            }}
          ></Box>
          <Button
            flex={{ base: '1', md: 'unset' }}
            padding='16px'
            height='30px'
            fontSize='15px'
            lineHeight='30px'
            borderRadius='2px'
            color='textBlue'
            background='title.buttonBg'
            fontWeight='400'
            fontFamily={{ base: 'Motiva Sans', md: 'Arial' }}
            _hover={{
              background: 'lightHover',
              color: 'text',
            }}
          >
            {t('feedback.follow')}
          </Button>
          <Button
            flex={{ base: '1', md: 'unset' }}
            padding='16px'
            height='30px'
            fontSize='15px'
            lineHeight='30px'
            borderRadius='2px'
            color='textBlue'
            background='title.buttonBg'
            fontWeight='400'
            fontFamily={{ base: 'Motiva Sans', md: 'Arial' }}
            _hover={{
              background: 'lightHover',
              color: 'text',
            }}
          >
            {t('feedback.ignore')}
          </Button>
          <Box
            display='inline-flex'
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
      </Box>
      <Button
        display={{ base: 'none', md: 'flex' }}
        flexDirection='row'
        alignItems='center'
        padding='16px'
        minWidth='fit-content'
        height='30px'
        fontSize='15px'
        lineHeight='30px'
        borderRadius='2px'
        color='textBlue'
        background='title.buttonBg'
        fontWeight='400'
        fontFamily={{ base: 'Motiva Sans', md: 'Arial' }}
        _hover={{
          background: 'lightHover',
          color: 'text',
        }}
      >
        <Box>{t('feedback.seeYourList')}</Box>
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
