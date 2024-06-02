import React from "react";
import CardFeatures from "./ui/CardFeatures";
import { Bolt, Cable, HelpCircle, MessageCircle, Scaling } from "lucide";

function Features() {
  return (
    <div className="w-full text-center mx-auto mt-[90px]">
      <h1 className="text-4xl font-semibold mb-[60px]">
        Explora un poco más BrainAI
      </h1>
      <main className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-[900px] mx-auto gap-6">
        <CardFeatures
          Title="Fácilidad de Usar."
          Description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem delectus"
        />
        <CardFeatures
          Title="Configurable."
          Description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem delectus"
        />
        <CardFeatures
          Title="Comunidad Abierta."
          Description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem delectus"
        />
        <CardFeatures
          Title="Open Source."
          Description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem delectus"
        />
        <CardFeatures
          Title="Responde Rápido."
          Description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem delectus"
        />
        <CardFeatures
          Title="Librería."
          Description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem delectus"
        />
      </main>
    </div>
  );
}

export default Features;
