import { Heading, Input, Select, Stack } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { useGlobalStore } from '../../store'
import { reviewType } from '../reviewType'

export default function GameAllReviews() {
  const { t } = useTranslation()
  const { gameReview, setGameReview } = useGlobalStore()

  return (
    <>
      <Heading fontSize='16px'>{t('gameAllReviews')}</Heading>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Select
          width='100%'
          bgColor='white'
          color='black'
          value={gameReview.all.type}
          onChange={e =>
            setGameReview('all', {
              type: e.target.value,
              count: gameReview.all.count,
            })
          }
        >
          {Object.keys(reviewType)
            .slice(0, 10)
            .map(type => (
              <option key={type} value={type}>
                {t(`reviewType.${type}`)}
              </option>
            ))}
        </Select>
        <Input
          type='text'
          value={gameReview.all.count}
          maxLength={7}
          disabled={gameReview.all.type === 'de'}
          onChange={e =>
            setGameReview('all', {
              type: gameReview.all.type,
              count: Number(e.target.value.replace(/\D/g, '')),
            })
          }
        />
      </Stack>
    </>
  )
}
