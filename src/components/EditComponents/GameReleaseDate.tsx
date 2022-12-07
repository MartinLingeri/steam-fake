import { Heading, Input } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { useGlobalStore } from '../../store'

export default function GameReleaseDate() {
  const { t } = useTranslation()
  const { gameDate, setGameDate } = useGlobalStore()

  return (
    <>
      <Heading fontSize='16px'>{t('gameReleaseDate')}</Heading>
      <Input
        type='date'
        variant='flushed'
        sx={{
          '::-webkit-calendar-picker-indicator': {
            filter: 'invert(1)',
          },
        }}
        value={
          gameDate == '' ? '' : new Date(gameDate).toISOString().slice(0, 10)
        }
        onChange={e => {
          if (e.target.value) {
            setGameDate(new Date(e.target.value.replace(/-/g, '/')))
          } else {
            setGameDate('')
          }
        }}
      />
    </>
  )
}
