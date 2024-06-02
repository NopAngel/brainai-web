import React from "react";
import Card from "./ui/Card";

function Pricing() {
  return (
    <div className="w-[98%] mx-auto text-center mt-[60px] mb-[60px]">
      <div className="mb-[82px]">
        <h1 className="text-5xl font-bold">¿Quieres Unirte con Nosotros?</h1>
        <p className="text-xs opacity-50">
          Paga la Versión Pro o la GO para tener más veneficios.
        </p>
      </div>
      <main className="grid grid-cols-3">
        <Card
          Title="Basic"
          Description="Trae cosas muy simples, durante 3 meses!"
          Range="normal"
          Price="0"
        />
        <Card
          Title="Premium"
          Description="Trae varias cosas que son muy necesarias, cosas muy simples pero muy pro!"
          Range="pro"
          Price="9,99"
        />
        <Card
          Title="Basic"
          Description="Trae todo lo que necesitas, Edición de Fotos, Edición de Videos, y más!"
          Range="eclipse"
          Price="10"
        />
      </main>
    </div>
  );
}

export default Pricing;
