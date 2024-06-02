import { Check } from "lucide-react";
import React from "react";

function Card({ Title, Description, Price, Range }) {
  if (Range == "normal") {
    return (
      <article className="w-[300px] scale-125 text-left mx-auto border-[1px] border-[#252134] rounded-lg p-[10px] translate-y-[20px]">
        <div className="text-center">
          <h1 className="text-orange-400 text-3xl font-bold">{Title}</h1>
          <p className="opacity-80">{Description}</p>
        </div>
        <div className="flex justify-center flex-col">
          <h1 className="flex justify-center font-bold text-xl items-center">
            <span>$</span>
            <span className="text-5xl">{Price}</span>
          </h1>
          <button className="bg-white text-black p-[6px] rounded-lg">
            Get Started
          </button>
        </div>
        <div>
          <ul className="*:flex *:items-center *:gap-6 *:mb-[20px] *:border-b-[1px] *:border-[#252134]">
            <li>
              <div className="text-[#252134] bg-purple-500 w-fit rounded-full text-xs">
                <Check />
              </div>
              <span>An AI chatbot that can understand your queries</span>
            </li>
            <li>
              <div className="text-[#252134] bg-purple-500 w-fit rounded-full text-xs">
                <Check />
              </div>
              <span>
                Personalized recommendations based on your preferences
              </span>
            </li>
            <li>
              <div className="text-[#252134] bg-purple-500 w-fit rounded-full text-xs">
                <Check />
              </div>
              <span>
                Ability to explore the app and its features without any cost
              </span>
            </li>
          </ul>
        </div>
      </article>
    );
  } else if (Range == "pro") {
    return (
      <article className="w-[300px] scale-125 text-left mx-auto border-[1px] border-[#252134] rounded-lg p-[10px]">
        <div className="text-center">
          <h1 className="text-red-400 text-3xl font-bold">{Title}</h1>
          <p className="opacity-80">{Description}</p>
        </div>
        <div className="flex justify-center flex-col">
          <h1 className="flex justify-center font-bold text-xl items-center">
            <span>$</span>
            <span className="text-5xl">{Price}</span>
          </h1>
          <button className="bg-white text-black p-[6px] rounded-lg">
            Get Started
          </button>
        </div>
        <div>
          <ul className="*:flex *:items-center *:gap-6 *:mb-[20px] *:border-b-[1px] *:border-[#252134]">
            <li>
              <div className="text-[#252134] bg-purple-500 w-fit rounded-full text-xs">
                <Check />
              </div>
              <span>An AI chatbot that can understand your queries</span>
            </li>
            <li>
              <div className="text-[#252134] bg-purple-500 w-fit rounded-full text-xs">
                <Check />
              </div>
              <span>
                Personalized recommendations based on your preferences
              </span>
            </li>
            <li>
              <div className="text-[#252134] bg-purple-500 w-fit rounded-full text-xs">
                <Check />
              </div>
              <span>
                Ability to explore the app and its features without any cost
              </span>
            </li>
          </ul>
        </div>
      </article>
    );
  } else if (Range == "eclipse") {
    return (
      <article className="w-[300px] scale-125 text-left mx-auto border-[1px] border-[#252134] rounded-lg p-[10px] translate-y-[20px]">
        <div className="text-center">
          <h1 className="bg-gradient-to-t from-purple-500 to-indigo-500 bg-clip-text text-transparent text-3xl font-bold">
            {Title}
          </h1>
          <p className="opacity-80">{Description}</p>
        </div>
        <div className="flex justify-center flex-col">
          <h1 className="flex justify-center font-bold text-xl items-center">
            <span>$</span>
            <span className="text-5xl">{Price}</span>
          </h1>
          <button className="bg-white text-black p-[6px] rounded-lg">
            Get Started
          </button>
        </div>
        <div>
          <ul className="*:flex *:items-center *:gap-6 *:mb-[20px] *:border-b-[1px] *:border-[#252134]">
            <li>
              <div className="text-[#252134] bg-purple-500 w-fit rounded-full text-xs">
                <Check />
              </div>
              <span>An AI chatbot that can understand your queries</span>
            </li>
            <li>
              <div className="text-[#252134] bg-purple-500 w-fit rounded-full text-xs">
                <Check />
              </div>
              <span>
                Personalized recommendations based on your preferences
              </span>
            </li>
            <li>
              <div className="text-[#252134] bg-purple-500 w-fit rounded-full text-xs">
                <Check />
              </div>
              <span>
                Ability to explore the app and its features without any cost
              </span>
            </li>
          </ul>
        </div>
      </article>
    );
  }
}

export default Card;
