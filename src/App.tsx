import { useState } from 'react'
import { Box, Stack } from '@chakra-ui/react'

import './App.css'

import Navbar from './components/Navbar'
import StoreNav from './components/StoreNav'
import Title from './components/Title'
import Scrollbar from './components/Scrollbar'
import GameBanner from './components/GameBanner'
import GameInfo from './components/GameInfo'
import GameFeedbackButtons from './components/GameFeedbackButtons'

import GameBackgroundShadow from './assets/game_page_background_shadow.png'
import PageContent from './components/PageContent'

function App() {
  const [bgImage, setBgImage] = useState('https://picsum.photos/1438/810')

  return (
    <Box overflow='hidden'>
      <Navbar />
      <Stack
        background='primary.600'
        height='100%'
        minH='100vh'
        alignItems='center'
        position='relative'
        boxShadow='0 0 100px 50px #1A2938 inset'
        _before={{
          content: '""',
          position: 'absolute',
          width: '100%',
          height: '800px',
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          filter:
            'sepia(100%) hue-rotate(190deg) saturate(400%) brightness(20%) opacity(20%)',
          boxShadow: 'inset 0px -60px 50px 100px #78bbff',
          zIndex: 0,
        }}
        _after={{
          content: '""',
          position: 'absolute',
          top: '172px;',
          width: '100%',
          height: '100%',
          backgroundImage: `url(${GameBackgroundShadow})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <Stack width='940px' gap='16px'>
          <StoreNav />
          <Title />
          <GameBanner />
          <GameInfo />
          <GameFeedbackButtons />
          <PageContent />
        </Stack>
      </Stack>
      <Scrollbar />
    </Box>
  )
}

export default App
