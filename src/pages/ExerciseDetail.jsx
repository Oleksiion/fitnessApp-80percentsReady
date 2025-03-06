import React, { useState, createContext, useEffect, useContext } from "react";
import { Box } from "@mui/material";

import Detail from "../components/Detail";
import SimilarExercises from "../components/SimilarExercises";
import { useParams } from "react-router-dom";
import { fetchData, exerciseOptions } from "../utils/fetchData";

import { GlobalContext } from "../utils/GlobalContext";

const ExerciseDetailComponent = () => {
  const { id } = useParams();

  const {
    currentExerciseDetail,
    setCurrentExerciseDetail,
    targetMuscleExercises,
    setTargetMuscleExercises,
    equipmentExercises,
    setEquipmentExercises,
  } = useContext(GlobalContext);

  useEffect(() => {
    const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";

    // получаем ОБЪЕКТ конкретное упражнение
    const fetchExercisesData = async () => {
      //
      const currentExerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setCurrentExerciseDetail(currentExerciseDetailData);
      //
      const targetMuscleExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/target/${currentExerciseDetailData.target}`,
        exerciseOptions
      );
      setTargetMuscleExercises(targetMuscleExercisesData);
      //
      const equimentExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/equipment/${currentExerciseDetailData.equipment}`,
        exerciseOptions
      );
      setEquipmentExercises(equimentExercisesData);
    };
    fetchExercisesData();
  }, [id]);

  return (
    <Box>
      <Detail id={id} />
      <SimilarExercises id={id} />
    </Box>
  );
};

export default ExerciseDetailComponent;
