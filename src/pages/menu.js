import React from 'react'
import { graphql } from 'gatsby'
import Img from "gatsby-image"

import Layout from '../components/layout'
import SEO from '../components/seo'
import MenuSection from '../components/menu-section'

import { FaChevronCircleDown } from 'react-icons/fa'

const MenuPage = ({data}) => (
  <Layout>
    <SEO title="Menu"/>
    <Img style={{ position: "absolute", left: 0, top: 0, width: "100%", height: "100%", zIndex: "-1"}} fixed={data.file.childImageSharp.sizes}/>
    <div style={{ textAlign: 'center', marginTop: '20%'}}>
      <h1 style={{fontFamily: 'Pacifico',  color: '#FFF'}}>Our Menu</h1>
      <h2 style={{color: '#FFF'}}>We are bringing new Thai dishes, made with the freshest ingredients, to the South East of Vancouver, WA. </h2>
      <a href='#mid' style={{color: '#FFF'}}><FaChevronCircleDown size={42}/></a>
    </div>
    <div id='mid' style={{margin: '500px 0'}}>
      <MenuSection/>
    </div>
  </Layout>
)

export const imgQuery = graphql`
  query {
    file(relativePath: { eq: "back.jpg" }) { 
      childImageSharp {
        sizes(quality: 90) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`

export default MenuPage
