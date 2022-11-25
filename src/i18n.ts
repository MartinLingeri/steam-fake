import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: true,
    fallbackLng: 'en',
    lng: 'en',
    resources: {
      en: {
        translation: {
          editTitle: 'Make your edits',
          language: 'Language',
          allGames: 'All Games',
          communityHub: 'Community Hub',
          recentReviews: 'Recent Reviews',
          allReviews: 'All Reviews',
          releaseDate: 'Release Date',
          developer: 'Developer',
          publisher: 'Publisher',
          tags: 'Popular user-defined tags for this product',
          buy: 'Buy {{gameTitle}}',
          addToCart: 'Add to Cart',
          gameTitle: 'Game Title',
          gameGenre: 'Game Genre',
          gameBackgroundImage: 'Game Background Image',
          gameBanner: 'Game Banner {{res}} (optional)',
          gameCover: 'Game Cover {{res}}',
          gameDescription: 'Game Description',
          gamePrice: 'Game Price',
          gameReleaseDate: 'Game Release Date',
          gameDeveloper: 'Game Developer',
          gamePublisher: 'Game Publisher',
          gamePlatforms: 'Game Platforms',
          gameFeatures: 'Game Features',
          features: {
            singlePlayer: 'Single Player',
            multiplayer: 'Multiplayer',
            coopLan: 'Co-op LAN',
            coopOnline: 'Co-op Online',
            coopScreenSplit: 'Co-op Screen Split',
            steamCloud: 'Steam Cloud',
            cart: 'In-App Purchases',
            cards: 'Steam Trading Cards',
            achievements: 'Steam Achievements',
            remotePlay: 'Remote Play on Phone',
            controller: 'Full Controller Support',
          },
          done: 'Done',
          nav: {
            yourStore: 'Your Store',
            newNoteworthy: 'New & Noteworthy',
            categories: 'Categories',
            pointsShop: 'Points Shop',
            news: 'News',
            labs: 'Labs',
            searchPlaceholder: 'Search',
          },
          feedback: {
            addToWishlist: 'Add to Wishlist',
            follow: 'Follow',
            ignore: 'Ignore',
            seeYourList: 'See your list',
          },
          reviewType: {
            op: 'Overwhelmingly Positive',
            vp: 'Very Positive',
            p: 'Positive',
            mp: 'Mostly Positive',
            m: 'Mixed',
            mn: 'Mostly Negative',
            n: 'Negative',
            vn: 'Very Negative',
            on: 'Overwhelmingly Negative',
          },
        },
      },
      es: {
        translation: {
          editTitle: 'Realiza tus cambios',
          language: 'Idioma',
          allGames: 'Todos los juegos',
          communityHub: 'Punto de encuentro',
          recentReviews: 'Reseñas recientes',
          allReviews: 'Reseñas generales',
          releaseDate: 'Fecha de lanzamiento',
          developer: 'Desarrollador',
          publisher: 'Editor',
          tags: 'Etiquetas populares para este producto',
          buy: 'Comprar {{gameTitle}}',
          addToCart: 'Añadir al carro',
          gameTitle: 'Titulo del juego',
          gameGenre: 'Género del juego',
          gameBackgroundImage: 'Imagen de fondo del juego',
          gameBanner: 'Banner del juego {{res}} (opcional)',
          gameCover: 'Portada del juego {{res}}',
          gameDescription: 'Descripcion del juego',
          gamePrice: 'Precio del juego',
          gameReleaseDate: 'Fecha de lanzamiento del juego',
          gameDeveloper: 'Desarrollador del juego',
          gamePublisher: 'Editor del juego',
          gamePlatforms: 'Plataformas del juego',
          gameFeatures: 'Caracteristicas del juego',
          features: {
            singlePlayer: 'Juego para un jugador',
            multiplayer: 'Juego para varios jugadores',
            coopLan: 'Cooperativo en LAN',
            coopOnline: 'Cooperativo en Linea',
            coopScreenSplit: 'Coop a pantalla partida',
            steamCloud: 'Steam Cloud',
            cart: 'Compras dentro de la aplicacion',
            cards: 'Cromos de Steam',
            achievements: 'Logros de Steam',
            remotePlay: 'Jugar en cualquier lugar',
            controller: 'Compat. total con mando',
          },
          done: 'Listo',
          nav: {
            yourStore: 'Tu tienda',
            newNoteworthy: 'Nuevo y destacable',
            categories: 'Categorias',
            pointsShop: 'Tienda de puntos',
            news: 'Noticias',
            labs: 'Laboratorios',
            searchPlaceholder: 'Buscar',
          },
          feedback: {
            addToWishlist: 'Añadir a la lista de deseados',
            follow: 'Seguir',
            ignore: 'Ignorar',
            seeYourList: 'Ver tu lista',
          },
          reviewType: {
            op: 'Extremadamente positivas',
            vp: 'Muy positivas',
            p: 'Positivas',
            mp: 'Mayormente positivas',
            m: 'Mixtas',
            mn: 'Mayormente negativas',
            n: 'Negativas',
            vn: 'Muy negativas',
            on: 'Extremadamente negativas',
          },
        },
      },
    },
  })

export const langs = {
  en: { nativeName: 'English' },
  es: { nativeName: 'Español' },
  pt: { nativeName: 'Português' },
}
