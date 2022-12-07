import { Heading, Select, Stack } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { langs } from '../../i18n'


export default function GameLanguage() {
  const { t, i18n } = useTranslation()

  return (
    <Stack direction='row' justifyContent='space-between'>
      <Heading display='inline-block' fontSize='24px'>
        {t('language')}:
      </Heading>
      <Select
        bgColor='primary.100'
        color='black'
        width='auto'
        display='inline-block'
        value={i18n.language}
        onChange={e => i18n.changeLanguage(e.target.value)}
      >
        {Object.keys(langs).map(lang => (
          <option key={lang} value={lang}>
            {langs[lang as keyof typeof langs].nativeName}
          </option>
        ))}
      </Select>
    </Stack>
  )
}
