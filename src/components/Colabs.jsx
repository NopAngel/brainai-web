import Logo from "../assets/logos/brainwave-symbol.svg";
import { Check } from "lucide-react";
import React from "react";
import CloudFlare from "../assets/logos/cloudfare.png";
import Figma from "../assets/logos/figma.png";
import Framer from "../assets/logos/framer.png";
import Notion from "../assets/logos/notion.png";
import Discord from "../assets/logos/discord.png";

function Colabs() {
  return (
    <div className="flex justify-center items-center h-[80vh]">
      <section className="max-w-[700px] mx-auto">
        <h1 className="text-5xl font-bold p-[6px]">
          Esta AI Chat Fué colaborada por varias Apps
        </h1>
        <div>
          <div>
            <header className="flex items-center *:p-[6px]">
              <div className="bg-indigo-600 text-[#0e0c15] rounded-full size-7 flex items-center justify-center">
                <Check />
              </div>
              <h1 className="font-semibold">Developer Mode.</h1>
            </header>
            <section>
              <p className="max-w-[500px] p-[6px] opacity-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis repudiandae, quo quidem aperiam voluptate eos laborum
                similique accusantium fugiat impedit.
              </p>
            </section>
          </div>
          <header className="flex items-center *:p-[6px] mt-[30px]">
            <div className="bg-indigo-600 text-[#0e0c15] rounded-full size-7 flex items-center justify-center">
              <Check />
            </div>
            <h1>Fácilidad de Integrar</h1>
          </header>
          <header className="flex items-center *:p-[6px] mt-[30px]">
            <div className="bg-indigo-600 text-[#0e0c15] rounded-full size-7 flex items-center justify-center">
              <Check />
            </div>
            <h1>Sencillo y Comodo.</h1>
          </header>
        </div>
      </section>
      <section className="flex aspect-square m-auto">
        <div className="rounded-full  flex justify-center items-center h-[50vh]">
          <div>
            <img
              src={Logo}
              className="w-[100px] translate-x-[2px] translate-y-[-50px]"
              alt=""
            />
          </div>
          <div className="absolute translate-x-[90px] translate-y-[-60px] *:w-[50px]">
            <img src={CloudFlare} alt="" />
          </div>
          <div className="absolute translate-x-[-100px] translate-y-[-60px] *:w-[50px]">
            <img src={Notion} alt="" />
          </div>
          <div className="absolute translate-x-[-3px] translate-y-[-150px] *:w-[50px]">
            <img src={Figma} alt="" />
          </div>
          <div className="absolute translate-x-[90px] translate-y-[-60px] *:w-[50px]">
            <img src={Framer} alt="" />
          </div>
          <div className="absolute translate-x-[-3px] translate-y-[60px] *:w-[50px]">
            <img src={Discord} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Colabs;
