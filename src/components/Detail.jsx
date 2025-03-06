import React, { useState, createContext, useEffect, useContext } from "react";
import { Box, Stack, Typography, Button } from "@mui/material";

import SimilarExercises from "../components/SimilarExercises";

//IMAGES
import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";
import { GlobalContext } from "../utils/GlobalContext";

const Detail = ({ id }) => {
  const { currentExerciseDetail } = useContext(GlobalContext);

  if (
    !currentExerciseDetail ||
    Object.keys(currentExerciseDetail).length === 0
  ) {
    return <Typography>Loading...</Typography>;
  }

  const { bodyPart, gifUrl, name, target, equipment } = currentExerciseDetail;

  //Для отображения стака справа
  const extraDetails = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  //КАРТОЧКА УПРАЖНЕНИЯ
  return (
    <Stack direction="row">
      {/* LEFT */}
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      {/* RIGHT */}
      <Stack>
        <Typography>{name}</Typography>
        <Typography>
          Exercises keep you strong.{" "}
          <span style={{ textTransform: "capitalize" }}>{name}</span> bup is one
          of the best <br /> exercises to target your {target}. It will help you
          improve your <br /> mood and gain energy.
        </Typography>
        {/* РЕНДЕРИТ 3 СТАКА ИЗ extraDetails */}
        {extraDetails.map((oneDetail, index) => {
          return (
            <Stack key={index} direction="row" gap="24px" alignItems="center">
              <Button
                sx={{
                  background: "#FFF2DB",
                  borderRadius: "50%",
                  width: "100px",
                  height: "100px",
                }}
              >
                <img
                  src={oneDetail.icon}
                  alt={bodyPart}
                  style={{ width: "50px", height: "50px" }}
                />
              </Button>
              <Typography
                textTransform="capitalize"
                sx={{ fontSize: { lg: "30px", xs: "20px" } }}
              >
                {oneDetail.name}
              </Typography>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default Detail;
