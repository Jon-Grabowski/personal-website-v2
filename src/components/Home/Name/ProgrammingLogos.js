import React from 'react'
import { JavaScriptLogo, ReactLogo, HtmlLogo, CssLogo, PythonLogo} from '../../Logos'

function ProgrammingLogos() {
    return (
        <div className='d-flex justify-content-evenly align-items-center my-auto gap-2'>
            <div className='d-flex align-items-center flex-column'>
                <JavaScriptLogo />
                <span>JavaScript</span>
            </div>
            <span> • </span>
            <div className='d-flex align-items-center flex-column'>
                <ReactLogo className=''/>
                <span>React</span>
            </div>
            <span> • </span>
            <div className='d-flex align-items-center flex-column'>
                <HtmlLogo />
                <span>HTML5</span>
            </div>
            <span> • </span>
            <div className='d-flex align-items-center flex-column'>
                <CssLogo />
                <span>CSS3</span>
            </div>
            <span> • </span>
            <div className='d-flex align-items-center flex-column'>
                <PythonLogo />
                <span>Python</span>
            </div>
        </div>
    )
};

export default ProgrammingLogos
