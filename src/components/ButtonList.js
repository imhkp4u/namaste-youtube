import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const buttonList = [
    "All",
    "Theatre",
    "Mixes",
    "Capital FM",
    "Concert dances",
    "React routers",
    "APIs",
    "Bridegrooms",
    "Capital FM",
  ];
  return (
    <div>
      <div className="flex  justify-center">
        {buttonList.map((button, index) => (
          <Button key={index} name={button} />
        ))}
      </div>
    </div>
  );
};

export default ButtonList;
