import { Image } from '@chakra-ui/react'

import { useGlobalStore } from '../store'

export default function GameBanner() {
  const { gameBanner } = useGlobalStore()
  return (
    <Image
      src={gameBanner}
      objectFit='cover'
      cursor='pointer'
      width={{ base: '97.5%', md: '940px' }}
      height='137px'
      margin='-4px 0 !important'
      transform='scale(1.00)'
      filter='saturate(0.85)'
      transition='transform.21s ease-in-out, filter .21s ease-in-out'
      zIndex='100'
      _hover={{
        filter: 'saturate(1.0)',
        transform: 'scale(1.03)',
      }}
    />
  )
}
