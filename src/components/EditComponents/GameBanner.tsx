import { Heading, Input } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { useGlobalStore } from '../../store'

export default function GameBanner() {
  const { t } = useTranslation()
  const { gameBanner, setGameBanner } = useGlobalStore()

  return (
    <>
      <Heading fontSize='16px'>
        {t('gameBanner', { res: '(940 x 137)' })}
      </Heading>
      <Input
        type='text'
        value={gameBanner}
        paddingBlock='16px'
        onChange={e => setGameBanner(e.target.value)}
      />
    </>
  )
}
