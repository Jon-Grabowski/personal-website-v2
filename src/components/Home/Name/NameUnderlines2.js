import React from 'react'
import { motion } from 'framer-motion'
//TODO: add title and tech stack info between underlines.


function NameUnderLines2() {
    const details = [
        {body:'Font End Engineer', color:'#0aa1f2'}, 
        {body:'Tech Stack', color:'#bd24f0'}, 
        {body:'Links', color:'#f53131'},
        {body:'', color:'#22f241'}
    ]

    const lines = details.map((detail, index) => {
        const {body, color} = detail
        return (
            <motion.div 
            className='float-end' 
            style={{borderTop: 'solid', borderWidth:'2px', borderColor: color, width:`${95 - (5*index)}%`}}
            initial={{x:'-50vw'}}
            animate={{x:0}}
            transition={{delay:(.2 + (index*.1)), duration:.1, type:'spring', stiffness:30}}
            >
                <motion.div
                    className='my-1 float-end' 
                    initial={{height:'0px', x: '-75vw', opacity:0}}
                    animate={{height:30, x:0, opacity:1}}
                    transition={{delay:(2.1 + (index*.2)), duration:.2, type:'spring', stiffness:30}}
                >
                    <p className='fs-5 pe-2'>{body}</p>
                    {/* <span className='pe-4 fs-3'>{body}</span> */}
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

export default NameUnderLines2
