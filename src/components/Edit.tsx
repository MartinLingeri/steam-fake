import { useState } from 'react'
import {
  Button,
  Checkbox,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  Input,
  Select,
  Stack,
  Textarea,
} from '@chakra-ui/react'

import { gameFeatures } from './gameFeatures'

export default function Edit({
  isOpen,
  onClose,
  btnRef,
}: {
  isOpen: boolean
  onClose: () => void
  btnRef: React.RefObject<HTMLButtonElement>
}) {
  const [multiSelectOptions, setMultiSelectOptions] = useState([
    'Windows',
    'Mac',
    'Linux',
  ])
  const [multiSelectValues, setMultiSelectValues] = useState([])

  return (
    <Drawer
      isOpen={isOpen}
      placement='left'
      onClose={onClose}
      finalFocusRef={btnRef}
      size='md'
    >
      <DrawerOverlay />
      <DrawerContent backgroundColor='nav' color='text'>
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='space-between'
        >
          <DrawerCloseButton
            margin='14px'
            filter='invert(1), contrast(1)'
            size='xl'
          />
          <DrawerHeader marginLeft='0 !important' whiteSpace='nowrap'>
            Make your edits
          </DrawerHeader>
        </Stack>

        <DrawerBody
          overflow='auto'
          display='flex'
          flexDirection='column'
          gap='12px'
        >
          <Heading fontSize='16px'>Game title</Heading>
          <Input type='text' paddingBlock='16px' placeholder='Game title...' />
          <Heading fontSize='16px'>Game backgroun image</Heading>
          <Input
            type='file'
            variant='unstyled'
            borderRadius='0'
            paddingBottom='32px'
          />
          <Heading fontSize='16px'>Game banner (940 x 137) (optional)</Heading>
          <Input
            type='file'
            variant='unstyled'
            borderRadius='0'
            paddingBottom='32px'
          />
          <Heading fontSize='16px'>Game cover (324 x 151)</Heading>
          <Input
            type='file'
            variant='unstyled'
            borderRadius='0'
            paddingBottom='32px'
          />
          <Heading fontSize='16px'>Game description</Heading>
          <Textarea resize='none' placeholder='Game title...' />
          <Heading fontSize='16px'>Game release date</Heading>
          <Input
            type='date'
            variant='flushed'
            sx={{
              '::-webkit-calendar-picker-indicator': {
                filter: 'invert(1)',
              },
            }}
          />
          <Heading fontSize='16px'>Developer</Heading>
          <Input type='text' paddingBlock='16px' placeholder='Developer...' />
          <Heading fontSize='16px'>Publisher</Heading>
          <Input type='text' paddingBlock='16px' placeholder='Publisher...' />
          <Heading fontSize='16px'>Platforms</Heading>
          <Stack direction='row'>
            <Checkbox colorScheme='blue' defaultChecked>
              Windows
            </Checkbox>
            <Checkbox colorScheme='blue'>Mac</Checkbox>
            <Checkbox colorScheme='blue'>Linux</Checkbox>
          </Stack>
          <Heading fontSize='16px'>Price</Heading>
          <Input type='number' paddingBlock='16px' placeholder='Price...' />
          <Heading fontSize='16px'>Features</Heading>
          {Object.keys(gameFeatures).map(key => (
            <Checkbox key={key}>
              {gameFeatures[key as keyof typeof gameFeatures].alt}
            </Checkbox>
          ))}
        </DrawerBody>

        <DrawerFooter>
          <Button colorScheme='blue' onClick={onClose}>
            Done
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
