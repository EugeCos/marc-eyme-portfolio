import * as s from './Portfolio.style'
import { motion } from 'framer-motion'


const Portfolio = () => {
    return (
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
        >
            <s.PortfolioContainer>
                PORTFOLIO
            </s.PortfolioContainer>
        </motion.nav>
    )
}

export default Portfolio