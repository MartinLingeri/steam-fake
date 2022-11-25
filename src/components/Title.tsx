import { Box, Button, Heading, Stack } from '@chakra-ui/react'

import { useTranslation } from 'react-i18next'
import { useGlobalStore } from '../store'

export default function Title() {
  const { t } = useTranslation()
  const { gameTitle, gameGenre } = useGlobalStore()
  const breadcrumbs = [t('allGames'), gameGenre, gameTitle]

  return (
    <Stack position='relative' zIndex='100'>
      <Stack direction='row'>
        {breadcrumbs.map((breadcrumb, index) => (
          <Stack
            direction='row'
            gap='0'
            marginLeft={index === 0 ? '0' : '4px !important'}
            key={index}
          >
            <Heading
              color='textGray'
              textOverflow='ellipsis'
              overflow='hidden'
              whiteSpace='nowrap'
              fontSize='12px'
              fontWeight='400'
              cursor='pointer'
              _hover={{ color: 'white' }}
            >
              {breadcrumb}
            </Heading>
            {index < breadcrumbs.length - 1 && (
              <Heading
                color='textGray'
                fontSize='12px'
                fontWeight='400'
                opacity='0.6'
                marginLeft='4px !important'
              >
                {' '}
                {' >'}
              </Heading>
            )}
          </Stack>
        ))}
      </Stack>
      <Stack
        direction='row'
        alignItems='center'
        justifyContent='space-between'
        marginBlock='2px !important'
      >
        <Heading
          color='white'
          fontSize='26px'
          fontFamily='Motiva Sans'
          fontWeight='normal'
          lineHeight='32px'
          textOverflow='ellipsis'
          overflow='hidden'
          whiteSpace='nowrap'
        >
          {gameTitle}
        </Heading>
        <Button
          width='auto'
          minWidth='140px'
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
          {t('communityHub')}
        </Button>
      </Stack>
    </Stack>
  )
}
