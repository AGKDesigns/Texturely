import React from "react"
import styled from "styled-components"

const HeaderContainer = styled.div`
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
  height: 48px;
  width: 300px;
  display: inline-block;
`

const TagLine = styled.p`
  margin-top: -20px;
  color: #aaaaaa;
`

const Header = ({ data }) => (
  <HeaderContainer>
    <Logo src={require("../images/logo.png")} />
    <TagLine> Free premium textures for personal and commercial use.</TagLine>
  </HeaderContainer>
)
export default Header
