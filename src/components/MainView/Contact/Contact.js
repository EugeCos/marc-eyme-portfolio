import * as s from './Contact.style'
import { motion } from 'framer-motion'


const Contact = () => {
    return (
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
        >
            <s.ContactContainer>
                CONTACT
            </s.ContactContainer>
        </motion.nav>
    )
}

export default Contact