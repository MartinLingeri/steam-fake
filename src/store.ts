import { gameFeatures } from './components/gameFeatures'
import create from 'zustand'

type State = {
  gameType: string
  setGameType: (gameType: string) => void
  gameTitle: string
  setGameTitle: (title: string) => void
  gameBanner: string
  setGameBanner: (banner: string) => void
  gameCover: string
  setGameCover: (cover: string) => void
  gameImages: Array<string>
  addGameImage: (image: string) => void
  removeGameImage: (image: string) => void
  gamePrice: number | undefined
  setGamePrice: (price: number) => void
  gameDescription: string
  setGameDescription: (description: string) => void
  gameDate: number | undefined
  setGameDate: (date: number) => void
  gameDevelopers: Array<string>
  addGameDevelopers: (developer: string) => void
  removeGameDevelopers: (developer: string) => void
  gamePublishers: Array<string>
  addGamePublishers: (publisher: string) => void
  removeGamePublishers: (publisher: string) => void
  gamePlatforms: Array<boolean>
  setGamePlatforms: (platform: Array<boolean>) => void
  gameFeatures: Set<string>
  addGameFeatures: (feature: string) => void
  removeGameFeatures: (feature: string) => void
  gameTags: Array<string>
  addGameTags: (tag: string) => void
  removeGameTags: (tag: string) => void
}

export const useGlobalStore = create<State>(set => ({
  gameType: '',
  setGameType: (type: string) => set({ gameType: type }),
  gameTitle: 'Lorem ipsum',
  setGameTitle: (title: string) => set({ gameTitle: title }),
  gameBanner: '',
  setGameBanner: (banner: string) => set({ gameBanner: banner }),
  gameCover: '',
  setGameCover: (cover: string) => set({ gameCover: cover }),
  gameImages: [],
  addGameImage: (image: string) =>
    set(state => ({ gameImages: [...state.gameImages, image] })),
  removeGameImage: (image: string) =>
    set(state => ({
      gameImages: state.gameImages.filter(i => i !== image),
    })),
  gamePrice: 9999,
  setGamePrice: (price: number) => set({ gamePrice: price }),
  gameDescription:
    'Lorem impsun dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
  setGameDescription: (description: string) =>
    set({ gameDescription: description }),
  gameDate: Date.now(),
  setGameDate: (date: number) => set({ gameDate: date }),
  gameDevelopers: ['Arkane Studios', 'Bethesda Softworks'],
  addGameDevelopers: (developer: string) =>
    set(state => ({ gameDevelopers: [...state.gameDevelopers, developer] })),
  removeGameDevelopers: (developer: string) =>
    set(state => ({
      gameDevelopers: state.gameDevelopers.filter(d => d !== developer),
    })),
  gamePublishers: ['Bethesda Softworks'],
  addGamePublishers: (publisher: string) =>
    set(state => ({ gamePublishers: [...state.gamePublishers, publisher] })),
  removeGamePublishers: (publisher: string) =>
    set(state => ({
      gamePublishers: state.gamePublishers.filter(p => p !== publisher),
    })),
  gamePlatforms: [true, false, false],
  setGamePlatforms: (platform: Array<boolean>) =>
    set({ gamePlatforms: platform }),
  gameFeatures: new Set(),
  addGameFeatures: (feature: string) =>
    set(state => ({ gameFeatures: { ...state.gameFeatures, feature } })),
  removeGameFeatures: (feature: string) =>
    set(state => {
      const newFeatures = new Set(state.gameFeatures)
      newFeatures.delete(feature)
      return { gameFeatures: newFeatures }
    }),
  gameTags: [],
  addGameTags: (tag: string) =>
    set(state => ({ gameTags: [...state.gameTags, tag] })),
  removeGameTags: (tag: string) =>
    set(state => ({ gameTags: state.gameTags.filter(t => t !== tag) })),
}))
