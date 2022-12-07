import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Stack,
} from '@chakra-ui/react'

import { useTranslation } from 'react-i18next'

import GameLanguage from './EditComponents/GameLanguage'
import GameTitle from './EditComponents/GameTitle'
import GameGenre from './EditComponents/GameGenre'
import GameBackgroundImage from './EditComponents/GameBackgroundImage'
import GameBanner from './EditComponents/GameBanner'
import GameCover from './EditComponents/GameCover'
import GameDescription from './EditComponents/GameDescription'
import GameRecentReviews from './EditComponents/GameRecentReviews'
import GameAllReviews from './EditComponents/GameAllReviews'
import GameReleaseDate from './EditComponents/GameReleaseDate'
import GameDeveloper from './EditComponents/GameDeveloper'
import GamePublisher from './EditComponents/GamePublisher'
import GameTags from './EditComponents/GameTags'
import GamePlatforms from './EditComponents/GamePlatforms'
import GamePrice from './EditComponents/GamePrice'
import GameFeatures from './EditComponents/GameFeatures'

export default function Edit({
  isOpen,
  onClose,
  btnRef,
}: {
  isOpen: boolean
  onClose: () => void
  btnRef: React.RefObject<HTMLButtonElement>
}) {
  const { t } = useTranslation()

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
          <GameLanguage />
          <GameTitle />
          <GameGenre />
          <GameBackgroundImage />
          <GameBanner />
          <GameCover />
          <GameDescription />
          <GameRecentReviews />
          <GameAllReviews />
          <GameReleaseDate />
          <GameDeveloper />
          <GamePublisher />
          <GameTags />
          <GamePlatforms />
          <GamePrice />
          <GameFeatures />
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
