import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex overflow-x-hidden">
      <Button name="Cricket" />
      <Button name="Music" />
      <Button name="News" />
      <Button name="Podcasts" />
      <Button name="Movies" />
      <Button name="Technology" />
      <Button name="Programming" />
      <Button name="Gaming" />
      <Button name="Graphics" />
    </div>
  );
};

export default ButtonList;
