import { Box, Stack } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import StoreNav from './components/StoreNav'
import Title from './components/Title'
import Scrollbar from './components/Scrollbar'
import GameBanner from './components/GameBanner'
import GameInfo from './components/GameInfo'

function App() {
  return (
    <>
      <Navbar />
      <Stack background='primary.600' minH='100vh' alignItems='center'>
        <Stack width='940px' gap='20px'>
          <StoreNav />
          <Title />
          <GameBanner />
          <GameInfo />
        </Stack>
      </Stack>
      <Scrollbar />
    </>
  )
}

export default App
