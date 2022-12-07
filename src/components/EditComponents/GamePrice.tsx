import { Heading, Input } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { useGlobalStore } from '../../store'

export default function GamePrice() {
  const { t } = useTranslation()
  const { gamePrice, setGamePrice } = useGlobalStore()

  return (
    <>
      <Heading fontSize='16px'>{t('gamePrice')}</Heading>
      <Input
        type='text'
        value={gamePrice}
        paddingBlock='16px'
        placeholder={`${t('gamePrice')}...`}
        maxLength={7}
        onChange={e => setGamePrice(Number(e.target.value.replace(/\D/g, '')))}
      />
    </>
  )
}
