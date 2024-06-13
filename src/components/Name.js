import React from 'react'
import { motion } from 'framer-motion'
function Name() {

    return (
        <div className='text-start border fs-2'>
            <motion.div 
                className='border'
                animate={{x:200, rotateZ:-90}}
            >
                <span>J</span>
                <span>o</span>
                <span>n</span>
            </motion.div>
            <div className='border'>
                <span>G</span>
                <span>r</span>
                <span>a</span>
                <span>b</span>
                <span>o</span>
                <span>w</span>
                <span>s</span>
                <span>k</span>
                <span>i</span>
            </div>
        </div>
    )
}

export default Name
