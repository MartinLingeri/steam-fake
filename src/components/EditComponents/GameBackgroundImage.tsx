import { Heading, Input } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { useGlobalStore } from '../../store'

export default function GameBackgroundImage() {
  const { t } = useTranslation()
  const { gameBackground, setGameBackground } = useGlobalStore()

  return (
    <>
      <Heading fontSize='16px'>{t('gameBackgroundImage')}</Heading>
      <Input
        type='text'
        value={gameBackground}
        paddingBlock='16px'
        onChange={e => setGameBackground(e.target.value)}
      />
    </>
  )
}
