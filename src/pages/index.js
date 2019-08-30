import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import CardGroup from "../components/cardGroup"
import Header from "../components/header"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import "./index.css"
import Footer from "../components/footer"

const IndexPage = ({ data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: "description", content: data.site.siteMetadata.description },
        { name: "keywords", content: data.site.siteMetadata.keywords },
      ]}
    />
    <Header />

    <CardGroup data={data} />
    <SEO title="Home" />
    <Footer />
  </div>
)

export default IndexPage

export const query = graphql`
  query SiteTitleQuery2 {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
    allContentfulTexture(sort: { fields: [createdAt], order: ASC }) {
      edges {
        node {
          title
          number
          keyword
          description
          createdAt
          thumbnail {
            file {
              url
            }
          }
          image {
            file {
              url
            }
          }
        }
      }
    }
  }
`
