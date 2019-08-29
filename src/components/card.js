import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"

const Card = props => (
  <CardContainer>
    <CardItem>
      <ThumbnailBG image={props.thumbnail}>
        <DetailContainer>
          <NumberItem>
            {props.number},{props.title}
          </NumberItem>
          <p> {props.description}</p>
        </DetailContainer>
      </ThumbnailBG>
    </CardItem>
  </CardContainer>
)
export default Card
const CardContainer = styled.div`
  text-decoration: none;
  background-color: red;
  border-radius: 24px;
  overflow: none;
  margin: 16px;
  width: 400px;
  height: 260px;

  :a {
    text-decoration: none;
  }
  @media (max-width: 780px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
const CardItem = styled.div``

const ThumbnailBG = styled.div`
  background: url(${props => props.image});
  min-height: 260px;
  min-width: 400px;
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  border-radius: 20px;
`

const NumberItem = styled.p`
  z-index: 1;
  color: white;
`
const DetailContainer = styled.div`
  padding: 24px;
`
