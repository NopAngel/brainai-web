import { Cable, MoreVertical } from "lucide-react";
import Hover from "../../assets/hover.png";
import React from "react";

function CardFeatures({ Title, Description }) {
  return (
    <div className="bg-gray-900/55 backdrop-blur-md rounded-[40px] group">
      <div className="bg-gradient-to-t from-black z-10 to-black/55 rounded-[40px]">
        <img
          src={Hover}
          className="transition-opacity duration-150 rounded-[40px] cursor-pointer -z-10  opacity-0 group-hover:opacity-50"
          alt="Background AI"
        />
      </div>
      <section className="absolute top-0 p-[6px] bg-transparent text-left">
        <div className="bg-green-500 w-fit p-[20px] rounded-full mx-auto">
          <Cable />
        </div>
        <h1 className="text-2xl font-bold p-[10px]">{Title}</h1>
        <p className="text-[15px] ml-[13px] p-[20px]">{Description}</p>
        <div className="flex w-full justify-around">
          <MoreVertical fill="white" />
          <span>Explorar Más</span>
        </div>
      </section>
    </div>
  );
}

export default CardFeatures;
