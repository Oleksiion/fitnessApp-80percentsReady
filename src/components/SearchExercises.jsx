import React, { useState, useEffect, useContext } from "react";
import {
  Box,
  Stack,
  Typography,
  Paper,
  Button,
  TextField,
} from "@mui/material";
import HorizontalScrollbar from "../components/HorizontalScrollbar";
import { fetchData, exerciseOptions } from "../utils/fetchData";

import { GlobalContext } from "../utils/GlobalContext";

const SearchExercises = () => {
  // параметры инпута
  const [searchParam, setSearchParam] = useState("");
  // что нашли после инпута
  // будет передано через контект провайдет
  // const [exercises, setExercises] = useState([]);
  const { exercises, setExercises, currentBodyPart, setCurrentBodyPart } =
    useContext(GlobalContext);

  // для отображения списка частей тела при первой загрузке (не меняется в дальнейшем)
  const [allBodyParts, setAllBodyParts] = useState([]);

  // ОТОБРАЗИТЬ СПИСОК ЧАСТЕЙ ТЕЛА ПРИ ЗАГРУЗКЕ ПРИЛОЖЕНИЯ
  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setAllBodyParts(["all", ...bodyPartsData]);
    };
    // ПОЛУЧАЕМ список из 8 частей тела
    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (!searchParam) return;
    // 1. получили АБСОЛЮТНО ВСЕ СУЩЕСТВУЮЩИЕ упражнения
    const exercisesData = await fetchData(
      "https://exercisedb.p.rapidapi.com/exercises?limit=0",
      exerciseOptions
    );
    // 2. ищем вседи ВСЕХ что включает наш параметр поиска
    const searchedExercises = exercisesData.filter(
      (item) =>
        item.name.toLowerCase().includes(searchParam) ||
        item.target.toLowerCase().includes(searchParam) ||
        item.equipment.toLowerCase().includes(searchParam) ||
        item.bodyPart.toLowerCase().includes(searchParam)
    );

    setSearchParam("");
    // записали упражнениЯ которые нам надо в массив exercises
    setExercises(searchedExercises);
    console.log(exercises);
  };

  return (
    <Box
      sx={{
        // backgroundColor: "green",
        border: "1px solid black",
        minHeight: "500px",
        padding: "20px",
      }}
    >
      <Stack direction="column" alignItems="center">
        <Typography
          variant="h6"
          sx={{
            color: "black",
            marginBottom: "20px",
          }}
        >
          Enter your bodypart
        </Typography>
        {/* общий бокс для поиска
        Используем поисковой запрос и храним его в переменной searchParam
        
        */}
        <Box position="relative" mb="72px">
          <TextField
            height="76px"
            sx={{
              input: { fontWeight: "700", border: "none", borderRadius: "4px" },
              width: { lg: "1170px", xs: "350px" },
              backgroundColor: "#fff",
              borderRadius: "40px",
            }}
            value={searchParam}
            onChange={(e) => setSearchParam(e.target.value.toLowerCase())}
            placeholder="Search Exercises"
            type="text"
          />
          <Button
            className="search-btn"
            sx={{
              bgcolor: "#FF2625",
              color: "#fff",
              textTransform: "none",
              width: { lg: "173px", xs: "80px" },
              height: "56px",
              position: "absolute",
              right: "0px",
              fontSize: { lg: "20px", xs: "14px" },
            }}
            onClick={handleSearch}
          >
            Search
          </Button>
        </Box>

        <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
          <HorizontalScrollbar data={allBodyParts} isBodyParts />
        </Box>
      </Stack>
    </Box>
  );
};

export default SearchExercises;
