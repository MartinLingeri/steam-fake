import { Heading, Input } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { useGlobalStore } from '../../store'

export default function GameDeveloper() {
  const { t } = useTranslation()
  const { gameDeveloper, setGameDeveloper } = useGlobalStore()

  return (
    <>
      <Heading fontSize='16px'>{t('gameDeveloper')}</Heading>
      <Input
        type='text'
        paddingBlock='16px'
        value={gameDeveloper}
        placeholder={`${t('gameDeveloper')}...`}
        maxLength={50}
        onChange={e => setGameDeveloper(e.target.value)}
      />
    </>
  )
}
