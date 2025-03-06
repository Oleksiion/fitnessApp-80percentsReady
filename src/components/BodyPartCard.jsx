import React, { useContext } from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";
import { GlobalContext } from "../utils/GlobalContext";
//borderTop: '4px solid #FF2625'

const BodyPartCard = ({ item }) => {
  const { exercises, setExercises, currentBodyPart, setCurrentBodyPart } =
    useContext(GlobalContext);
  // item = 1 объект

  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop:
          currentBodyPart === item ? "4px solid #FF2625" : "4px solid #fff",
        background: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "282px",
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={() => {
        setCurrentBodyPart(item);
      }}
    >
      <img src={Icon} alt="Icon" width={40} height={40} />

      <Typography
        fontSize="24px"
        fontWeight="bold"
        fontFamily="Alegreya"
        color="#3A1212"
        textTransform="capitalize"
      >
        {" "}
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPartCard;
