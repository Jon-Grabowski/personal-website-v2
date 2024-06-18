import React from 'react'
import NameLowerCaseLetter from './NameLowerCaseLetter'
import NameUnderLines from './NameUnderLines'
import { motion } from 'framer-motion'

function NameText() {
    const firstName = ['o','n']
    const lastName = ['r','a','b','o','w','s','k','i']

    const animatedFirstName = firstName.map((letter, index) => {
        return(
            // <motion.div
            //     key={index}
            //     className=''
            //     initial={{y: "-100vh"}}
            //     animate={{y: 0}}
            //     transition={{delay:(.3 + (.2*index)), duration: .5, type: 'spring', stiffness: 50}}
            // >{letter}</motion.div>
            <NameLowerCaseLetter key={index} letter={letter} index={index} delay={.3} />
        )
    });

    const animatedLastName = lastName.map((letter, index) => {
        return(
            // <motion.div
            //     key={index}
            //     className=''
            //     initial={{opacity: 0, x:-50}}
            //     animate={{opacity: 1, x:0}}
            //     transition={{delay:(.3 + (.1*index)), duration: .4, type: 'tween'}}
            // >{letter}</motion.div>
            <NameLowerCaseLetter key={index} letter={letter} index={index}  delay={.3}/>
        )
    });


    return (
        <div className='m-auto text-white d-flex px-2'>
            <div className='z-1'>
                <motion.div
                        className='lh-1 fw-bold'
                    initial={{y: "-100vh"}}
                    animate={{y: 0}}
                    transition={{duration: 3, type: 'spring', stiffness: 80}}
                ><span style={{fontSize:'calc(1em + 13vw)'}}>J</span></motion.div>
            </div>
            
            <div className='d-flex flex-column'>
                <div className='d-flex align-items-end'>
                    <div className='d-flex lh-1' style={{fontSize:'calc(1em + 6vw)'}}>
                        {animatedFirstName}
                    </div>
                    <span style={{width: 'calc(.25em + 1vw)'}}></span>
                    <motion.div
                        className='lh-1 fw-bold'
                        initial={{x: -400, y: 400,opacity:0, rotateZ:-270}}
                        animate={{x: 0, y: 8, opacity: 1, rotateZ: 0}}
                        transition={{duration: 5, type: 'spring', stiffness: 110}}
                        style={{fontSize:'calc(1em + 9vw)'}}
                    >G</motion.div>
                    <div className='d-flex lh-1' style={{fontSize:'calc(1em + 6vw)'}}>
                        {animatedLastName}
                    </div>
                </div>
                <NameUnderLines />
            </div>
        </div>
    )
};

export default NameText
