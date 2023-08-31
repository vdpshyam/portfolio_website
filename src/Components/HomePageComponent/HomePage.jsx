import React from 'react';
import HomePageCSS from './HomePage.module.css'
import HomePageTitle from './HomePageTitleComponent/HomePageTitle'
import HomePageIntro from './HomePageIntroComponent/HomePageIntro'


function HomePage() {
    return (
        <div>
            <div className={HomePageCSS.homePageTitleDiv}>
                <HomePageTitle />
            </div>
            <div className={HomePageCSS.homePageIntroDiv}>
                <HomePageIntro />
            </div>
            <div className={HomePageCSS.homePageParaDiv}>
                <p>Have a look at some of my projects below...</p>
            </div>
        </div>
    );
}

export default HomePage;