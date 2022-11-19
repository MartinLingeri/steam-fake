import { Box, Button, Heading, Stack } from '@chakra-ui/react'

export default function Title() {
  const breadcrumbs = [
    'Todo los juegos',
    'Multijugador masivo juegos',
    'EVE online',
  ]

  return (
    <Stack position='relative' zIndex='100'>
      <Stack direction='row'>
        {breadcrumbs.map((breadcrumb, index) => (
          <Stack
            direction='row'
            gap='0'
            marginLeft={index === 0 ? '0' : '4px !important'}
            key={index}
          >
            <Heading
              color='textGray'
              fontSize='12px'
              fontWeight='400'
              cursor='pointer'
              _hover={{ color: 'white' }}
            >
              {breadcrumb}
            </Heading>
            {index < breadcrumbs.length - 1 && (
              <Heading
                color='textGray'
                fontSize='12px'
                fontWeight='400'
                opacity='0.6'
                marginLeft='4px !important'
              >
                {' '}
                {' >'}
              </Heading>
            )}
          </Stack>
        ))}
      </Stack>
      <Stack
        direction='row'
        alignItems='center'
        justifyContent='space-between'
        marginBlock='2px !important'
      >
        <Heading
          color='white'
          fontSize='26px'
          fontFamily='Motiva Sans'
          fontWeight='normal'
          lineHeight='32px'
          textOverflow='ellipsis'
        >
          EVE Online
        </Heading>
        <Button
          width='161px'
          height='30px'
          fontSize='15px'
          lineHeight='30px'
          borderRadius='2px'
          color='textBlue'
          background='title.buttonBg'
          fontWeight='400'
          _hover={{
            background: 'lightHover',
            color: 'text',
          }}
        >
          Punto de encuentro
        </Button>
      </Stack>
    </Stack>
  )
}
