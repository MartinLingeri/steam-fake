import IcoAchievements from '../assets/gameFeaturesIcons/ico_achievements.png'
import IcoCart from '../assets/gameFeaturesIcons/ico_cart.png'
import IcoCards from '../assets/gameFeaturesIcons/ico_cards.png'
import IcoCloud from '../assets/gameFeaturesIcons/ico_cloud.png'
import IcoController from '../assets/gameFeaturesIcons/ico_controller.png'
import IcoCoop from '../assets/gameFeaturesIcons/ico_coop.png'
import IcoRemotePlay from '../assets/gameFeaturesIcons/ico_remote_play.png'
import IcoSinglePlayer from '../assets/gameFeaturesIcons/ico_singlePlayer.png'
import IcoMultiPlayer from '../assets/gameFeaturesIcons/ico_multiPlayer.png'

export const gameFeatures = {
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
