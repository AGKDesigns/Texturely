import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"

const Card = props => (
  <CardContainer>
    <CardItem>
      <ImageLink href={props.imageLink}>
        <ThumbnailBG image={props.thumbnail}>
          <DetailContainer>
            <NumberItem>{props.number}</NumberItem>
            <Title>{props.keywords}</Title>
          </DetailContainer>
        </ThumbnailBG>
      </ImageLink>
    </CardItem>
  </CardContainer>
)
export default Card
const CardContainer = styled.div`
  text-decoration: none;
  background-color: #aaaaaa;
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
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.3);
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  :hover {
    background-size: 105%;
    opacity: 1;
  }
`

const ImageLink = styled.a``

const NumberItem = styled.p`
  z-index: 1;
  color: white;
  font-size: 42px;
  margin-top: 110px;
  font-weight: 700;
`

const Title = styled.p`
  color: white;
`

const DetailContainer = styled.div`
  padding: 24px;
  margin-left: 24px;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  :hover {
    background-size: 105%;
    opacity: 0;
    margin-left: 0px;
  }
`
