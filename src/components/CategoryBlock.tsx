import { Box, Heading } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

import { useGlobalStore } from '../store'
import GameFeature from './GameFeature'

export default function CategoryBlock() {
  const { gameFeatures } = useGlobalStore()
  const { t } = useTranslation()

  return (
    <Box
      padding={{ base: '0', md: '16px' }}
      marginBottom='8px'
      background={{
        base: 'none',
        md: 'linear-gradient(to right, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 100%)',
      }}
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
        {t('featuresMobile')}
      </Heading>
      <Box display='flex' flexDirection='column' gap='2px'>
        {Array.from(gameFeatures).map(key => (
          <GameFeature key={key} feature={key} />
        ))}
      </Box>
    </Box>
  )
}
