import { Heading, Input } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { useGlobalStore } from '../../store'

export default function GameCover() {
  const { t } = useTranslation()
  const { gameCover, setGameCover } = useGlobalStore()

  return (
    <>
      <Heading fontSize='16px'>
        {t('gameCover', { res: '(324 x 151)' })}
      </Heading>
      <Input
        type='text'
        value={gameCover}
        paddingBlock='16px'
        onChange={e => setGameCover(e.target.value)}
      />
    </>
  )
}
