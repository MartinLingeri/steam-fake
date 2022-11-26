import { gameFeatures } from './components/gameFeatures'
import create from 'zustand'

type State = {
  gameType: string
  setGameType: (gameType: string) => void
  gameTitle: string
  setGameTitle: (title: string) => void
  gameGenre: string
  setGameGenre: (genre: string) => void
  gameBanner: string
  setGameBanner: (banner: string) => void
  gameBackground: string
  setGameBackground: (background: string) => void
  gameCover: string
  setGameCover: (cover: string) => void
  gameImages: Object
  addGameImage: (key: string, image: string) => void
  removeGameImage: (key: string, image: string) => void
  gamePrice: number | undefined
  setGamePrice: (price: number) => void
  gameDescription: string
  setGameDescription: (description: string) => void
  gameReview: {
    recent: { type: string; count: number }
    all: { type: string; count: number }
  }
  setGameReview: (type: string, review: { type: string; count: number }) => void
  gameDate: Date
  setGameDate: (date: Date) => void
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
  gameGenre: 'Action',
  setGameGenre: (genre: string) => set({ gameGenre: genre }),
  gameBanner: 'https://picsum.photos/940/137',
  setGameBanner: (banner: string) => set({ gameBanner: banner }),
  gameBackground: 'https://picsum.photos/1438/810',
  setGameBackground: (background: string) =>
    set({ gameBackground: background }),
  gameCover: 'https://picsum.photos/324/151',
  setGameCover: (cover: string) => set({ gameCover: cover }),
  gameImages: {
    '1': 'https://picsum.photos/600/337',
    '2': 'https://picsum.photos/600/337',
    '3': 'https://picsum.photos/600/337',
    '4': 'https://picsum.photos/600/337',
    '5': 'https://picsum.photos/600/337',
  },
  addGameImage: (key: string, image: string) =>
    set(state => ({
      gameImages: { ...state.gameImages, [key]: image },
    })),
  removeGameImage: (key: string, image: string) =>
    set(state => ({
      gameImages: { ...state.gameImages, [key]: '' },
    })),
  gamePrice: 9999,
  setGamePrice: (price: number) => set({ gamePrice: price }),
  gameDescription:
    'Lorem impsun dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
  setGameDescription: (description: string) =>
    set({ gameDescription: description }),
  gameReview: { recent: { type: 'none', count: 0 }, all: { type: '', count: 0 } },
  setGameReview: (type: string, review: { type: string; count: number }) =>
    set(state => ({
      gameReview: { ...state.gameReview, [type]: review },
    })),
  gameDate: new Date(),
  setGameDate: (date: Date) => set({ gameDate: date }),
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
  gameFeatures: new Set(['achievements']),
  addGameFeatures: (feature: string) =>
    set(state => ({ gameFeatures: state.gameFeatures.add(feature) })),
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
