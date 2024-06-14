import React from 'react'
import { motion } from 'framer-motion'
//TODO: make end of underlines even, add title and tech stack info between underlines.
function NameUnderLines() {
    const colors = ['#0aa1f2', '#bd24f0', '#f53131']

    const lines = colors.map((color, index) => {
        return (
            <motion.div 
            className='mb-1 float-end' 
            style={{borderTop: 'solid', borderWidth:'1px', borderColor: color, width:`${100 - (5*index)}%`}}
            initial={{x:'-100vw'}}
            animate={{x:2}}
            transition={{delay:(.5 + (index*.1)), duration:.1, type:'spring', stiffness:35, delayChildren: 2}}
        >
            <motion.div
                className='mb-1 float-end' 
                initial={{height:'0px', opacity: 0}}
                animate={{height:'100%', opacity: 1}}
                transition={{delay:(2.4 + (index*.5)), duration:.4, type:'spring', stiffness:60}}
            >
                <h4>TEST</h4>
            </motion.div>
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
