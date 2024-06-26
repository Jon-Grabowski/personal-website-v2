import React from 'react'
import { JavaScriptLogo, ReactLogo, HtmlLogo, CssLogo, PythonLogo} from '../../Logos'

function ProgrammingLogos() {
    const logoList = [<JavaScriptLogo />, <ReactLogo />, <HtmlLogo />, <CssLogo />, <PythonLogo />]
    const logos = logoList.map((logo, index) => {
        return (
            <div key={index} className='d-flex align-items-center flex-column'>
                {logo}
            </div>
        )
    })
    return (
        <div className='d-flex gap-3 gap-sm-4 py-2'>
            {logos}
        </div>
    )
};

export default ProgrammingLogos
