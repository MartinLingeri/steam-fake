import { Heading, Input } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { useGlobalStore } from '../../store'

export default function GameGenre() {
  const { t } = useTranslation()
  const { gameGenre, setGameGenre } = useGlobalStore()

  return (
    <>
      <Heading fontSize='16px'>{t('gameGenre')}</Heading>
      <Input
        type='text'
        value={gameGenre}
        paddingBlock='16px'
        placeholder={`${t('gameGenre')}...`}
        maxLength={25}
        onChange={e => setGameGenre(e.target.value)}
      />
    </>
  )
}
