import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [exercises, setExercises] = useState([]);
  const [currentBodyPart, setCurrentBodyPart] = useState("all");
  const [currentExerciseDetail, setCurrentExerciseDetail] = useState({});
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  return (
    <GlobalContext.Provider
      value={{
        exercises,
        setExercises,
        currentBodyPart,
        setCurrentBodyPart,
        currentExerciseDetail,
        setCurrentExerciseDetail,
        targetMuscleExercises,
        setTargetMuscleExercises,
        equipmentExercises,
        setEquipmentExercises,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
