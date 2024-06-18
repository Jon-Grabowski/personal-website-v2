import React from 'react'
import NameLowerCaseLetter from './NameLowerCaseLetter'
import NameUnderlines2 from './NameUnderlines2'
import { motion } from 'framer-motion'
import { firstInitialVariant, lastInitialVariant } from './animationVariantsName';
import './nametext.css'

//TODO: Fix spacing issue after first initial
function NameText2() {
    const firstName = ['o','n']
    const lastName = ['r','a','b','o','w','s','k','i']

    const animatedFirstName = firstName.map((letter, index) => {
        return <NameLowerCaseLetter key={index} letter={letter} index={index} delay={.5} />
    });

    const animatedLastName = lastName.map((letter, index) => {
        return <NameLowerCaseLetter key={index} letter={letter} index={index}  delay={.6}/>
    });


    return (
      
            <div className='d-flex flex-column text-white ms-3' style={{minHeight:'20rem'}}>
                <div id='name-container' className='d-flex align-items-end display-1 d-inline'>
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
                <div className='w-100'>
                    <NameUnderlines2 />
                    {/* <NameUnderLines /> */}
                </div>
            </div>
     
    )
};

export default NameText2