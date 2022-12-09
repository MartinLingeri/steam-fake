import { Heading, Input, Select, Stack } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { useGlobalStore } from '../../store'

import { currencies } from '../currencies'

export default function GamePrice() {
  const { t } = useTranslation()
  const { gamePrice, setGamePrice, gameCurrency, setGameCurrency } =
    useGlobalStore()

  return (
    <>
      <Heading fontSize='16px'>{t('gamePrice')}</Heading>
      <Stack direction='row'>
        <Select
          width='100%'
          bgColor='white'
          color='black'
          value={gameCurrency}
          onChange={e => setGameCurrency(e.target.value)}
        >
          {currencies.map(currency => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </Select>
        <Input
          type='text'
          value={gamePrice}
          paddingBlock='16px'
          placeholder={`${t('gamePrice')}...`}
          maxLength={7}
          onChange={e =>
            setGamePrice(Number(e.target.value.replace(/\D/g, '')))
          }
        />
      </Stack>
    </>
  )
}
