import React from 'react'
import { motion } from 'framer-motion'

function NameUnderLines() {
    const colors = ['#0aa1f2', '#bd24f0', '#f53131']

    const lines = colors.map((color, index) => {
        return (
            <motion.div 
            className='mb-1' 
            style={{height:'2px', backgroundColor: color, width:'90%'}}
            initial={{x:'-100vw'}}
            animate={{x: 30 + (index*20)}}
            transition={{delay:(.5 + (index*.1)), duration:.1, type:'spring', stiffness:40}}
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
