import { Box, Stack } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import StoreNav from "./components/StoreNav";
import Title from "./components/Title";

function App() {
  return (
    <>
      <Navbar />
      <Stack background="primary.600" minH="100vh" alignItems="center">
        <Stack width="940px" gap="16px">
          <StoreNav />
          <Title></Title>
        </Stack>
      </Stack>
      <Box
        overflowY="auto"
        css={{
          "&::-webkit-scrollbar": {
            height: "12px",
            width: "14px",
            background: "transparent",
            zIndex: "12",
            overflow: "visible",
          },
          "&::-webkit-scrollbar-track": {
            width: "6px",
          },
          "&::-webkit-scrollbar-corner": {
            background: "#202020",
          },
          "&::-webkit-scrollbar-thumb": {
            width: "10px",
            backgroundColor: "#434953",
            borderRadius: "10px",
            zIndex: "12",
            border: "4px solid rgba(0,0,0,0)",
            backgroundClip: "padding-box",
            transition: "background-color .32s ease-in-out",
            margin: "4px",
            minHeight: "32px",
            minWidth: "32px",
          },
        }}
      ></Box>
    </>
  );
}

export default App;
