import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Stack,
  Typography,
  Paper,
  Button,
  TextField,
} from "@mui/material";

const ExerciseCard = ({ exercise }) => {
  //exercise = объект
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt="img" />
      <Stack direction="row" gap="20px">
        <Button
          sx={{
            color: "#fff",
            background: "#FFA9A9",
            fontSize: "14px",
            textTransform: "capitalize",
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            color: "#fff",
            background: "#FCC757",
            fontSize: "14px",
            borderRadius: "20px",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        color="#000"
        fontWeight="bold"
        sx={{ fontSize: { lg: "24px", xs: "20px" } }}
        mt="11px"
        pb="10px"
        textTransform="capitalize"
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
