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
          gameRecentReviews:
            'Game Recent Reviews (optional if game is not released)',
          gameAllReviews: 'Game All Reviews',
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
            de: 'No user reviews',
            none: 'none',
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
          gameRecentReviews:
            'Reseñas recientes del juego (opcional si el juego no ha sido lanzado)',
          gameAllReviews: 'Reseñas generales del juego',
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
            de: 'No existen reseñas de usuarios',
            none: 'ninguna',
          },
        },
      },
      pt: {
        translation: {
          editTitle: 'Faça suas edições',
          language: 'Idioma',
          allGames: 'Todos os jogos',
          communityHub: 'Central da comunidade',
          recentReviews: 'Análises recentes',
          allReviews: 'Todas as análises',
          releaseDate: 'Data de lançamento',
          developer: 'Desenvolvedor',
          publisher: 'Distribuidora',
          tags: 'Marcadores populares para este produto',
          buy: 'Comprar {{gameTitle}}',
          addToCart: '+ Carrinho',
          gameTitle: 'Título do jogo',
          gameGenre: 'Gênero do jogo',
          gameBackgroundImage: 'Imagem de fundo do jogo',
          gameBanner: 'Banner do jogo {{res}} (opcional)',
          gameCover: 'Capa do jogo {{res}}',
          gameDescription: 'Descrição do jogo',
          gameRecentReviews:
            'Análises recentes do jogo (opcional se o jogo não foi lançado)',
          gameAllReviews: 'Todas as análises do jogo',
          gamePrice: 'Preço do jogo',
          gameReleaseDate: 'Data de lançamento do jogo',
          gameDeveloper: 'Desenvolvedor do jogo',
          gamePublisher: 'Distribuidora do jogo',
          gamePlatforms: 'Plataformas do jogo',
          gameFeatures: 'Funcionalidades do jogo',
          features: {
            singlePlayer: ' Um jogador',
            multiplayer: 'Multijogador multiplataforma',
            coopLan: 'Coop. em rede local (LAN)',
            coopOnline: 'Cooperativo online',
            coopScreenSplit: 'Coop. a tela dividida/compart.',
            steamCloud: 'Steam Cloud',
            cart: 'Compras dentro do aplicativo',
            cards: 'Cartas Colecionáveis Steam',
            achievements: 'Conquistas Steam',
            remotePlay: 'Remote Play',
            controller: 'Compat. total com controle',
          },
          done: 'Pronto',
          nav: {
            yourStore: 'Sua loja',
            newNoteworthy: 'Novidades e tendências',
            categories: 'Categorias',
            pointsShop: 'Loja de pontos',
            news: 'Notícias',
            labs: 'Laboratório',
            searchPlaceholder: 'Buscar',
          },
          feedback: {
            addToWishlist: 'Adicionar à lista de desejos',
            follow: 'Seguir',
            ignore: 'Ignorar',
            seeYourList: 'Ver sua lista',
          },
          reviewType: {
            op: 'Extremamente positivas',
            vp: 'Muito positivas',
            p: 'Positivas',
            mp: 'Majoritariamente positivas',
            m: 'Mistas',
            mn: 'Majoritariamente negativas',
            n: 'Negativas',
            vn: 'Muito negativas',
            on: 'Extremamente negativas',
            de: 'Nenhuma análise de usuário',
            none: 'nenhuma',
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
