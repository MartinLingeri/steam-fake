import { Heading, Input } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

export default function GameBanner() {
  const { t } = useTranslation()

  return (
    <>
      <Heading fontSize='16px'>
        {t('gameBanner', { res: '(940 x 137)' })}
      </Heading>
      <Input
        type='file'
        variant='unstyled'
        borderRadius='0'
        paddingBottom='32px'
        accept='image/png, image/jpeg, image/jpg'
        overflow="hidden"
        textOverflow="ellipsis"
      />
    </>
  )
}
