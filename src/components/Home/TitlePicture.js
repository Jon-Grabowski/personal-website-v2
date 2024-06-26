import React from 'react'
import { motion } from 'framer-motion'

const pictureVariant = {
    hidden: {
        opacity: 0
    },
    visable: {
        opacity: 1,
        transition: {delay:2.3, duration: 1.5}
    }
};

function TitlePicture() {
    return (
        <motion.div 
            className='m-auto mt-3'
            style={{maxWidth:'15rem'}}
            variants={pictureVariant}
            initial='hidden'
            animate='visable'
        >
            <img src='../images/IMG_1908_CROPPED_FACE.jpg' alt='Jon Grabowski' className='w-100 rounded-circle' />
        </motion.div>
    )
}

export default TitlePicture
