import { motion } from "framer-motion"
import { styles } from "../styles"
import { staggerContainer } from "../utils/motion"

const SectionWrapper = (Component, idName) => {
  function HOC() {
    return (
        <motion.section
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className={`relative z-0 mx-auto max-w-7xl ${styles.padding}`}
        >
          <span className="hash-span" id={idName}>
            &nbsp;
          </span>
            <Component />
        </motion.section>
    )
  }
  return HOC
}

export default SectionWrapper