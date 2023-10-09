import { styled, keyframes } from 'styled-components';

const slideInFromRight = keyframes`
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(0);
    }
`;


export const NavBarContainer = styled.div`
    background-color: ${({ isNavbarWhite }) => (isNavbarWhite ? 'white' : 'transparent')};
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 1000;
    margin-top: ${({ isNavbarWhite }) => (isNavbarWhite ? '-50px' : '0px')};
    letter-spacing: 2px;
    font-size: ${({ isNavbarWhite, menuActive }) => (isNavbarWhite && !menuActive ? '0.8rem' : '1.2rem')};
    transition: background-color 0.3s ease;
    height: 50px;
    .img-logo{
        display: flex;
        align-items: center;
        z-index: 100;
        img{
            height: ${({ isNavbarWhite }) => (isNavbarWhite ? '40px' : '70px')};
            width: fit-content;
            filter: ${({ isNavbarWhite, menuActive }) => (isNavbarWhite && !menuActive ? 'none' : 'brightness(0) invert(1)')};
        }
    }
    .menu-items {
        transition: ${({menuActive}) => (!menuActive ? 'all .6s ease' : 'none')};
        ul {
            display: flex;
            align-items: center;
            list-style: none;
            padding: 0;
            li {
                padding-inline: 10px;
                margin: 10px 0;
                color: ${({ isNavbarWhite, menuActive }) => (isNavbarWhite && !menuActive ? 'black' : 'white')};
                font-weight: ${({ isNavbarWhite, menuActive }) => (
                (isNavbarWhite && menuActive) ? '500' : '500')};
                animation: ${slideInFromRight} 0.6s ease forwards;
            }
            a {
                text-decoration: none;
            }
        }
    }
    .menu-icon {
        display: none;
        z-index: 100;
        div {
            width: 25px;
            height: 3px;
            background-color: ${({ isNavbarWhite, menuActive }) => (
                (isNavbarWhite && !menuActive) ? '#54749a' : 'white'
            )};
            margin: 5px;
            transition: transform 0.3s;
        }
        div:first-child {
            transform: ${({ menuActive }) => (menuActive ? 'rotate(-45deg) translate(-5px, 6px)' : 'none')};
        }
        div:nth-child(2) {
            opacity: ${({ menuActive }) => (menuActive ? '0' : '1')};
        }
        div:last-child {
            transform: ${({ menuActive }) => (menuActive ? 'rotate(45deg) translate(-5px, -6px)' : 'none')};
        }
    }
    @media (max-width: 768px) {
        .menu-icon {
            display: block;
            cursor: pointer;
        }
        .menu-items {
            display: block;
            z-index: 100;
            position:absolute;
            margin-left:auto;
            margin-right:auto;
            top:200px;
            left: 0;
            right:0;
            text-align:center;
            ul {
                display: ${({ menuActive }) => (menuActive ? 'block' : 'none')};   
            }
        }
    }
`

export const BgDiv = styled.div`
    position:absolute;
    background-color:#54749a;
    opacity: 95%;
    width:100%;
    top:-2000px;
    left:-2000px;
    height:100%;
    transition: all .6s ease;
    &.active{
        top:-50px;
        left:0;
        width:100%;
        height: 100vh;
    }
`

export const HomeContainer = styled.div`
    .main-banner {
        position: relative;
        width: 100%;
        height: 700px; 
        @media(max-width:768px){
            height: 500px;
        }
        img {
            height: 700px;
            margin-top: -50px;
            width: 100%;
            object-fit: cover;
            filter: brightness(50%);
            @media(max-width:768px){
            height: 500px;
        }
        }
        .main-title{
        width: 100%!important;
        position:absolute;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        @media(max-width:768px){
        top: 50%;
        }
        h2{
            font-size: 3rem;
            color: white;
            margin: 0;
            font-weight: 600;
            @media(max-width:768px){
            font-size: 2rem;
        }
        }
        h1{
            font-weight: 900;
            letter-spacing: -4px;
            font-style: italic;
            font-size: 5rem;
            color: white;
            margin: 0;
            @media(max-width:768px){
            font-size: 3rem;
        }
    }
    .button-banner{
        margin: 20px;
        font-size: 1rem;
        font-weight: 100;
        letter-spacing: 2px;
        padding: 20px;
        background-color: #54749a;
        color: white;
        border: none;
        border-radius: 30px;
        width: 200px;
        &:hover{
            background-color: white;
            color: #54749a;
            font-weight: bold;
        }
        @media(max-width:768px){
            font-size: 1rem;
        }
    }
    }
}
    
`