import React from 'react'
import { motion } from 'framer-motion'
import ProgrammingLogos from './ProgrammingLogos'
import './nameunderlines.css'
//TODO: FIGURE OUT WHY UNDERLINES ARE TOO LONG WHEN TEXT AMOUNT CHANGES. Add title and tech stack info between underlines.


function NameUnderLines2() {
    const details = [
        {body:'Web Developer', color:'#0aa1f2', classTag: 'bungee-font'}, 
        {body:<ProgrammingLogos />, color:'#bd24f0', classTag: ''}, 
        {body:'Links', color:'#f53131', classTag: ''},
        {body:'', color:'#22f241', classTag: ''}
    ]

    const lines = details.map((detail, index) => {
        const {body, color, classTag} = detail
        return (
            <motion.div 
            className={`${classTag}`} 
            // style={{borderTop: 'solid', borderWidth:'2px', borderColor: color, width:`${95 - (4*index)}%`}}
            style={{borderTop: 'solid', borderWidth:'2px', borderColor: color, width:'100%'}}
            initial={{x:'-100vw', y:-15}}
            animate={{x:20, y:-15}}
            transition={{delay:(.2 + (index*.1)), duration:.1, type:'spring', stiffness:30}}
            >
                <motion.div
                    className='my-1 d-flex justify-content-end text-start' 
                    initial={{height:'0px', x: '-75vw', opacity:0}}
                    animate={{height: '100%', x:0, opacity:1}}
                    transition={{delay:(2.1 + (index*.2)), duration:.2, type:'spring', stiffness:30}}
                >
                    {/* <p className='pe-2'>{body}</p> */}
                    <div className='ps-2'>{body}</div>
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
