import { Box } from "@mui/material";
import { Card } from "./components/Card/Card";
import { mockedData } from "./data/mockedData";

export const App = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {mockedData.map((item) => (
          <Card key={item.id} id={item.id} description={item.description} />
        ))}
      </Box>
    </>
  );
};
