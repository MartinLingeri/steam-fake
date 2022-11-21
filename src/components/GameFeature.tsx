import { Box } from '@chakra-ui/react'

import { gameFeatures } from './gameFeatures'

export default function GameFeature({ feature }: { feature: string }) {
  return (
    <Box
      role='group'
      display='flex'
      flexDirection='row'
      width='276px'
      height='26px'
      cursor='pointer'
      zIndex='100'
    >
      <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
        backgroundColor='#00000033'
        width='38px'
      >
        <img
          width='26px'
          height='16px'
          src={gameFeatures[feature as keyof typeof gameFeatures].icon}
        />
      </Box>
      <Box
        display='flex'
        alignItems='center'
        color='primary.100'
        fontSize='12px'
        width='100%'
        height='100%'
        padding='6px 8px'
        backgroundColor='rgba( 103, 193, 245, 0.1 )'
        _groupHover={{ backgroundColor: 'primary.50', color: 'white' }}
      >
        {gameFeatures[feature as keyof typeof gameFeatures].alt}
      </Box>
    </Box>
  )
}
