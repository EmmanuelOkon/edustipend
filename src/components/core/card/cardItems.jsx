import React from "react";
import Button from "../button/buttonComponent";
import { HiPlusSm } from "react-icons/hi";

const CardItems = ({ title, text }) => {
  return (
    <div className="flex my-6 w-full justify-center">
      <Button className="flex items-center">
        <p>{title}</p>
        <p className="pl-1 italic">{text}</p>
        <HiPlusSm className="pl-1 text-2xl " />
      </Button>
    </div>
  );
};

export default CardItems;
