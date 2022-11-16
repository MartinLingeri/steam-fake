import { Box, Heading, Input, Stack } from "@chakra-ui/react";

export default function StoreNav() {
  const categories = [
    "Tu tienda",
    "Nuevo y destacable",
    "Categorias",
    "Tienda de puntos",
    "Noticias",
    "Laboatorios",
  ];

  return (
    <Stack
      direction="row"
      background="storeNav.bg"
      width="940px"
      height="34px"
      alignItems="center"
      justifyContent="space-between"
      marginTop="32px"
      boxShadow="storeNav.shadow"
    >
      <Stack direction="row" color="storeNav.text" whiteSpace="nowrap">
        {categories.map((category, index) => (
          <Box
            key={index}
            cursor="pointer"
            width="100%"
            height="34px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            padding="0 15px"
            margin="0 !important"
            _hover={{ background: "storeNav.hover" }}
          >
            <Heading
              display="inline-block"
              fontSize="13px"
              fontWeight="600"
              textShadow="storeNav.textShadow"
            >
              {category}
            </Heading>
          </Box>
        ))}
      </Stack>
      <Input
        background="storeNav.inputBg"
        border="none"
        borderRadius="2px"
        padding="6px"
        width="202px"
        height="29px"
        fontSize="14px"
        placeholder="buscar"
      ></Input>
    </Stack>
  );
}
