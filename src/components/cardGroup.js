import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"
import Card from "./card"

const CardArray = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: flex-start;
  flex-wrap: wrap;
  text-decoration: none;
  background-color: red;
  margin-bottom: 5px;
  margin-top: 50px;

  :a {
    text-decoration: none;
  }
  @media (max-width: 780px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const CardGroup = ({ data }) => (
  <CardArray>
    {data.allContentfulTexture.edges.map(edge => (
      <Card
        number={edge.node.number}
        title={edge.node.title}
        description={edge.node.description}
        thumbnail={"https:" + edge.node.thumbnail.file.url}
      ></Card>
    ))}
  </CardArray>
)
export default CardGroup
