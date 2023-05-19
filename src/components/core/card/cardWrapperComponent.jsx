import React from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../button/buttonComponent";
import CardItems from "./cardItems";

const cardItems = [
  {
    id: 1,
    title: "Unavailable by",
    text: "Davido",
  },
  {
    id: 2,
    title: "Unavailable by",
    text: "Davido",
  },
  {
    id: 3,
    title: "Unavailable by",
    text: "Davido",
  },
  {
    id: 4,
    title: "Unavailable by",
    text: "Davido",
  },
  {
    id: 5,
    title: "Unavailable by",
    text: "Davido",
  },
];

const CardWrapper = () => {
  return (
    <div className="flex relative top-[2rem] px-[30px]  py-[25px] gap-4">
      <div className="w-full flex items-center">
        <div className="pl-[30px]">
          <h1 className="text-6xl font-bold text-black">
            Make your party fun!
          </h1>
          <p className="py-4 tracking-widest text-xl">
            Create your own custom playlist today.
          </p>
          <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>
            Create playlist
          </Button>
        </div>
      </div>
      <div className="w-full flex justify-end">
        <div className="text-end bg-gray-700 bg-opacity-70 px-14 py-[20px]">
          <div className=" py-[10px] px[30px] text-center">
            <h1 className="text-2xl font-bold">Trending songs</h1>
            {cardItems.map((item) => (
              <CardItems key={item.id} title={item.title} text={item.text} />
            ))}
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>View more</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardWrapper;
