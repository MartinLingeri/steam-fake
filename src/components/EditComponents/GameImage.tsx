import { Button, Checkbox, Heading, Input, Stack } from '@chakra-ui/react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useGlobalStore } from '../../store'

import { handleUpload } from './handleUpload'

export default function GameImage({ index }: { index: number }) {
  const { t } = useTranslation()
  const {
    gameImages,
    addGameImage,
    removeGameImage,
    addAsVideo,
    removeAsVideo,
  } = useGlobalStore()
  const [input, setInput] = useState(
    gameImages[(index + 1) as keyof typeof gameImages].thumbnail,
  )

  return (
    <>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Heading fontSize='16px'>
          {t('gameThumbnail', { num: index + 1 })}
        </Heading>
        <Checkbox
          isChecked={gameImages[(index + 1) as keyof typeof gameImages].isVideo}
          onChange={e => {
            if (e.target.checked) {
              addAsVideo(index + 1)
            } else {
              removeAsVideo(index + 1)
            }
          }}
        >
          {t('asVideo')}
        </Checkbox>
      </Stack>
      <Stack direction='row'>
        <Input
          type='text'
          value={input}
          paddingBlock='16px'
          onChange={e => handleUpload(e.target.value, setInput)}
        />
        {index !== 0 && (
          <Button
            colorScheme='red'
            minWidth='fit-content'
            onClick={() => {
              setInput('')
              removeGameImage(index + 1)
            }}
          >
            {t('remove')}
          </Button>
        )}
        <Button
          colorScheme='blue'
          minWidth='fit-content'
          onClick={() => addGameImage(index + 1, input)}
        >
          {t('add')}
        </Button>
      </Stack>
    </>
  )
}
