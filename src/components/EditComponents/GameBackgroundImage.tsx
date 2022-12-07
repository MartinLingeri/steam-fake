import { Heading, Input } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

export default function GameBackgroundImage() {
  const { t } = useTranslation()

  return (
    <>
      <Heading fontSize='16px'>{t('gameBackgroundImage')}</Heading>
      <Input
        type='file'
        variant='unstyled'
        borderRadius='0'
        paddingBottom='32px'
        accept='image/png, image/jpeg, image/jpg'
      />
    </>
  )
}
