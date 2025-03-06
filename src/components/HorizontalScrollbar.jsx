import { Box, Stack } from "@mui/material";
import React from "react";
import BodyPartCard from "./BodyPartCard";
import ExerciseCard from "./ExerciseCard";

const HorizontalScrollbar = ({ data, isBodyParts }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflow: "scroll",
        gap: "20px",
        padding: "30px",
      }}
    >
      {/* ITEM  это 1! объект */}
      {data.map((item) => (
        <Box key={item.id || item}>
          {isBodyParts ? (
            <BodyPartCard item={item} />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </Box>
      ))}
    </Stack>
  );
};

export default HorizontalScrollbar;
