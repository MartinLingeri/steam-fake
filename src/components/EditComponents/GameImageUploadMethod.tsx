import { Heading } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

export default function GameImageUploadMethod() {
  const { t } = useTranslation()

  return (
    <>
      <Heading fontSize='16px'>{t('howToUploadImages')}</Heading>
      <Heading fontSize='14px' color='primary.50'>
        {t('gameUploadMethod')}
      </Heading>
    </>
  )
}
