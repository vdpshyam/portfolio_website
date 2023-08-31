import React from 'react';
import NavBarCSS from './NavBar.module.css'
import switchThemeIcon from '../../Assets/Images/switchThemeIcon.png';
import logo from '../../Assets/Images/logo3.png';

// const image = '../../Assets/Images/switchThemeIcon.png';

function NavBar() {

    function onLogoClick() {
        window.location.reload();
    }

    return (
        <div>
            <div className={NavBarCSS.navBar}>
                <div className={NavBarCSS.navBarTitle}>
                    <img onClick={onLogoClick} src={logo} alt="VDPS logo" className={NavBarCSS.logo} />
                </div>
                <div className={NavBarCSS.navBarNavigations}>
                    <img src={switchThemeIcon} alt="" className={NavBarCSS.switchThemeIcon} />
                    <a href='/' className={NavBarCSS.navigateTo}>Projects</a>
                    <a href='/' className={NavBarCSS.navigateTo}>About</a>
                    <a href='/' className={NavBarCSS.navigateTo}>Contact</a>
                </div>
            </div>
        </div>
    );
}

export default NavBar;