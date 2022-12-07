import { Heading, Input, Select, Stack } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { useGlobalStore } from '../../store'
import { reviewType } from '../reviewType'

export default function GameRecentReviews() {
  const { t } = useTranslation()
  const { gameReview, setGameReview } = useGlobalStore()
  return (
    <>
      <Heading fontSize='16px'>{t('gameRecentReviews')}</Heading>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Select
          width='100%'
          bgColor='white'
          color='black'
          value={gameReview.recent.type}
          onChange={e =>
            setGameReview('recent', {
              type: e.target.value,
              count: gameReview.recent.count,
            })
          }
        >
          {Object.keys(reviewType)
            .slice(0, 9)
            .map(type => (
              <option key={type} value={type}>
                {t(`reviewType.${type}`)}
              </option>
            ))}
          <option value={'none'}>{t('reviewType.none')}</option>
        </Select>
        <Input
          type='text'
          value={gameReview.recent.count}
          maxLength={7}
          disabled={gameReview.recent.type === 'none'}
          onChange={e =>
            setGameReview('recent', {
              type: gameReview.recent.type,
              count: Number(e.target.value.replace(/\D/g, '')),
            })
          }
        />
      </Stack>
    </>
  )
}
