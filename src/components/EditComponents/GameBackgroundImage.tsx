import { useState } from 'react'
import { Button, Heading, Input, Stack } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { useGlobalStore } from '../../store'

import { handleUpload } from './handleUpload'

export default function GameBackgroundImage() {
  const { t } = useTranslation()
  const { gameBackground, setGameBackground } = useGlobalStore()
  const [input, setInput] = useState(gameBackground)

  return (
    <>
      <Heading fontSize='16px'>{t('gameBackgroundImage')}</Heading>
      <Stack direction='row'>
        <Input
          type='text'
          value={input}
          paddingBlock='16px'
          onChange={e => handleUpload(e.target.value, setInput)}
        />
        <Button
          colorScheme='blue'
          minWidth='fit-content'
          onClick={() => setGameBackground(input)}
        >
          {t('add')}
        </Button>
      </Stack>
    </>
  )
}
