import { styled, keyframes } from 'styled-components';
import BackgroundGray from '../src/assets/img/background-gray.jpg'
import BannerProgram from '../src/assets/img/banner-program.jpeg'


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
            @media (max-width: 768px) {
                width: 50px;
            }
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
        height: 650px; 
        @media(max-width:768px){
            height: 450px;
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
    .bloc-presentation{
        max-width: 80%;
        position: relative;
        z-index: 2;
        margin: -50px auto -50px auto;
        display: flex;
        @media(max-width:768px){
            display: block;
            height: auto;
            margin: -50px auto 0px auto;
        }
        .presentation-picture{
            width: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            @media(max-width:768px){
                margin: auto;
                width: 100%;
            }
            img{
                height: 500px;
                @media(max-width:768px){
                width: 90%;
                height: auto;
            }
            }
        }
        .presentation-text{
            width: 50%;
            display: block;
            margin: auto;
            padding: 50px;
            margin-left: 30px;
            text-align: center;
            letter-spacing: .5px;
            font-weight: lighter;
            @media(max-width:768px){
                width: 100%;
                padding: 0;
                padding-top: 20px;
                margin-left: 0px;
            }
            h2{
                text-align: end;
                font-weight: 500;
                font-size: 3rem;
                font-family: 'Sedgwick Ave', cursive;
                color: #54749a;
                @media(max-width:768px){
                margin: -10px;
                padding: 5px;
            }
            }
            p{
                text-align: justify;
            }
            button{
                margin: 20px;
                font-size: 1rem;
                font-weight: 100;
                letter-spacing: 2px;
                padding: 15px;
                background-color: transparent;
                border: #54749a solid 1px;
                color: #54749a;
                border-radius: 30px;
                width: 160px;
                &:hover{
                    background-color: #54749a;
                    color: white;
                    font-weight: bold;
                }
                @media(max-width:768px){
                    font-size: 1rem;
                }
            }
        }
    }
    .bloc-program{
        max-width: 100%;
        padding: 30px;
        text-align: center;
        background-image: url(${BackgroundGray});
        .program-home-text{
            h2{
                font-size: 3.3rem;
                word-wrap: wrap;
                font-weight: lighter;
                font-style: italic;
                letter-spacing: -2px;
                color: #434343;
                margin-top: 70px;
                span{
                    font-weight: 900;
                }
            }
            .program-home-list{
                width: 70%;
                margin: auto;
                @media(max-width:768px){
                    width: 100%;
                }
                ul{
                    padding: 0;
                    div{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    @media(max-width:768px){
                    display: block;
                }
                }
                }
                li{
                width: 50%;
                list-style: none;
                letter-spacing: 1px;
                font-weight: 300;
                padding: 10px;
                @media(max-width:768px){
                    width: fit-content;
                    margin: auto;
                }
                @media(max-width:450px){
                    width: 100%;
                }
                div{
                    display: flex;
                    justify-content: start;
                    align-items: center;
                    i{
                        padding: 10px;
                        font-size: 2.5rem;
                        color: #434343;
                    }
                    p{
                        padding: 10px;
                        text-align: start;
                    }
                }
                }
            }
        }    
    }
    .program-home-container{
        background-image: url(${BannerProgram});
        height: 550px;
        display: flex;
        justify-content: start;
        align-items: center;
        padding: 20px;
        @media(max-width:768px){
            text-align: center;
            }
        .program-home-text{
            padding: 30px;
            color: white;
            h3{
                margin: -5px;
                font-size: 2.5rem;
                font-weight: lighter;
            }
            h4{
                margin: -5px;
                font-size: 2.5rem;
                font-weight: 900;
                font-style: italic;
                color: #54749a;
            }
            p{
                letter-spacing: .7px;
                font-weight: lighter;
            }
            button{
                font-size: .75rem;
                font-weight: 100;
                letter-spacing: 2px;
                padding: 15px;
                background-color: transparent;
                border: white solid 1px;
                color: white;
                border-radius: 30px;
                width: 150px;
                &:hover{
                    background-color: #54749a;
                    color: white;
                    font-weight: bold;
                    border: #54749a solid 1px;
                }
                @media(max-width:768px){
                    font-size: .75rem;
                    padding: 10px;
                }
            }
        }
    }
    .consultation-container{
            display: flex;
            padding-top: 30px;
            align-items: center;
            border-radius: 0px 200px 0px 0px;
            width: 80%;
            background-color: #54749a;
            margin: -50px auto auto auto ;
            @media(max-width:768px){
                display: flex;
                flex-direction: column-reverse;
                width: 95%;
                padding-bottom: 50px;
                }
            .consultation-text{
                width: 50%;
                text-align: center;
                margin-top: -40px;
                @media(max-width:768px){
                    margin-top: 20px;
                    margin-bottom: 20px;
                }
                h2{
                    margin: 0 0 0 -120px;
                    font-size: 3rem;
                    color: white;
                    letter-spacing: -2px;
                    @media(max-width:768px){
                    text-align: center;
                    margin-left: -120px;
                }
                }
                h4{
                    font-family: 'Yellowtail', cursive;
                    color: whitesmoke;
                    margin-left: -120px;
                    margin: 0 0 -65px 120px;
                    z-index: -10;
                    opacity: 90%;
                    font-size: 5rem;
                    transform: skewY(-5deg);
                    @media(max-width:768px){
                    text-align: center;
                    margin: 0 0 -70px 110px;
                }
                @media(max-width:400px){
                    text-align: center;
                    margin: 0 0 -70px 85px;
                }
                }
                h3{
                    margin: 0px;
                    font-weight: 100;
                    font-size: 2rem;
                    color: white;
                    @media(max-width:768px){
                    text-align: center;
                }
                }
            }
            .consultation-form{
                width: 50%;
                @media(max-width:768px){
                    width: 100%;
                }
                form{
                    width: 100%;
                    padding: 30px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    @media(max-width:768px){
                        padding: 0px;
                    }
                    input{
                        width: 80%;
                        background-color: white;
                        border: none;
                        padding: 15px;
                        margin: 5px;
                    }
                    .text-input-area{
                            height: 100px;
                        }
                button{
                margin-top: 10px;
                font-size: .75rem;
                font-weight: 100;
                letter-spacing: 2px;
                padding: 15px;
                border: none;
                background-color: transparent;
                color: white;
                border-radius: 30px;
                width: 150px;
                display: flex;
                align-items: center;
                justify-content: center;
                &:hover{
                    background-color: #54749a;
                    color: white;
                    font-weight: bold;
                    }
                    @media(max-width:768px){
                    font-size: 1rem;
                    padding: 10px;
                    }
                }
            }             
        }
    }
`  
export const FooterContainer = styled.div`
    margin: 30px; 
    opacity: 80%;
    .social-icons{
        display: flex;
        justify-content: center;
        align-items: center;
        a{
            font-size: 1.5rem;
            padding: 10px;
            color: #54749a;
        }
    }
    h5{
        text-align: center;
        color: #54749a;
        margin-top: 0;
        font-weight: 400;
    }
    
`
