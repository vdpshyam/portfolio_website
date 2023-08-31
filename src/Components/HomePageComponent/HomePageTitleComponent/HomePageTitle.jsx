import React from 'react';
import HomePageTitleCSS from './HomePageTitle.module.css'

function HomePageTitle() {
    return (
        <div className={HomePageTitleCSS.titleDiv}>
            <h1 className={HomePageTitleCSS.title}>Hello World,</h1>
            <div className={HomePageTitleCSS.spacer}></div>
            <h1 className={HomePageTitleCSS.title}>Say Hello to my World :)</h1>
        </div>
    );
}

export default HomePageTitle;