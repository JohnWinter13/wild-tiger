import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import MenuSection from '../components/menu-section'

import { FaChevronCircleDown } from 'react-icons/fa'

const Container = styled.div`
  text-align: center;
  padding: 20% 15%;

  @media (max-width: 800px) {
    padding: 35% 15%;
  }
`

const MenuPage = ({data}) => {
  const { edges: foodImgData } = data.FoodImages
  return (
    <Layout>
      <SEO title="Menu"/>
      <div style={{width: '100%', minHeight: '100vh'}}>
        <Img style={{ position: "absolute", left: 0, top: 0, width: "100%", height: "100%", zIndex: "-1"}} fixed={data.file.childImageSharp.sizes}/>
        <Container>
          <h1 style={{fontFamily: 'Pacifico',  color: '#FFF'}}>Our Menu</h1>
          <h2 style={{color: '#FFF'}}>Sunt ut officia in id labore laborum id ad.</h2>
          <a href='#mid' style={{color: '#FFF'}}><FaChevronCircleDown size={42}/></a>
        </Container>
      </div>
      <div id='mid'>
        <MenuSection foodImgData={foodImgData}/>
      </div>
    </Layout>
  )
}

export const imgQuery = graphql`
  query {
    file(relativePath: { eq: "back.jpg" }) { 
      childImageSharp {
        sizes(quality: 90) {
          ...GatsbyImageSharpSizes
        }
      }
    }

    FoodImages: allFile(
      filter: { relativePath: { regex: "/food/" } }
    ) {
      edges {
        node {
          relativePath
          childImageSharp {
            sizes(quality: 60) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`

export default MenuPage
