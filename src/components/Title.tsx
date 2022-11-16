import { Button, Heading, Stack } from "@chakra-ui/react";

export default function Title() {
  return (
    <Stack position="relative">
      <Heading>Todo los juegos</Heading>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Heading>Eve</Heading>
        <Button
          width="161px"
          height="30px"
          fontSize="15px"
          lineHeight="30px"
          borderRadius="2px"
          color="#67c1f5"
          background="title.buttonBg"
          fontWeight="400"
        >
          Punto de encuentro
        </Button>
      </Stack>
    </Stack>
  );
}
