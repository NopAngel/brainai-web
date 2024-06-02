import { motion } from "framer-motion";
import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Colabs from "./components/Colabs";
import HowToUse from "./components/HowToUse";
import Pricing from "./components/Pricing";
import BallGradient from "./components/ui/BallGradient";

function App() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 100 }}
      transition={{
        type: "linear",
        stiffness: 160,
        damping: 10,
      }}
    >
      <Navbar />
      <section>
        <Home />
        <Features />
        <Colabs />
        <HowToUse />
        <Pricing />
      </section>
    </motion.main>
  );
}

export default App;
