import React from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'
import { LinkedIn, GitHub } from './Logos'
import { motion } from 'framer-motion'

function Sidebar() {
    return (
        <motion.div
            id='sidebar-container'
            initial={{y:'-100vh'}}
            animate={{y:0}}
            transition={{duration:2, delay:.5, type:'spring', stiffness:200, damping:20, when:'beforeChildren'}}
        >
            <div  className=''>
                    <motion.div id='sidebar-links-wrapper'
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{delay:2.3, duration:1.5}}
                    >
                        <Link className='' to='https://www.linkedin.com/in/jon-grabowski/' target='_blank'>
                            <LinkedIn />
                        </Link>
                        <Link className='' to='https://github.com/Jon-Grabowski' target='_blank'>
                            <GitHub />
                        </Link>
                    </motion.div>
            </div>
        </motion.div>
    )
}

export default Sidebar
