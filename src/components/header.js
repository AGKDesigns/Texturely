import React from "react"

import styled from "styled-components"

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
  text-decoration: none;

  :a {
    text-decoration: none;
  }
  @media (max-width: 780px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const Header = ({ data }) => (
  <HeaderContainer>
    <div>This could be a header</div>
  </HeaderContainer>
)
export default Header
