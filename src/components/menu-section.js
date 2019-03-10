import React from 'react'
import styled from 'styled-components'

import Fab from './fab'
import FoodCard from './food-card'

import { FaUtensils } from 'react-icons/fa'

import FoodList from "../data/menu.json"

import './fonts.css'

const Title = styled.h1`
  font-family: Pacifico;
  color: #333;
  display: inline;
`

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
`

const Icon = styled.div`
  display: inline-block;
  background-color: #333; 
  color: #D79922;
  border-radius: 60px;
  box-shadow: 0px 0px 2px #888;
  padding: 0.5em 0.6em;
  margin: 15px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
`

const Category = ({category, foodImgData}) => (
  <div style={{padding: '2px 16px'}}>
    <Icon><FaUtensils size={42} style={{paddingTop: '5px'}}/></Icon>
    <Title>{category}</Title>
    <hr/>
    <Grid>
      {FoodList.filter(foodItem => foodItem.category === category)
        .map(foodItem => {
          const imgData = foodImgData.find(img => img.node.relativePath === foodItem.img)
          if (imgData) {
            return (
              <FoodCard title={foodItem.name} desc={foodItem.description} price={foodItem.price} spice={foodItem.spice} img={imgData.node.childImageSharp.sizes} />
            )
          }
          else {
            return (
              <FoodCard title={foodItem.name} desc={foodItem.description} spice={foodItem.spice} price={foodItem.price}/>
            )
          }
        })
      }
    </Grid>
  </div>
)

const MenuSection = ({foodImgData, categories, noFab}) => (
  <Card>
    {!noFab && <Fab/>}
    {categories.map(cat => <Category category={cat} foodImgData={foodImgData}/>)}
  </Card>
)

export default MenuSection