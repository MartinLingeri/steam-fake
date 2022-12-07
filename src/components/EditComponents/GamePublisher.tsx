import { Heading, Input } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { useGlobalStore } from '../../store'

export default function GamePublisher() {
  const { t } = useTranslation()
  const { gamePublisher, setGamePublisher } = useGlobalStore()

  return (
    <>
      <Heading fontSize='16px'>{t('gamePublisher')}</Heading>
      <Input
        type='text'
        paddingBlock='16px'
        value={gamePublisher}
        placeholder={`${t('gamePublisher')}...`}
        maxLength={50}
        onChange={e => setGamePublisher(e.target.value)}
      />
    </>
  )
}
