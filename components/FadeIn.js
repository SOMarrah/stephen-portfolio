"use client"
import { motion } from "framer-motion"

function FadeIn({ direction, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 300 * direction }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ ease: "linear", duration: 0.4 }}
    >
      {children}
    </motion.div>
  )
}

export default FadeIn