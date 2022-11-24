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

import { gameFeatures as GF } from './gameFeatures'

import { useGlobalStore } from '../store'
import { langs } from '../i18n'
import { useTranslation } from 'react-i18next'

export default function Edit({
  isOpen,
  onClose,
  btnRef,
}: {
  isOpen: boolean
  onClose: () => void
  btnRef: React.RefObject<HTMLButtonElement>
}) {
  const { t, i18n } = useTranslation()
  const {
    gameTitle,
    setGameTitle,
    gameDescription,
    setGameDescription,
    gameDevelopers,
    addGameDevelopers,
    removeGameDevelopers,
    gamePublishers,
    addGamePublishers,
    removeGamePublishers,
    gamePlatforms,
    setGamePlatforms,
    gamePrice,
    setGamePrice,
    gameFeatures,
    addGameFeatures,
    removeGameFeatures,
  } = useGlobalStore()
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
            {t('editTitle')}
          </DrawerHeader>
        </Stack>

        <DrawerBody
          overflow='auto'
          display='flex'
          flexDirection='column'
          gap='12px'
        >
          <Stack direction='row' justifyContent='space-between'>
            <Heading display='inline-block' fontSize='24px'>
              {t('language')}:
            </Heading>
            <Select
              bgColor='primary.100'
              color='black'
              width='auto'
              display='inline-block'
              value={i18n.language}
              onChange={e => i18n.changeLanguage(e.target.value)}
            >
              {Object.keys(langs).map(lang => (
                <option key={lang} value={lang}>
                  {langs[lang as keyof typeof langs].nativeName}
                </option>
              ))}
            </Select>
          </Stack>
          <Heading fontSize='16px'>{t('gameTitle')}</Heading>
          <Input
            type='text'
            value={gameTitle}
            paddingBlock='16px'
            placeholder='Game title...'
            onChange={e => setGameTitle(e.target.value)}
          />
          <Heading fontSize='16px'>{t('gameBackgroundImage')}</Heading>
          <Input
            type='file'
            variant='unstyled'
            borderRadius='0'
            paddingBottom='32px'
          />
          <Heading fontSize='16px'>
            {t('gameBanner', { res: '(940 x 137)' })}
          </Heading>
          <Input
            type='file'
            variant='unstyled'
            borderRadius='0'
            paddingBottom='32px'
          />
          <Heading fontSize='16px'>
            {t('gameCover', { res: '(324 x 151)' })}
          </Heading>
          <Input
            type='file'
            variant='unstyled'
            borderRadius='0'
            paddingBottom='32px'
          />
          <Heading fontSize='16px'>{t('gameDescription')}</Heading>
          <Textarea
            resize='none'
            value={gameDescription}
            placeholder='Game title...'
            onChange={e => setGameDescription(e.target.value)}
          />
          <Heading fontSize='16px'>{t('gameReleaseDate')}</Heading>
          <Input
            type='date'
            variant='flushed'
            sx={{
              '::-webkit-calendar-picker-indicator': {
                filter: 'invert(1)',
              },
            }}
          />
          <Heading fontSize='16px'>{t('gameDeveloper')}</Heading>
          <Input type='text' paddingBlock='16px' placeholder='Developer...' />
          <Heading fontSize='16px'>{t('gamePublisher')}</Heading>
          <Input type='text' paddingBlock='16px' placeholder='Publisher...' />
          <Heading fontSize='16px'>{t('gamePlatforms')}</Heading>
          <Stack direction='row'>
            <Checkbox
              colorScheme='blue'
              isChecked={gamePlatforms[0]}
              onChange={e =>
                setGamePlatforms([
                  e.target.checked,
                  gamePlatforms[1],
                  gamePlatforms[2],
                ])
              }
              defaultChecked
            >
              Windows
            </Checkbox>
            <Checkbox
              colorScheme='blue'
              isChecked={gamePlatforms[1]}
              onChange={e =>
                setGamePlatforms([
                  gamePlatforms[0],
                  e.target.checked,
                  gamePlatforms[2],
                ])
              }
            >
              Mac
            </Checkbox>
            <Checkbox
              colorScheme='blue'
              isChecked={gamePlatforms[2]}
              onChange={e =>
                setGamePlatforms([
                  gamePlatforms[0],
                  gamePlatforms[1],
                  e.target.checked,
                ])
              }
            >
              Linux
            </Checkbox>
          </Stack>
          <Heading fontSize='16px'>{t('gamePrice')}</Heading>
          <Input
            type='number'
            value={gamePrice}
            paddingBlock='16px'
            placeholder='Price...'
            onChange={e => setGamePrice(Number(e.target.value))}
          />
          <Heading fontSize='16px'>Features</Heading>
          {Object.keys(GF).map(key => (
            <Checkbox
              key={key}
              isChecked={gameFeatures.has(key)}
              onChange={e => {
                if (e.target.checked) {
                  addGameFeatures(key)
                } else {
                  removeGameFeatures(key)
                }
              }}
            >
              {t(`features.${key}`)}
            </Checkbox>
          ))}
        </DrawerBody>

        <DrawerFooter>
          <Button colorScheme='blue' onClick={onClose}>
            {t('done')}
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
