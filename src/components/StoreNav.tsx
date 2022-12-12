import { Box, Heading, Image, Input, Stack } from '@chakra-ui/react'

import { useTranslation } from 'react-i18next'

import SearchIcon from '../assets/search_icon_btn.png'

export default function StoreNav() {
  const { t } = useTranslation()
  const categories = [
    t('nav.yourStore'),
    t('nav.newNoteworthy'),
    t('nav.categories'),
    t('nav.pointsShop'),
    t('nav.news'),
    t('nav.labs'),
  ]

  return (
    <Stack
      direction={{ base: 'column', md: 'row' }}
      fontFamily='storeNav.font'
      background='storeNav.bg'
      width={{ base: '100%', md: '940px' }}
      height={{ base: '100%', md: '34px' }}
      alignItems='center'
      justifyContent='space-between'
      marginTop={{ base: '0', md: '32px' }}
      boxShadow='storeNav.shadow'
      zIndex='100'
    >
      <Stack
        width={{ base: '100%', md: 'unset' }}
        direction={{ base: 'column', md: 'row' }}
        alignItems='center'
        color='text'
        whiteSpace='nowrap'
      >
        {categories.map((category, index) => (
          <Box
            key={index}
            cursor='pointer'
            width='100%'
            height='34px'
            display='flex'
            alignItems='center'
            justifyContent={{ base: 'flex-start', md: 'center' }}
            padding='0 15px'
            margin='0 !important'
            _hover={{ background: 'storeNav.hover' }}
          >
            <Heading
              display='inline-block'
              fontSize='13px'
              fontWeight={{ base: '800', md: '600' }}
              textShadow='0px 2px 3px rgb(0 0 0 / 30%)'
              textAlign={{ base: 'left', md: 'center' }}
            >
              {category}
            </Heading>
          </Box>
        ))}
      </Stack>
      <Stack
        width={{ base: '100%', md: 'unset' }}
        direction='row'
        alignItems='center'
        position='relative'
        marginRight='4px !important'
      >
        <Input
          background={{
            base: 'rgba(96, 133, 155, 0.979)',
            md: 'storeNav.inputBg',
          }}
          variant='unstyled'
          margin={{ base: '4px 8px', md: '0' }}
          borderRadius={{ base: '5px', md: '2px' }}
          paddingInline='14px'
          width={{ base: '100%', md: '202px' }}
          height={{ base: '30px', md: '28px' }}
          fontSize={{ base: '16px', md: '14px' }}
          fontStyle='italic'
          placeholder={t('nav.searchPlaceholder')!}
          boxShadow={{ base: 'inset 0 0 4px #000000', md: 'none' }}
          _placeholder={{
            color: '#0e1c25',
            textTransform: 'lowercase',
            fontStyle: 'italic',
          }}
          _hover={{ border: '1px solid #54a5d4' }}
        ></Input>
        <Image
          src={SearchIcon}
          position='absolute'
          right={{ base: '11px', md: '0' }}
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
