import React from 'react'
import styled from 'styled-components'

import OpenTimes from './open-times'
import FoodToGo from './food-to-go'
import ContactForm from './contact-form'

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto max-content;

  @media (max-width: 1080px) {
    grid-template-columns: auto auto;
  }

  @media (max-width: 600px) {
    grid-template-columns: auto;
  }
`

const ContactGridItem = styled.div`
  @media (max-width: 1080px) {
    grid-column: 1 / span 2;
  }

  @media (max-width: 600px) {
    grid-column: 1;
  }
`

const ReserveGrid = () => (
  <Grid>
    <OpenTimes/>
    <FoodToGo/>
    <ContactGridItem>
      <ContactForm/>
    </ContactGridItem>
  </Grid>
)

export default ReserveGrid