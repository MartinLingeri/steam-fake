import { Heading, Input } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { useGlobalStore } from '../../store'

export default function GameTitle() {
  const { t } = useTranslation()
  const { gameTitle, setGameTitle } = useGlobalStore()
  return (
    <>
      <Heading fontSize='16px'>{t('gameTitle')}</Heading>
      <Input
        type='text'
        value={gameTitle}
        paddingBlock='16px'
        placeholder={`${t('gameTitle')}...`}
        maxLength={100}
        onChange={e => setGameTitle(e.target.value)}
      />
    </>
  )
}
