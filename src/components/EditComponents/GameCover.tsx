import { Heading, Input } from '@chakra-ui/react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useGlobalStore } from '../../store'

export default function GameCover() {
  const { t } = useTranslation()
  const { setGameCover } = useGlobalStore()
  const [uploadedFileName, setUploadedFileName] = useState('')

  function uploadImage(file: File) {
    if (file) {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('tags', `codeinfuse, medium, gist`)
      formData.append('upload_preset', 'steam-fake')
      formData.append('api_key', '835596572892454')
      formData.append('timestamp', (Date.now() / 1000).toString())
      fetch('https://api.cloudinary.com/v1_1/ddutbfjpc/image/upload', {
        method: 'POST',
        body: formData,
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
        },
      })
        .then(res => res.json())
        .then(data => {
          setGameCover(data.url)
        })
        .catch(err => console.log(err))
    }
  }

  return (
    <>
      <Heading fontSize='16px'>
        {t('gameCover', { res: '(324 x 151)' })}
      </Heading>
      <Input
        type='file'
        variant='unstyled'
        borderRadius='0'
        paddingBottom='32px'
        accept='image/png, image/jpeg, image/jpg'
        overflow='hidden'
        textOverflow='ellipsis'
        onChange={e => uploadImage(e.target.files![0])}
      />
    </>
  )
}
