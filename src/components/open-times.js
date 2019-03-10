import React from 'react'
import styled, { css } from 'styled-components'

const Container = styled.div`
  padding: 30px; 
  background-color: rgba(0,0,0,0.5);
  border-radius: 15px;
  margin: 15px;
`

const Title = styled.h2`
  color: #FFF;
  text-align: center;
  font-family: Rancho;
`

const Text = styled.h5`
  float: left;
  color: #FFF;
  margin: 3px;

  ${props =>
    props.right &&
    css`
      float: right;
  `};
`

const Day = ({day, time}) => (
  <div>
    <Text>{day}</Text>
    <Text right>{time}</Text>
    <br/>
  </div>
)

const OpeningTimes = () => (
  <Container>
    <Title>Operating Hours</Title>
    <Day day='Monday' time='11AM-9PM'/>
    <Day day='Tuesday' time='11AM-9PM'/>
    <Day day='Wednesday' time='11AM-9PM'/>
    <Day day='Thursday' time='11AM-9PM'/>
    <Day day='Friday' time='11AM-10PM'/>
    <Day day='Saturday' time='12PM-10PM'/>
    <Day day='Saturday' time='12PM-9PM'/>
  </Container>
)

export default OpeningTimes