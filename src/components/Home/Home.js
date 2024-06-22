import React from 'react'
import NameText from './Name/NameText'
import NameText2 from './Name/NameText2'
import TitlePicture from './TitlePicture'
import './home.css'

function Home() {
    return (
            <div id='home-name-container' className=''>
                <NameText />
                {/* <TitlePicture /> */}
            </div>
    )
}

export default Home
