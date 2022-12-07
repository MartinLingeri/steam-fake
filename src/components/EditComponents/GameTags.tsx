import { useState } from 'react'
import { Button, Heading, Input, Stack } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { useGlobalStore } from '../../store'

import CloseIcon from '@mui/icons-material/Close'

export default function GameTags() {
  const { t } = useTranslation()
  const { gameTags, addGameTags, removeGameTags } = useGlobalStore()
  const [tag, setTag] = useState('Action')

  return (
    <>
      <Heading fontSize='16px'>{t('gameTags')}</Heading>
      <Stack direction='row'>
        <Input
          type='text'
          paddingBlock='16px'
          value={tag}
          placeholder={`${t('gameTags')}...`}
          maxLength={30}
          onChange={e => {
            setTag(e.target.value)
          }}
        />
        <Button colorScheme='blue' minWidth="fit-content" onClick={() => addGameTags(tag)}>
          {t('addTag')}
        </Button>
      </Stack>
      {Array.from(gameTags).map(tag => (
        <Button
          rightIcon={<CloseIcon />}
          display='flex'
          alignItems='center'
          justifyContent="space-between"
          width="auto"
          key={tag}
          variant='outline'
          borderColor="blue.500"
          border='2px solid'
          _hover={{borderColor: "red"}}
          onClick={() => removeGameTags(tag)}
        >
          {tag}
        </Button>
      ))}
    </>
  )
}
