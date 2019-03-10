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
  padding: 15% 35%;

  @media (max-width: 800px) {
    padding: 30% 15%;
  }
`

const Categories = ['Happy Hour Drinks', 'Appetizers']

const BarPage = ({data}) => {
  const { edges: foodImgData } = data.FoodImages
  return (
    <Layout>
      <SEO title="Bar"/>
      <div style={{width: '100%', minHeight: '100vh'}}>
        <Img style={{ position: "absolute", left: 0, top: 0, width: "100%", height: "100%", zIndex: "-1"}} sizes={data.file.childImageSharp.sizes}/>
        <Container>
          <h1 style={{fontFamily: 'Pacifico',  color: '#FFF'}}>Happy Hours</h1>
          <h2 style={{color: '#FFF'}}>3:00pm to 6:00pm</h2>
          <h3 style={{color: '#FFF'}}>Note: Happy Hour food requires a minimum of one drink per person.</h3>
          <a href='#mid' style={{color: '#FFF'}}><FaChevronCircleDown size={42}/></a>
        </Container>
      </div>
      <div id='mid'>
        <MenuSection foodImgData={foodImgData} categories={Categories} noFab={true}/>
      </div>
    </Layout>
  )
}

export const imgQuery = graphql`
  query {
    file(relativePath: { eq: "barback.jpg" }) { 
      childImageSharp {
        sizes(quality: 100) {
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

export default BarPage
