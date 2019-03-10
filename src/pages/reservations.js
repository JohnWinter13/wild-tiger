import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import { FaPhone } from 'react-icons/fa'

import Layout from '../components/layout'
import SEO from '../components/seo'
import GMap from '../components/gmap'
import ReserveGrid from '../components/reserve-grid'

const ReservationsPage = ({data}) => (
  <Layout>
    <SEO title="Reservations"/>
    <div style={{width: '100%', minHeight: '100vh', marginTop: '50px'}}>
      <Img style={{ left: 0, top: 0, height: "100%", width: "100%", zIndex: "-1", position: 'fixed'}} sizes={data.file.childImageSharp.sizes}/>
      <div style={{textAlign: 'center', color: '#FFF', padding: '5% 0',}}>
        <h1 style={{fontFamily: 'Pacifico'}}>Reservations</h1>
        <h3>For reservations, please call us during operating hours</h3>
        <FaPhone size={26}/>
        <h3 style={{display: 'inline'}}>+1 360-882-8887</h3>
      </div>
      <ReserveGrid/>
      <GMap/>
    </div>
  </Layout>
)

export const imgQuery = graphql`
  query {
    file(relativePath: { eq: "relax.jpg" }) { 
      childImageSharp {
        sizes(quality: 90) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`

export default ReservationsPage
