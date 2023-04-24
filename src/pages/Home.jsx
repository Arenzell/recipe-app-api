import Popular from "../components/Popular";
import Veggie from "../components/Veggie";
import React from "react";
import { motion } from "framer-motion";

function Home() {
  return (
    <div>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Veggie />
        <Popular />
      </motion.div>
    </div>
  );
}

export default Home;
