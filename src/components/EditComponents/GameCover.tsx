import { useState } from 'react'
import { Button, Heading, Input, Stack } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { useGlobalStore } from '../../store'

import { handleUpload } from './handleUpload'

export default function GameCover() {
  const { t } = useTranslation()
  const { gameCover, setGameCover } = useGlobalStore()
  const [input, setInput] = useState(gameCover)

  return (
    <>
      <Heading fontSize='16px'>
        {t('gameCover', { res: '(324 x 151)' })}
      </Heading>
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
          onClick={() => setGameCover(input)}
        >
          {t('add')}
        </Button>
      </Stack>
    </>
  )
}
