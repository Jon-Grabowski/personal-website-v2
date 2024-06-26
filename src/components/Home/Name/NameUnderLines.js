import React from 'react'
import { motion } from 'framer-motion'
import ProgrammingLogos from './ProgrammingLogos'
import NameHeadline from './NameHeadline'
//TODO: add title and tech stack info between underlines.


function NameUnderLines() {
    const details = [
        {body:'Web Developer', color:'#0aa1f2', classTag: 'bungee-font'}, 
        {body:<ProgrammingLogos />, color:'#bd24f0', classTag: ''}, 
        {body:<NameHeadline />, color:'#f53131', classTag: ''},
        {body:'', color:'#22f241', classTag: ''}
    ]

    const lines = details.map((detail, index) => {
        const {body, color, classTag} = detail
        return (
            <motion.div 
            className={`${classTag}`} 
            style={{borderTop: 'solid', borderWidth:'2px', borderColor: color, width:`${95 - (index*5)}%`}}
            initial={{x:'-100vw', y:-15}}
            animate={{x:20, y:-15}}
            transition={{delay:(.2 + (index*.1)), duration:.1, type:'spring', stiffness:30}}
            >
                <motion.div
                    className='my-1 text-start ms-2' 
                    initial={{height:'0px', x: '-75vw', opacity:0}}
                    animate={{height: '100%', x:0, opacity:1}}
                    transition={{delay:(2.1 + (index*.2)), duration:.2, type:'spring', stiffness:30}}
                >
                    {body}
                </motion.div>
            </motion.div>
        )
    })

    return (
        <div className='flex-column align-items-end'>
            {lines}
        </div>
    )
}


export default NameUnderLines
