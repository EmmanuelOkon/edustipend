import React from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../button/buttonComponent";
import { HiPlusSm } from "react-icons/hi";

const cardItems = [
  {
    id: 1,
    title: "Unavailable by",
    text: "Davido",
    icon: HiPlusSm,
  },
  {
    id: 2,
    title: "Unavailable by",
    text: "Davido",
    icon: HiPlusSm,
  },
  {
    id: 3,
    title: "Unavailable by",
    text: "Davido",
    icon: HiPlusSm,
  },
  {
    id: 4,
    title: "Unavailable by",
    text: "Davido",
    icon: HiPlusSm,
  },
  {
    id: 5,
    title: "Unavailable by",
    text: "Davido",
    icon: HiPlusSm,
  },
];

const Layout = () => {
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
              <div className="flex my-6 w-full justify-center" key={item.id}>
                <Button className="flex items-center">
                  <p>{item.title}</p>
                  <p className="pl-1 italic">{item.text}</p>
                  <item.icon />
                </Button>
              </div>
            ))}
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>View more</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
