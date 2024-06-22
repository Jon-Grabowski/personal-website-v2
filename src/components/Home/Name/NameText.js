import React from 'react'
import NameLowerCaseLetter from './NameLowerCaseLetter'
import NameUnderLines from './NameUnderLines'
import { motion } from 'framer-motion'
import { firstInitialVariant, lastInitialVariant } from './animationVariantsName';
import './nametext.css'

//TODO: Fix spacing issue after first initial
function NameText() {
    const firstName = ['o','n']
    const lastName = ['r','a','b','o','w','s','k','i']

    const animatedFirstName = firstName.map((letter, index) => {
        return <NameLowerCaseLetter key={index} letter={letter} index={index} delay={.5} />
    });

    const animatedLastName = lastName.map((letter, index) => {
        return <NameLowerCaseLetter key={index} letter={letter} index={index}  delay={.6}/>
    });


    return (
      
            <div className='d-flex flex-column text-white ms-5' style={{minHeight:'22rem', maxWidth:'30rem'}}>
                <div id='name-container' className='d-flex display-1'>
                    <div className='d-flex pe-3'>
                        <motion.div
                            className='fw-bold z-1'
                            variants={firstInitialVariant}
                            initial='hidden'
                            animate='visable' 
                        >
                            J
                        </motion.div>
                        <div className='d-flex'>
                            {animatedFirstName}
                        </div>
                    </div>
                    <div className='d-flex'>
                        <motion.div
                            className='fw-bold'
                            variants={lastInitialVariant}
                            initial='hidden'
                            animate='visable'
                        >G</motion.div>
                        <div className='d-flex'>
                            {animatedLastName}
                        </div>
                    </div>
                </div>
                <div className=''>
                    <NameUnderLines />
                </div>
            </div>
     
    )
};

export default NameText
