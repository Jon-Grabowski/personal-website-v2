import React from 'react'
import { motion } from 'framer-motion'

function NameText() {
    const firstName = ['o','n']
    const lastName = ['r','a','b','o','w','s','k','i']

    const animatedFirstName = firstName.map((letter, index) => {
        return(
            <motion.div
                key={index}
                className='display-2'
                initial={{y: "-100vh"}}
                animate={{y: 0}}
                transition={{delay:(.3 + (.2*index)), duration: .5, type: 'spring', stiffness: 50}}
            >{letter}</motion.div>
        )
    });

    const animatedLastName = lastName.map((letter, index) => {
        return(
            <motion.div
                key={index}
                className='display-2'
                initial={{opacity: 0, x:-50}}
                animate={{opacity: 1, x:0}}
                transition={{delay:(.3 + (.1*index)), duration: .4, type: 'tween'}}
            >{letter}</motion.div>
        )
    });


    return (
        <div className='text-start m-auto text-white'>
            <div className='d-flex text-bottom'>
                <motion.div
                    className='display-1 fw-bold'
                    initial={{x: -400, y: -400,opacity:0, rotateZ:-270}}
                    animate={{x: 0, y: 0, opacity: 1, rotateZ: 0}}
                    transition={{duration: 5, type: 'spring', stiffness: 110}}
                >J</motion.div>
                <div className='d-flex align-items-end'>
                    {animatedFirstName}
                </div>
                <span style={{width: '20px'}}></span>
                <motion.div
                    className='display-1 fw-bold'
                    initial={{x: -400, y: 400,opacity:0, rotateZ:-270}}
                    animate={{x: 0, y: 0, opacity: 1, rotateZ: 0}}
                    transition={{duration: 5, type: 'spring', stiffness: 110}}
                >G</motion.div>
                <div className='d-flex align-items-end'>
                    {animatedLastName}
                </div>
            </div>
            <div className='d-flex ps-5'>
                
            </div>
        </div>
    )
};

export default NameText
