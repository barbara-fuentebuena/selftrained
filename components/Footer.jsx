import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
import { FooterContainer } from './Style';

const Footer = () => {
  return (
    <FooterContainer className="footer">
                <div className="social-icons">
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-facebook"></i>
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-twitter"></i>
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-linkedin"></i>
                    </a>
                </div>
                <h5>©️ Copyright</h5>
    </FooterContainer>
  )
}

export default Footer