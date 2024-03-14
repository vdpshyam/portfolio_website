import React from 'react';
import NavBarCSS from './NavBar.module.css'
import switchThemeIcon from '../../Assets/Images/switchThemeIcon.png';
import logo from '../../Assets/Images/logo4.png';

// const image = '../../Assets/Images/switchThemeIcon.png';

function NavBar({ handleNavBarClicksFunc }) {

    function onLogoClick() {
        window.location.reload();
    }

    function onNavClick(sectionId) {
        handleNavBarClicksFunc(sectionId);
    }

    return (
        <div>
            <div className={NavBarCSS.navBar}>
                <div className={NavBarCSS.navBarTitle}>
                    <img onClick={onLogoClick} src={logo} alt="VDPS logo" className={NavBarCSS.logo} />
                </div>
                <div className={NavBarCSS.navBarNavigations}>
                    <img src={switchThemeIcon} alt="" className={NavBarCSS.switchThemeIcon} />
                    <button className={NavBarCSS.navigateTo} onClick={() => onNavClick('projectsPageDiv')}>Projects</button>
                    <button className={NavBarCSS.navigateTo} onClick={() => onNavClick('aboutPageDiv')}>About</button>
                    <button className={NavBarCSS.navigateTo} onClick={() => onNavClick('contactPageDiv')}>Contact</button>
                </div>
            </div>
        </div>
    );
}

export default NavBar;