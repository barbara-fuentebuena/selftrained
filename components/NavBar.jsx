import React from 'react'
import { NavBarContainer, BgDiv } from './Style'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Logo from '../src/assets/img/logo-selftrained.png'

const NavBar = () => {
    const [isNavbarWhite, setIsNavbarWhite] = useState(false);

    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setIsNavbarWhite(offset > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <header>
            <NavBarContainer isNavbarWhite={isNavbarWhite} menuActive={menuActive} className={isNavbarWhite ? 'white-background' : ''}>
                <BgDiv className={`initial ${menuActive ? 'active' : ''}`}></BgDiv>
                <div className='img-logo'>
                    <Link to={"/"}>
                        <img src={Logo} alt="logo" />
                    </Link>
                </div>
                <div className={`menu-items ${menuActive ? 'menu-active' : ''}`}>
                    <ul>
                        <Link to={"/"}><li className='li-1'>ABOUT</li></Link>
                        <Link to={"/"}><li className='li-2'>PROGRAMS</li></Link>
                        <Link to={"/"}><li className='li-3'>CONTACT</li></Link>
                    </ul>
                </div>
                <div className={`menu-icon ${menuActive ? 'menu-active' : ''}`} onClick={toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </NavBarContainer>
        </header>
    )
}

export default NavBar