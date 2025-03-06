import React, { useState, useEffect, useContext } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Pagination } from "@mui/material";
import { fetchData, exerciseOptions } from "../utils/fetchData";

import ExerciseCard from "./ExerciseCard";
import { GlobalContext } from "../utils/GlobalContext";

const Exercises = () => {
  const { exercises, setExercises, currentBodyPart, setCurrentBodyPart } =
    useContext(GlobalContext);

  const [exercisesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // загрузка упражнений при изменении бадипарт в скроллбаре
  useEffect(() => {
    const fetchExercisesDataArr = async () => {
      let exercisesData = [];

      if (currentBodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises?limit=0",
          exerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${currentBodyPart}?limit=0`,
          exerciseOptions
        );
      }

      setExercises(exercisesData);
    };

    fetchExercisesDataArr();
  }, [currentBodyPart]);

  const paginate = (e, value) => {
    setCurrentPage(value);
  };
  // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  return (
    <Box id="exercises" sx={{ mt: { lg: "109px" } }} mt="50px" p="20px">
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="46px"
      >
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "107px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="start"
      >
        {currentExercises.map((exercise, idx) => (
          <ExerciseCard key={idx} exercise={exercise}></ExerciseCard>
        ))}
      </Stack>

      <Stack sx={{ mt: { lg: "114px", xs: "70px" } }} alignItems="center">
        {exercises.length > 10 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
