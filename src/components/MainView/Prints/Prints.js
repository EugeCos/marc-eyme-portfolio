import * as s from './Prints.style'
import { motion } from 'framer-motion'


const Prints = () => {
    return (
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
        >
            <s.PrintsContainer>
                PRINTS
            </s.PrintsContainer>
        </motion.nav>
    )
}

export default Prints