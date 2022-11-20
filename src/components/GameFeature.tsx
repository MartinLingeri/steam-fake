import { Box } from '@chakra-ui/react'

import IcoAchievements from '../assets/gameFeaturesIcons/ico_achievements.png'
import IcoCart from '../assets/gameFeaturesIcons/ico_cart.png'
import IcoCards from '../assets/gameFeaturesIcons/ico_cards.png'
import IcoCloud from '../assets/gameFeaturesIcons/ico_cloud.png'
import IcoController from '../assets/gameFeaturesIcons/ico_controller.png'
import IcoCoop from '../assets/gameFeaturesIcons/ico_coop.png'
import IcoRemotePlay from '../assets/gameFeaturesIcons/ico_remote_play.png'
import IcoSinglePlayer from '../assets/gameFeaturesIcons/ico_singlePlayer.png'
import IcoMultiPlayer from '../assets/gameFeaturesIcons/ico_multiPlayer.png'

export default function GameFeature({ feature }: { feature: string }) {
  const gameFeatures = {
    achievements: { icon: IcoAchievements, alt: 'Logros de Steam' },
    cart: { icon: IcoCart, alt: 'Compras dentro de la aplicacion' },
    cards: { icon: IcoCards, alt: 'Cromos de Steam' },
    cloud: { icon: IcoCloud, alt: 'Steam Cloud' },
    controller: { icon: IcoController, alt: 'Compat. total con mando' },
    coopOnline: { icon: IcoCoop, alt: 'Cooperativo en Linea' },
    coopLan: { icon: IcoCoop, alt: 'Cooperativo en LAN' },
    coopScreenSplit: { icon: IcoCoop, alt: 'Coop a pantalla partida' },
    remotePlay: { icon: IcoRemotePlay, alt: 'Jugar en cualquier lugar' },
    singlePlayer: { icon: IcoSinglePlayer, alt: 'Juego para un jugador' },
    multiPlayer: { icon: IcoMultiPlayer, alt: 'Juego para varios jugadores' },
  }

  return (
    <Box display='flex' flexDirection='row' width='276px' height='26px'>
      <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
        backgroundColor='#00000033'
        width="38px"
      >
        <img
          width='26px'
          height='16px'
          src={gameFeatures[feature as keyof typeof gameFeatures].icon}
        />
      </Box>
      <Box
        display='flex'
        alignItems='center'
        color="primary.100"
        fontSize="12px"
        width='100%'
        height='100%'
        padding='6px 8px'
        backgroundColor='rgba( 103, 193, 245, 0.1 )'
      >
        {gameFeatures[feature as keyof typeof gameFeatures].alt}
      </Box>
    </Box>
  )
}
