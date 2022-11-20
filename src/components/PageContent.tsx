import { Box } from '@chakra-ui/react'


import CategoryBlock from './CategoryBlock'
import PurchaseGame from './PurchaseGame'

export default function PageContent() {
  return (
    <Box>
      <Box float='left' width='616px' marginTop='32px' marginBottom="32px">
        <PurchaseGame />
      </Box>
      <Box float='right' width='308px' marginTop='32px' marginLeft='14px'>
        <CategoryBlock />
      </Box>
    </Box>
  )
}
