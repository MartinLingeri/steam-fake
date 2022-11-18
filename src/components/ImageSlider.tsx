import { Box } from '@chakra-ui/react'

type Props = {
  selectNextImage: () => void
  selectPreviousImage: () => void
  selectedImageIndex: number
  imagesLength: number
}

import IconClusterControls from '../assets/icon_cluster_controls.png'

export default function ImageSlider({
  selectNextImage,
  selectPreviousImage,
  selectedImageIndex,
  imagesLength,
}: Props) {
  return (
    <Box
      display='flex'
      flexDirection='row'
      alignItems='center'
      width='600px'
      height='18px'
    >
      <Box
        role='group'
        display='flex'
        alignItems='center'
        justifyContent='center'
        width='38px'
        height='100%'
        backgroundColor='rgba( 35, 60, 81, 0.4 )'
        cursor='pointer'
        borderRadius='2px'
        _hover={{ backgroundColor: '#54a5d4' }}
        onClick={selectPreviousImage}
      >
        <Box
          backgroundPosition='-18px 0px'
          backgroundRepeat='no-repeat'
          backgroundImage={`url(${IconClusterControls})`}
          width='9px'
          height='7px'
          _groupHover={{ backgroundPosition: '-18px -7px' }}
        ></Box>
      </Box>
      <Box
        display='inline-block'
        width='522px'
        height='18px'
        backgroundColor='rgba( 0, 0, 0, 0.2 )'
      >
        <Box
          width='60px'
          height='18px'
          backgroundColor='rgba( 35, 60, 81, 0.4 )'
          cursor='pointer'
          borderRadius='2px'
          marginInline='1px'
          _hover={{ backgroundColor: '#54a5d4' }}
        ></Box>
      </Box>
      <Box
        role='group'
        display='flex'
        alignItems='center'
        justifyContent='center'
        width='38px'
        height='100%'
        backgroundColor='rgba( 35, 60, 81, 0.4 )'
        cursor='pointer'
        borderRadius='2px'
        _hover={{ backgroundColor: '#54a5d4' }}
        onClick={selectNextImage}
      >
        <Box
          backgroundPosition='-9px 0px'
          backgroundRepeat='no-repeat'
          backgroundImage={`url(${IconClusterControls})`}
          width='9px'
          height='7px'
          _groupHover={{
            backgroundPosition: '-9px -7px',
          }}
        ></Box>
      </Box>
    </Box>
  )
}
