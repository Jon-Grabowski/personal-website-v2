import React from 'react'
import NameLowerCaseLetter from './NameLowerCaseLetter'
import NameUnderLines from './NameUnderLines'
import { motion } from 'framer-motion'
import { firstInitialVariant, lastInitialVariant } from './animationVariantsName';

//TODO: Fix spacing issue after first initial
function NameText() {
    const firstName = ['o','n']
    const lastName = ['r','a','b','o','w','s','k','i']

    const animatedFirstName = firstName.map((letter, index) => {
        return <NameLowerCaseLetter key={index} letter={letter} index={index} delay={.3} />
    });

    const animatedLastName = lastName.map((letter, index) => {
        return <NameLowerCaseLetter key={index} letter={letter} index={index}  delay={.3}/>
    });


    return (
        <div className='m-auto text-white d-flex px-2'>
            <div className='z-1'>
                <motion.div
                    className='lh-1 fw-bold'
                    variants={firstInitialVariant}
                    initial='hidden'
                    animate='visable' 
                >
                    <span style={{fontSize:'calc(1em + 13vw)'}}>J</span>
                </motion.div>
            </div>
            
            <div className='d-flex flex-column'>
                <div className='d-flex align-items-end justify-content-end border'>
                    <div className='d-flex lh-1' style={{fontSize:'calc(1em + 6vw)'}}>
                        {animatedFirstName}
                    </div>
                    <span style={{width: 'calc(.25em + 1vw)'}}></span>
                    <motion.div
                        className='lh-1 fw-bold'
                        variants={lastInitialVariant}
                        initial='hidden'
                        animate='visable'
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
