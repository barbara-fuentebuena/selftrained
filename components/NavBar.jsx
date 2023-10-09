import React from 'react'
import { NavBarContainer } from './Style'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Logo from '../src/assets/img/logo-selftrained.png'

const NavBar = () => {
    const [isNavbarWhite, setIsNavbarWhite] = useState(false);

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
            <NavBarContainer isNavbarWhite={isNavbarWhite} className={isNavbarWhite ? 'white-background' : ''}>
                <div className='img-logo'>
                    <Link to={"/"}>
                        <img src={Logo} alt="logo" />
                    </Link>
                </div>
                <div className='menu-items'>
                    <ul>
                        <Link to={"/"}><li>ABOUT</li></Link>
                        <Link to={"/"}><li>PROGRAMS</li></Link>
                        <Link to={"/"}><li>CONTACT</li></Link>
                    </ul>
                </div>
            </NavBarContainer>
        </header>
    )
}

export default NavBar