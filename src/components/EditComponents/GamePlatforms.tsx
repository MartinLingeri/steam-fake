import { Checkbox, Heading, Stack } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { useGlobalStore } from '../../store'

export default function GamePlatforms() {
  const { t } = useTranslation()
  const { gamePlatforms, setGamePlatforms } = useGlobalStore()

  return (
    <>
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
    </>
  )
}
