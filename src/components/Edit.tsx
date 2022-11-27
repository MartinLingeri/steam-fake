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

import { useGlobalStore } from '../store'
import { langs } from '../i18n'
import { useTranslation } from 'react-i18next'

import { gameFeatures as GF } from './gameFeatures'
import { reviewType } from './reviewType'

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
    gameGenre,
    setGameGenre,
    gameDescription,
    setGameDescription,
    gameReview,
    setGameReview,
    gameDeveloper,
    setGameDeveloper,
    gamePublisher,
    setGamePublisher,
    gamePlatforms,
    setGamePlatforms,
    gamePrice,
    setGamePrice,
    gameFeatures,
    addGameFeatures,
    removeGameFeatures,
    gameDate,
    setGameDate,
  } = useGlobalStore()

  return (
    <Drawer
      isOpen={isOpen}
      placement='left'
      onClose={onClose}
      finalFocusRef={btnRef}
      size='md'
      blockScrollOnMount={false}
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
            placeholder={`${t('gameTitle')}...`}
            maxLength={100}
            onChange={e => setGameTitle(e.target.value)}
          />
          <Heading fontSize='16px'>{t('gameGenre')}</Heading>
          <Input
            type='text'
            value={gameGenre}
            paddingBlock='16px'
            placeholder={`${t('gameGenre')}...`}
            maxLength={25}
            onChange={e => setGameGenre(e.target.value)}
          />
          <Heading fontSize='16px'>{t('gameBackgroundImage')}</Heading>
          <Input
            type='file'
            variant='unstyled'
            borderRadius='0'
            paddingBottom='32px'
            accept="image/png, image/jpeg, image/jpg"
          />
          <Heading fontSize='16px'>
            {t('gameBanner', { res: '(940 x 137)' })}
          </Heading>
          <Input
            type='file'
            variant='unstyled'
            borderRadius='0'
            paddingBottom='32px'
            accept="image/png, image/jpeg, image/jpg"
          />
          <Heading fontSize='16px'>
            {t('gameCover', { res: '(324 x 151)' })}
          </Heading>
          <Input
            type='file'
            variant='unstyled'
            borderRadius='0'
            paddingBottom='32px'
            accept="image/png, image/jpeg, image/jpg"
          />
          <Heading fontSize='16px'>{t('gameDescription')}</Heading>
          <Textarea
            resize='none'
            value={gameDescription}
            placeholder={`${t('gameDescription')}...`}
            onChange={e => setGameDescription(e.target.value)}
          />
          <Heading fontSize='16px'>{t('gameRecentReviews')}</Heading>
          <Stack
            direction='row'
            alignItems='center'
            justifyContent='space-between'
          >
            <Select
              width='100%'
              bgColor='white'
              color='black'
              value={gameReview.recent.type}
              onChange={e =>
                setGameReview('recent', {
                  type: e.target.value,
                  count: gameReview.recent.count,
                })
              }
            >
              {Object.keys(reviewType)
                .slice(0, 9)
                .map(type => (
                  <option key={type} value={type}>
                    {t(`reviewType.${type}`)}
                  </option>
                ))}
              <option value={'none'}>{t('reviewType.none')}</option>
            </Select>
            <Input
              type='text'
              value={gameReview.recent.count}
              maxLength={7}
              disabled={gameReview.recent.type === 'none'}
              onChange={e =>
                setGameReview('recent', {
                  type: gameReview.recent.type,
                  count: Number(e.target.value.replace(/\D/g, '')),
                })
              }
            />
          </Stack>
          <Heading fontSize='16px'>{t('gameAllReviews')}</Heading>
          <Stack
            direction='row'
            alignItems='center'
            justifyContent='space-between'
          >
            <Select
              width='100%'
              bgColor='white'
              color='black'
              value={gameReview.all.type}
              onChange={e =>
                setGameReview('all', {
                  type: e.target.value,
                  count: gameReview.all.count,
                })
              }
            >
              {Object.keys(reviewType)
                .slice(0, 10)
                .map(type => (
                  <option key={type} value={type}>
                    {t(`reviewType.${type}`)}
                  </option>
                ))}
            </Select>
            <Input
              type='text'
              value={gameReview.all.count}
              maxLength={7}
              disabled={gameReview.all.type === 'de'}
              onChange={e =>
                setGameReview('all', {
                  type: gameReview.all.type,
                  count: Number(e.target.value.replace(/\D/g, '')),
                })
              }
            />
          </Stack>
          <Heading fontSize='16px'>{t('gameReleaseDate')}</Heading>
          <Input
            type='date'
            variant='flushed'
            sx={{
              '::-webkit-calendar-picker-indicator': {
                filter: 'invert(1)',
              },
            }}
            value={
              gameDate == ''
                ? ''
                : new Date(gameDate).toISOString().slice(0, 10)
            }
            onChange={e => {
              if (e.target.value) {
                setGameDate(new Date(e.target.value.replace(/-/g, '/')))
              } else {
                setGameDate('')
              }
            }}
          />
          <Heading fontSize='16px'>{t('gameDeveloper')}</Heading>
          <Input
            type='text'
            paddingBlock='16px'
            value={gameDeveloper}
            placeholder={`${t('gameDeveloper')}...`}
            maxLength={50}
            onChange={e => setGameDeveloper(e.target.value)}
          />
          <Heading fontSize='16px'>{t('gamePublisher')}</Heading>
          <Input
            type='text'
            paddingBlock='16px'
            value={gamePublisher}
            placeholder={`${t('gamePublisher')}...`}
            maxLength={50}
            onChange={e => setGamePublisher(e.target.value)}
          />
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
            type='text'
            value={gamePrice}
            paddingBlock='16px'
            placeholder={`${t('gamePrice')}...`}
            maxLength={7}
            onChange={e =>
              setGamePrice(Number(e.target.value.replace(/\D/g, '')))
            }
          />
          <Heading fontSize='16px'>{t('gameFeatures')}</Heading>
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
