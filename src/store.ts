import create from 'zustand'
import { persist } from 'zustand/middleware'

type State = {
  gameType: string
  setGameType: (gameType: string) => void
  gameTitle: string
  setGameTitle: (title: string) => void
  gameGenre: string
  setGameGenre: (genre: string) => void
  gameBanner: string
  setGameBanner: (banner: string) => void
  removeGameBanner: () => void
  gameBackground: string
  setGameBackground: (background: string) => void
  gameCover: string
  setGameCover: (cover: string) => void
  gameImages: {
    1: { thumbnail: string; isVideo: true }
    2: { thumbnail: string; isVideo: false }
    3: { thumbnail: string; isVideo: false }
    4: { thumbnail: string; isVideo: false }
    5: { thumbnail: string; isVideo: false }
  }
  addGameImage: (key: number, image: string) => void
  removeGameImage: (key: number) => void
  addAsVideo: (key: number) => void
  removeAsVideo: (key: number) => void
  gameCurrency: string
  setGameCurrency: (currency: string) => void
  gamePrice: number | undefined
  setGamePrice: (price: number) => void
  gameDescription: string
  setGameDescription: (description: string) => void
  gameReview: {
    recent: { type: string; count: number }
    all: { type: string; count: number }
  }
  setGameReview: (type: string, review: { type: string; count: number }) => void
  gameDate: Date | string
  setGameDate: (date: Date | string) => void
  gameDeveloper: string
  setGameDeveloper: (developer: string) => void
  gamePublisher: string
  setGamePublisher: (publisher: string) => void
  gamePlatforms: Array<boolean>
  setGamePlatforms: (platform: Array<boolean>) => void
  gameFeatures: Set<string>
  addGameFeatures: (feature: string) => void
  removeGameFeatures: (feature: string) => void
  gameTags: Set<string>
  addGameTags: (tag: string) => void
  removeGameTags: (tag: string) => void
}

export const useGlobalStore = create(
  persist<State>(
    set => ({
      gameType: '',
      setGameType: (type: string) => set({ gameType: type }),
      gameTitle: 'Lorem ipsum',
      setGameTitle: (title: string) => set({ gameTitle: title }),
      gameGenre: 'Action',
      setGameGenre: (genre: string) => set({ gameGenre: genre }),
      gameBanner: 'https://picsum.photos/940/137',
      setGameBanner: (banner: string) => set({ gameBanner: banner }),
      removeGameBanner: () => set({ gameBanner: '' }),
      gameBackground: 'https://picsum.photos/1438/810',
      setGameBackground: (background: string) =>
        set({ gameBackground: background }),
      gameCover: 'https://picsum.photos/324/151',
      setGameCover: (cover: string) => set({ gameCover: cover }),
      gameImages: {
        1: { thumbnail: 'https://picsum.photos/600/337', isVideo: true },
        2: { thumbnail: '', isVideo: false },
        3: { thumbnail: '', isVideo: false },
        4: { thumbnail: '', isVideo: false },
        5: { thumbnail: '', isVideo: false },
      },
      addGameImage: (key: number, image: string) =>
        set(state => ({
          gameImages: {
            ...state.gameImages,
            [key]: {
              thumbnail: image,
              isVideo:
                state.gameImages[key as keyof typeof state.gameImages].isVideo,
            },
          },
        })),
      removeGameImage: (key: number) =>
        set(state => ({
          gameImages: {
            ...state.gameImages,
            [key]: { thumbnail: '', isVideo: false },
          },
        })),
      addAsVideo: (key: number) =>
        set(state => ({
          gameImages: {
            ...state.gameImages,
            [key]: {
              thumbnail:
                state.gameImages[key as keyof typeof state.gameImages]
                  .thumbnail,
              isVideo: true,
            },
          },
        })),
      removeAsVideo: (key: number) =>
        set(state => ({
          gameImages: {
            ...state.gameImages,
            [key]: {
              thumbnail:
                state.gameImages[key as keyof typeof state.gameImages]
                  .thumbnail,
              isVideo: false,
            },
          },
        })),
      gameCurrency: 'USD',
      setGameCurrency: (currency: string) => set({ gameCurrency: currency }),
      gamePrice: 9999,
      setGamePrice: (price: number) => set({ gamePrice: price }),
      gameDescription:
        'Lorem impsun dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      setGameDescription: (description: string) =>
        set({ gameDescription: description }),
      gameReview: {
        recent: { type: 'none', count: 0 },
        all: { type: 'de', count: 0 },
      },
      setGameReview: (type: string, review: { type: string; count: number }) =>
        set(state => ({
          gameReview: { ...state.gameReview, [type]: review },
        })),
      gameDate: '',
      setGameDate: (date: Date | string) => set({ gameDate: date }),
      gameDeveloper: 'Arkane Studios',
      setGameDeveloper: (developer: string) =>
        set({ gameDeveloper: developer }),
      gamePublisher: 'Bethesda Softworks',
      setGamePublisher: (publisher: string) =>
        set({ gamePublisher: publisher }),
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
      gameTags: new Set(['Action']),
      addGameTags: (tag: string) =>
        set(state => ({ gameTags: state.gameTags.add(tag) })),
      removeGameTags: (tag: string) =>
        set(state => {
          const newTags = new Set(state.gameTags)
          newTags.delete(tag)
          return { gameTags: newTags }
        }),
    }),
    {
      name: 'game-data',
      serialize: data => {
        return JSON.stringify({
          ...data,
          state: {
            ...data.state,
            gameTags: Array.from(data.state.gameTags as Set<string>),
            gameFeatures: Array.from(data.state.gameFeatures as Set<string>),
            gameDate:
              data.state.gameDate instanceof Date
                ? data.state.gameDate.toISOString()
                : data.state.gameDate,
          },
        })
      },
      deserialize: data => {
        const myState = JSON.parse(data)
        myState.state.gameTags = new Set(myState.state.gameTags)
        myState.state.gameFeatures = new Set(myState.state.gameFeatures)
        myState.state.gameDate =
          myState.state.gameDate == '' ? '' : new Date(myState.state.gameDate)
        return myState
      },
      getStorage: () => localStorage,
    },
  ),
)
