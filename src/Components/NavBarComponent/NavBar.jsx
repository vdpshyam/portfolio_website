import React from 'react';
import NavBarCSS from './NavBar.module.css'
import switchThemeIcon from '../../Assets/Images/switchThemeIcon.png';
import logo from '../../Assets/Images/logo4.png';

function NavBar({ handleNavBarClicksFunc, onMouseLeaveHandlerForChangingCustomCursor, onMouseEnterHandlerForChangingCustomCursor }) {

    function onLogoClick() {
        window.location.reload();
    }

    function onNavClick(sectionId) {
        handleNavBarClicksFunc(sectionId);
    }

    function onMouseEnterHandler(){
        onMouseEnterHandlerForChangingCustomCursor();
    }

    function onMouseLeaveHandler(){
        onMouseLeaveHandlerForChangingCustomCursor();
    }

    return (
        <div>
            <div className={NavBarCSS.navBar}>
                <div className={NavBarCSS.navBarTitle}>
                    <img onClick={onLogoClick} src={logo} alt="VDPS logo" className={NavBarCSS.logo} />
                </div>
                <div className={NavBarCSS.navBarNavigations}>
                    <img src={switchThemeIcon} alt="" className={NavBarCSS.switchThemeIcon} />
                    <button className={NavBarCSS.navigateTo} onClick={() => onNavClick('projectsPageDiv')} onMouseEnter={() => onMouseEnterHandler()} onMouseLeave={() => onMouseLeaveHandler()}>Projects</button>
                    <button className={NavBarCSS.navigateTo} onClick={() => onNavClick('aboutPageDiv')} onMouseEnter={() => onMouseEnterHandler()} onMouseLeave={() => onMouseLeaveHandler()}>About</button>
                    <button className={NavBarCSS.navigateTo} onClick={() => onNavClick('contactPageDiv')} onMouseEnter={() => onMouseEnterHandler()} onMouseLeave={() => onMouseLeaveHandler()}>Contact</button>
                </div>
            </div>
        </div>
    );
}

export default NavBar;