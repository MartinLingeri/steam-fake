import { Box } from '@chakra-ui/react'

import GameFeature from './GameFeature'

export default function CategoryBlock() {
  return (
    <Box
      padding='16px'
      marginBottom='8px'
      background='linear-gradient(to right, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 100%)'
    >
      <Box display='flex' flexDirection='column' gap='2px'>
        <GameFeature feature='achievements' />
      </Box>
    </Box>
  )
}
