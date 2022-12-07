import { Heading, Textarea } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { useGlobalStore } from '../../store'

export default function GameDescription() {
  const { t } = useTranslation()
  const { gameDescription, setGameDescription } = useGlobalStore()

  return (
    <>
      <Heading fontSize='16px'>{t('gameDescription')}</Heading>
      <Textarea
        resize='none'
        value={gameDescription}
        placeholder={`${t('gameDescription')}...`}
        onChange={e => setGameDescription(e.target.value)}
      />
    </>
  )
}
