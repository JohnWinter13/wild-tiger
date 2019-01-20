import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image"

import Layout from '../components/layout'
import SEO from '../components/seo'
import Button from '../components/button'

import '../components/fonts.css'

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Img style={{ position: "absolute", left: 0, top: 0, width: "100%", height: "100%", zIndex: "-1"}} fixed={data.file.childImageSharp.fixed}/>
    <div style={{textAlign: 'center', marginTop: '20%'}}>
      <h1 style={{fontFamily: 'Pacifico',  color: '#FFF'}}> Welcome! </h1>
      <h2 style={{color: '#FFF'}}>We are bringing new Thai dishes, made with the freshest ingredients, to the South East of Vancouver, WA. </h2>
      <Link to="/"><Button primary>Menu</Button></Link>
      <Button>Reservations</Button>
    </div>
  </Layout>
)

export const imgQuery = graphql`
  query {
    file(relativePath: { eq: "welcome.jpg" }) { 
      childImageSharp {
        fixed(width: 1920) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default IndexPage
