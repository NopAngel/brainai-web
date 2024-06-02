import {
  motion,
  useScroll,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import BG from "../assets/gradient.png";
import Line from "../assets/line.png";
import Loading from "../assets/loading.png";
import Curve from "../assets/curve.png";
import Hero from "../assets/background.jpg";
import React from "react";

function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div>
      <motion.section className="flex justify-center items-center h-[100vh] text-center flex-col ">
        <div>
          <img
            src={BG}
            className="absolute w-[1200px] -z-10 opacity-50 translate-x-[-650px] translate-y-[-90px]"
            alt=""
          />
          <div className="absolute w-[900px] top-0 left-0">
            <img src={Line} alt="" />
          </div>
        </div>
        <div>
          <h1 className="text-7xl max-w-[900px] font-bold bg-gradient-to-l from-slate-100 to-white bg-clip-text">
            Explora con esta AI-Chatting con BrainAi
          </h1>
          <div className="absolute *:w-[200px] translate-x-[600px]">
            <img src={Curve} alt="" />
          </div>
          <p className="p-[10px] text-slate-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            recusandae.
          </p>
        </div>
        <div className="bg-neutral-900 p-[10px]">
          <div className="bg-yellow-200 p-[10px] rounded-full">
            <img
              src={Hero}
              className="w-[900px] h-[500px] object-cover rounded-lg shadow-md select-none"
            />
            <div className="absolute bg-black/70 translate-y-[-60px] translate-x-[250px] p-[10px] rounded-lg w-[400px] flex gap-6 items-center">
              <img src={Loading} className="w-[20px]" alt="" />
              <p>Generadon la IA</p>
            </div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}

export default Home;
