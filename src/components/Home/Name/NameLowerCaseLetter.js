import React from 'react'
import { motion } from 'framer-motion'

function NameLowerCaseLetter({letter, index, delay}) {
    return (
        <motion.div
            className=''
            initial={{opacity: 0, x:-50}}
            animate={{opacity: 1, x:0}}
            transition={{delay:(delay + (.1*index)), duration: .4, type: 'tween'}}
        >{letter}</motion.div>
    )
}

export default NameLowerCaseLetter
