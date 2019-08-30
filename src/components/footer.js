import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const FooterContainer = styled.div`
  text-decoration: none;
  padding: 24px;
  height: auto;
  margin-bottom: -60px;

  :a {
    text-decoration: none;
  }
  @media (max-width: 780px) {
  }
`

const Logo = styled.img`
  height: 50px;
  width: 400px;
  display: inline-block;
`

const TagLine = styled.p`
  margin-top: -20px;
  color: #aaaaaa;
`

const Footer = ({ data }) => (
  <FooterContainer>
    <Link to="/About">About</Link>
    <Link to="/About">Donate via Paypal</Link>
    <Link to="/About">Donate via Bitcoin</Link>
  </FooterContainer>
)
export default Footer
