import { useState } from 'react'
import { Button, Heading, Input, Stack } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { useGlobalStore } from '../../store'

import { handleUpload } from './handleUpload'

export default function GameBanner() {
  const { t } = useTranslation()
  const { gameBanner, setGameBanner, removeGameBanner } = useGlobalStore()
  const [input, setInput] = useState(gameBanner)

  return (
    <>
      <Heading fontSize='16px'>
        {t('gameBanner', { res: '(940 x 137)' })}
      </Heading>
      <Stack direction='row'>
        <Input
          type='text'
          value={input}
          paddingBlock='16px'
          onChange={e => handleUpload(e.target.value, setInput)}
        />
        <Button
          colorScheme='red'
          minWidth='fit-content'
          onClick={() => {
            setInput('')
            removeGameBanner()
          }}
        >
          {t('remove')}
        </Button>
        <Button
          colorScheme='blue'
          minWidth='fit-content'
          onClick={() => setGameBanner(input)}
        >
          {t('add')}
        </Button>
      </Stack>
    </>
  )
}
