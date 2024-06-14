import React from 'react'
import { motion } from 'framer-motion'
//TODO: make end of underlines even, add title and tech stack info between underlines.
function NameUnderLines() {
    const colors = ['#0aa1f2', '#bd24f0', '#f53131']

    const lines = colors.map((color, index) => {
        return (
            <motion.div 
            className='mb-1 float-end' 
            style={{height:'2px', backgroundColor: color, width:`${100 - (5*index)}%`}}
            initial={{x:'-100vw'}}
            animate={{x:2}}
            transition={{delay:(.5 + (index*.1)), duration:.1, type:'spring', stiffness:35}}
        >
        </motion.div>
        )
    })

    return (
        <div className='w-100'>
            {lines}
        </div>
    )
}

export default NameUnderLines
