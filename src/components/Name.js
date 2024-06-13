import React from 'react'
import { motion } from 'framer-motion'
function Name() {
    const firstName = ['o','n','a','t','h','a','n']
    const lastName = ['r','a','b','o','w','s','k','i']

    const animatedFirstName = firstName.map((letter, index) => {
        return(
            <motion.div
                key={index}
                initial={{y: "-50vh"}}
                animate={{y: 0}}
                transition={{delay:(.3 + (.2*index)), duration: .5, type: 'spring', stiffness: 130}}
            >{letter}</motion.div>
        )
    });

    const animatedLastName = lastName.map((letter, index) => {
        return(
            <motion.div
                key={index}
                initial={{opacity: 0, x:-50}}
                animate={{opacity: 1, x:0}}
                transition={{delay:(1.6 + (.2*index)), duration: .5, type: 'tween'}}
            >{letter}</motion.div>
        )
    });


    return (
        <div className='text-start border display-1 fw-bold m-auto'>
            <div className='border d-flex'>
                <motion.div
                    initial={{x: 100, y: 100,opacity:0, rotateZ:-360}}
                    animate={{x: 0, y: 0, opacity: 1, rotateZ: 0}}
                    transition={{duration: 3, type: 'spring', stiffness: 110}}
                >J</motion.div>
                {animatedFirstName}
                {/* <motion.div
                    initial={{y: "-50vh"}}
                    animate={{y: 0}}
                    transition={{delay:.3, duration: 1, type: 'tween'}}
                >o</motion.div>
                <motion.div
                    initial={{y: "-50vh"}}
                    animate={{y: 0}}
                    transition={{delay:.6, duration: 1, type: 'tween'}}               
                >n</motion.div> */}
            </div>
            <div className='border d-flex'>
                <motion.div
                    initial={{x: 100, y: 100,opacity:0, rotateZ:-360}}
                    animate={{x: 0, y: 0, opacity: 1, rotateZ: 0}}
                    transition={{delay: 1.5, duration: 3, type: 'spring', stiffness: 110}}
                >G</motion.div>
                {animatedLastName}
            </div>
        </div>
    )
}

export default Name
