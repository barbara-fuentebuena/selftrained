import styled from "styled-components"

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
    font-size: ${({ isNavbarWhite }) => (isNavbarWhite ? '0.8rem' : '1.2rem')};
    transition: background-color 0.3s ease;
    height: 50px;
    .img-logo{
        display: flex;
        align-items: center;
        img{
            height: ${({ isNavbarWhite }) => (isNavbarWhite ? '40px' : '70px')};
            width: fit-content;
            filter: ${({ isNavbarWhite }) => (isNavbarWhite ? 'none' : 'brightness(0) invert(1)')};
        }
    }
    .menu-items{
        ul{
            display: flex;
            li{
                list-style: none;
                padding-inline: 10px;
                color: white;
                font-weight: 500;
                color: ${({ isNavbarWhite }) => (isNavbarWhite ? 'black' : 'white')};   
            }
            a{
                text-decoration: none;
            }
        }
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