import { Checkbox, Heading } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { useGlobalStore } from '../../store'
import { gameFeatures as GF } from '../gameFeatures'

export default function GameFeatures() {
  const { t } = useTranslation()
  const { gameFeatures, addGameFeatures, removeGameFeatures } = useGlobalStore()

  return (
    <>
      <Heading fontSize='16px'>{t('gameFeatures')}</Heading>
      {Object.keys(GF).map(key => (
        <Checkbox
          key={key}
          isChecked={gameFeatures.has(key)}
          onChange={e => {
            if (e.target.checked) {
              addGameFeatures(key)
            } else {
              removeGameFeatures(key)
            }
          }}
        >
          {t(`features.${key}`)}
        </Checkbox>
      ))}
    </>
  )
}
