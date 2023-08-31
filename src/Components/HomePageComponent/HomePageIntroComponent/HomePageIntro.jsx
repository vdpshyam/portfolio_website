import React from 'react';
import HomePageIntroCSS from './HomePageIntro.module.css'

function HomePageIntro() {
    return (
        <div className={HomePageIntroCSS.titleDiv}>
            <h1 className={HomePageIntroCSS.title}>I am <span className={HomePageIntroCSS.myName}>Shyam</span>,</h1>
            <div className={HomePageIntroCSS.spacer}></div>
            <h1 className={HomePageIntroCSS.title}>and I design and develop mobile apps , webapps, websites, with great UI/UX.</h1>
        </div>
    );
}

export default HomePageIntro;