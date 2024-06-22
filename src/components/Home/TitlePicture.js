import React from 'react'
import { motion } from 'framer-motion'

const pictureVariant = {
    hidden: {
        width: 0,
        opacity: 0,
        rotateY: 360
    },
    visable: {
        width: '100%',
        opacity: 1,
        rotateY: 0,
        transition: {delay:3.5, duration: 5, type:'spring', stiffness: 20}
    }
};

function TitlePicture() {
    return (
        <motion.div 
            className=''
            style={{maxWidth:'20rem'}}
            variants={pictureVariant}
            initial='hidden'
            animate='visable'
        >
            <img src='../images/IMG_1908_CROPPED_FACE.jpg' alt='Jon Grabowski' className='w-100 rounded-circle' />
        </motion.div>
    )
}

export default TitlePicture
