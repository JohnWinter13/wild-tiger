import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

import { FaMoneyBillWave } from 'react-icons/fa'

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px;
  cursor: pointer;
  margin: 15px;

  :hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`

const FoodCard = ({title, desc, img, price}) => (
  <Card>
    {img && <Img sizes={img} alt="Food" style={{width: '100%', height: '200px', borderRadius: '5px 5px 0 0'}}/>}
    <div style={{padding: '10px'}}>
      <h4 style={{display: 'inline'}}><b>{title}</b></h4>
      <h5 style={{display: 'inline', color: 'green', float: 'right'}}><b>{price}</b></h5>
      {price && <FaMoneyBillWave style={{color: 'green', display: 'inline', float: 'right', margin: '1px 3px'}}/>}
      <p style={{fontSize: '12px', lineHeight: '15px', marginTop: '5%'}}>{desc}</p>
    </div>
  </Card>
)

export default FoodCard