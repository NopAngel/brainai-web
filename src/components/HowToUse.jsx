import {
  AirVent,
  AudioLines,
  Disc,
  Laptop,
  PlayCircleIcon,
  PlayIcon,
  Settings,
  Video,
} from "lucide-react";
import Gradient from "../assets/gradient.png";
import Service from "../assets/service.png";
import Service2 from "../assets/service2.png";
import Service3 from "../assets/service3.png";
import React from "react";

function HowToUse() {
  return (
    <div className="w-[98%] mx-auto text-center">
      <section>
        <h1 className="text-5xl font-bold">Genera Imagenes con IA</h1>
        <p className="opacity-50 text-center p-[6px]">Crea todo esto Grtis!</p>
      </section>
      <section className="flex justify-center">
        <div>
          <article className="flex items-center justify-around border-[1px] border-zinc-700 rounded-lg w-[1200px]">
            <div>
              <img
                src={Service}
                className="w-[500px] object-cover h-[500px]"
                alt=""
              />
              <div>
                <img
                  src={Gradient}
                  className="w-[420px] absolute translate-y-[-420px] -z-10"
                  alt=""
                />
              </div>
            </div>
            <div className="p-6">
              <h1 className="text-3xl font-semibold">Simple y Comodo.</h1>
              <p className="text-center opacity-50">
                Crea todo esto simple y comodo.
              </p>
            </div>
          </article>
          <main>
            <article className="grid grid-cols-2 w-[98%] mx-auto text-center">
              <div>
                <div className="w-[300px] bg-black/95 backdrop-blur-md absolute translate-y-[60px] rounded-lg translate-x-[200px]">
                  <header className="flex justify-center items-center gap-6 p-[6px]">
                    <div className="bg-blue-300 rounded-full w-[35px] p-[6px]">
                      <h1>J</h1>
                    </div>
                    <h1>You</h1>
                  </header>
                  <p className="opacity-80">
                    Creame una Imagen muy linda, qué se trate de Futuro!✨🚀
                  </p>
                </div>
                <img
                  src={Service2}
                  className="w-[500px] bg-gradient-to-b from-transparent to-black"
                  alt=""
                />
              </div>
              <div className="absolute w-[400px] translate-y-[428px] translate-x-[100px]">
                <h1 className="text-2xl font-bold">Edición de Fotos.</h1>
                <p className="opacity-50">
                  Edita automaticamente una foto, corrigiendo el error
                  transformandolo en Solución.
                </p>
              </div>
              <div className="w-[600px] rounded-lg border-[1px] border-neutral-900">
                <div className="h-[45%] flex justify-center flex-col">
                  <h1 className="text-3xl text-left p-[10px] font-semibold">
                    Creador de Videos
                  </h1>
                  <p className="text-left p-[6px] opacity-50">
                    ¿Necesitas editar videos?, bueno acá te traemos la solución,
                    probablemente no sea una muy bueno, pero te aseguramos que
                    podras editar TODO.
                  </p>
                  <div className="flex justify-center gap-6 *:cursor-pointer *:p-[12px] *:rounded-lg *:">
                    <div className="bg-[#252134]">
                      <Disc />
                    </div>
                    <div className="bg-[#252134]">
                      <AudioLines />
                    </div>
                    <div className="bg-gradient-to-l from-purple-500 to-indigo-700">
                      <div className="bg-[#252134] p-[2px] rounded-lg">
                        <Settings />
                      </div>
                    </div>
                    <div className="bg-[#252134]">
                      <Video />
                    </div>

                    <div className="bg-[#252134]">
                      <Laptop />
                    </div>
                  </div>
                </div>
                <div className="bg-black/55 w-[98%] mx-auto rounded-lg text-center flex items-end">
                  <img className="w-[400px]" src={Service3} alt="" />
                  <div className="flex justify-between translate-x-[-300px] gap-6">
                    <PlayIcon fill="white" />
                    <div className="w-[300px] bg-purple-600 rounded-full h-[20px]"></div>
                  </div>
                </div>
              </div>
            </article>
          </main>
        </div>
      </section>
    </div>
  );
}

export default HowToUse;
