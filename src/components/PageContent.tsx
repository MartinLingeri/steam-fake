import { Box } from '@chakra-ui/react'

import CategoryBlock from './CategoryBlock'
import PurchaseGame from './PurchaseGame'

export default function PageContent() {
  return (
    <Box width='100%'>
      <Box
        float={{ base: 'none', md: 'left' }}
        width={{ base: '100%', md: '616px' }}
        marginTop='32px'
        marginBottom='32px'
        paddingInline={{ base: '8px', md: '0' }}
      >
        <PurchaseGame />
      </Box>
      <Box
        float={{ base: 'none', md: 'right' }}
        width={{ base: '100%', md: '308px' }}
        marginTop='32px'
        marginLeft={{ base: '0', md: '14px' }}
        paddingInline={{ base: '8px', md: '0' }}
      >
        <CategoryBlock />
      </Box>
    </Box>
  )
}
