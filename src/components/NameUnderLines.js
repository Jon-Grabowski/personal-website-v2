import React from 'react'
import { motion } from 'framer-motion'
//TODO: add title and tech stack info between underlines.
function NameUnderLines() {
    const details = [
        {body: 'Font End Engineer', color:'#0aa1f2'}, 
        {body:'Tech Stack', color:'#bd24f0'}, 
        {body:'Links', color:'#f53131'},
        {body:'', color:'#22f241'}
    ]

    const lines = details.map((detail, index) => {
        const {body, color} = detail
        return (
            <motion.div 
            className=' float-end' 
            style={{borderTop: 'solid', borderWidth:'2px', borderColor: color, width:`${100 - (5*index)}%`}}
            initial={{x:'-100vw'}}
            animate={{x:2}}
            transition={{delay:(.5 + (index*.1)), duration:.1, type:'spring', stiffness:35}}
        >
            <motion.div
                className='my-1 float-end' 
                initial={{height:'0px', x: '50vw', opacity:0}}
                animate={{height:'100%', x:0, opacity:1}}
                transition={{delay:(2.5 + (index*.5)), duration:.3, type:'spring', stiffness:40}}
            >
                <span className='pe-4 display-6'>{body}</span>
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
