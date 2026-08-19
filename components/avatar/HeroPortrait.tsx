"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useAvatarState } from "./useAvatarState";

export function HeroPortrait() {
  const { state, setState } = useAvatarState();

  return (
    <motion.button
      className="heroPortrait"
      type="button"
      data-state={state}
      aria-label="Meet Si"
      onClick={() => setState("greeting")}
      whileHover={{ y: -8, rotate: -0.5 }}
      whileTap={{ scale: 0.985 }}
      transition={{ type: "spring", stiffness: 240, damping: 22 }}
    >
      <span className="portraitHalo" aria-hidden="true" />
      <Image
        className="portraitImage"
        src="/si-pei-hero-optimized.png"
        alt="Si Pei in a white blouse, smiling confidently"
        fill
        priority
        sizes="(max-width: 760px) 82vw, 46vw"
      />
      <span className="portraitStatus">SI / {state}</span>
    </motion.button>
  );
}
