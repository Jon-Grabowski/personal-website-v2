const firstInitialVariant = {
    hidden: {
        y: "-100vh"
    },
    visable: {
        y: 0,
        transition : {duration: 3, type: 'spring', stiffness: 80}
    }
};

const lastInitialVariant = {
    hidden: {
        x: -400, 
        y: 400,opacity:0, 
        rotateZ:-270
    },
    visable: {
        x: 0,
        y: 8, 
        opacity: 1, 
        rotateZ: 0,
        transition : {duration: 5, type: 'spring', stiffness: 110}
    }
};

export {firstInitialVariant, lastInitialVariant}